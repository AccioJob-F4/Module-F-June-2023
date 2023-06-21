import React, { lazy, Suspense, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { StyledButton } from "./styledComponents";

import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

// import Login from "./components/Login";
// import Home from "./components/Home";
// import About from "./components/About";

const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const Login = lazy(() => import("./components/Login"));

const GlobalStyle = createGlobalStyle`
  p{
    color:  ${(props) => props.theme.color};
    background-color: ${(props) => props.theme.backgroundColor};
    font-size: 1.3em;

    padding: 10px;
  }

  h3{
    color: ${(props) => props.theme.heading}
  }
`;

const lightTheme = {
  backgroundColor: "white",
  color: "purple",
  heading: "red",
};

const darkTheme = {
  backgroundColor: "purple",
  color: "white",
  heading: "green",
};

const App = () => {
  const [activeTheme, setActiveTheme] = useState("lightTheme");

  const [role, setRole] = useState("ADMIN");

  return (
    <ThemeProvider
      theme={activeTheme === "lightTheme" ? lightTheme : darkTheme}
    >
      <GlobalStyle />
      <div>
        <BrowserRouter>
          <Suspense fallback={<div>LOADING...</div>}>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route
                path="/login"
                element={<Login userRole={role} requiredRoles={["ADMIN"]} />}
              />
              {/* <Route path="/about" element={<About />} /> */}

              <Route
                path="/about"
                element={
                  ["ADMIN"].includes(role) ? (
                    <About />
                  ) : (
                    <Login userRole={role} requiredRoles={["ADMIN"]} />
                  )
                }
              />
            </Routes>
          </Suspense>

          <nav>
            <Link to="/login">
              <StyledButton secondary>Login</StyledButton>
            </Link>{" "}
            |
            <Link to="/about">
              <StyledButton secondary>About</StyledButton>
            </Link>{" "}
            |
            <Link to="/">
              <StyledButton primary>Home</StyledButton>
            </Link>
          </nav>
        </BrowserRouter>

        <p>
          This is a paragraph written by Divyansh Singh who is very bad at
          sports but enjoys VolleyBall
        </p>

        <h3>
          This is a heading to show that theme objects can have properties other
          than css variables
        </h3>

        <button
          onClick={() => {
            activeTheme === "lightTheme"
              ? setActiveTheme("darkTheme")
              : setActiveTheme("lightTheme");
          }}
        >
          {activeTheme === "lightTheme" ? "Dark" : "Light"} Mode
        </button>
      </div>
    </ThemeProvider>
  );
};

export default App;

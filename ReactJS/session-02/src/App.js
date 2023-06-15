import React from "react";
import { withDataFetching } from "./withDataFetching";
import url from "./Greeting";
import Greeting from "./Greeting";

const App = ({ data, isLoading, error }) => {
  if (isLoading) return <div>[LOADING...]</div>;

  if (error) return <div>Error : {error.message}</div>;

  return (
    <div>
      Data
      <br />
      <h1>
        <Greeting />
      </h1>
    </div>
  );
};

export default withDataFetching(App, "https://randomuser.me/api/");

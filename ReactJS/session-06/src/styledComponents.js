import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${(props) => (props.primary ? "dodgerblue" : "inherit")};
  color: ${(props) => (props.primary ? "white" : "dodgerblue")};
  border-radius: 3px;
  outline: none;
  border: ${(props) => (props.primary ? "none" : "1px solid dodgerblue")};
  height: 20px;
  width: 70px;
  cursor: pointer;
`;

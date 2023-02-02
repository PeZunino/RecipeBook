import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*{
  border:0px;
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  font-family: "Cabin", sans-serif;
  outline: none;
}
body{
  background-color: #ffffff;

  
  a {
    color: gray;
    text-decoration: none;
  }

  button {
    background-color: transparent;
    border: 0px;
    cursor: pointer;
  }
}
h1 , h2 , h3 {
  width:fit-content
}
`;

export default GlobalStyles;

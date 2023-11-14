import { createGlobalStyle, css } from "styled-components";

const styles = css`
  box-sizing: border-box;
  margin: 0;
  background: red;
  padding: 0;
  transition: 0.25s;
  font-family: "Montserrat", sans-serif;
`;

const GlobalStyles = createGlobalStyle`
  ${styles}
`;

export default GlobalStyles;

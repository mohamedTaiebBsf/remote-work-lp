import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --white: #fff;
    --white-500: #fafafa;
    --gray: #696969;
    --black: 	#141414;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Epilogue', sans-serif;
    background-color: var(--white-500);
    color: var(--gray);
    font-weight: 500;
    line-height: 1.3;
  }
`;

const Container = styled.div`
  height: 100vh;
`;

export default GlobalStyle;
export { Container };

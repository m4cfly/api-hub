import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100vw;
    min-height: 100vh;
    overflow-x: hidden;  // Forhindrer horisontal scroll
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: 1.6;
    background-color: #f5f5f5;
    color: #333;
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: 1.2;
    margin-bottom: 1rem;
  }

  h1 {
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    margin-bottom: 1rem;
  }
`

export default GlobalStyles
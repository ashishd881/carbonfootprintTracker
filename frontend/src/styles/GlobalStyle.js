import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', 'Roboto', 'Arial', sans-serif;
    background: linear-gradient(120deg, #e0ffe0 0%, #e0f7fa 100%);
    color: #222;
    min-height: 100vh;
  }
  h1, h2, h3 {
    color: #2e7d32;
    margin-bottom: 0.5em;
  }
  button {
    background: #43a047;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 0.5em 1.2em;
    font-size: 1em;
    cursor: pointer;
    transition: background 0.2s;
  }
  button:hover {
    background: #388e3c;
  }
  input, select {
    padding: 0.5em;
    border: 1px solid #bdbdbd;
    border-radius: 4px;
    margin-bottom: 1em;
    font-size: 1em;
  }
  .card {
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(44, 62, 80, 0.08);
    padding: 2em;
    margin: 1em 0;
  }
`;

export default GlobalStyle; 
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary: #e42d2d;
    --color-secondary: #2e65bf;
    --color-accent: #2e65bf;
    --color-success: #2abf55;
    --color-info: #37bed3;
    --color-highlight: #7950d2;
    --color-text: #ffffff;
    --color-background: linear-gradient(135deg, #2e65bf, #37bed3);
  }

  body {
    font-family: 'Roboto', sans-serif;
    background: var(--color-background);
    color: var(--color-text);
    transition: all 0.3s ease;
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins', sans-serif;
    color: var(--color-text);
  }

  button {
    font-family: 'Roboto', sans-serif;
    background-color: var(--color-primary);
    color: var(--color-text);
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;

    &:hover {
      background-color: var(--color-secondary);
      transform: translateY(-2px);
    }
  }

  a {
    color: var(--color-info);
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: var(--color-highlight);
    }
  }
`;

export const themes = {
  default: {
    primaryColor: 'var(--color-primary)',
    secondaryColor: 'var(--color-secondary)',
    accentColor: 'var(--color-accent)',
    backgroundColor: 'var(--color-background)',
    successColor: 'var(--color-success)',
    infoColor: 'var(--color-info)',
    highlightColor: 'var(--color-highlight)',
    textColor: 'var(--color-text)',
  },
  // You can add more themes here if needed
};
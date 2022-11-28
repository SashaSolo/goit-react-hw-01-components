import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
   background-color: rgb(230, 224, 224);
  
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  display: block;
  width: 100%;
  height: auto;
}

h1,
h2,
h3,
h4,
h5,
h6,
ul,
 {
  margin: 0;
  padding: 0;
  list-style: none;
}
`;

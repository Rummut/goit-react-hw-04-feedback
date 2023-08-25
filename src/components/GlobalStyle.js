import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
  background-color: #e7ecf2;
  font-family: 'Open Sans', sans-serif;
}

h1,
h2,
h3,
h4,
h5,
p {
  margin: 0;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

button{
  padding: 0;
}
`;

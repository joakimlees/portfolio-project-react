import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`


body {
  height: 100vh;
  margin: 0;
  background-color: black;
}


#root {
  height: 100%;
}

.site-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 1920px;
  margin: 0px auto;
}

img {
  width: 100%;
}



`;

import { createGlobalStyle } from "styled-components";
// bu yerda component uchun kerak bolgan funksiya yuklandi

const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
  box-sizing: border-box;
  font-family: "Mouse Memoirs", sans-serif;
}
/*
  2. Remove default margin
*/
* {
  margin: 0;
  padding: 0;
  line-height: 1.2;
}
/*
  Typographic tweaks!
  3. Add accessible line-height
  4. Improve text rendering
*/
html, body, #root{
    height: 100%;
}


body {
  -webkit-font-smoothing: antialiased;
}
/*
  5. Improve media defaults
*/
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
/*
  6. Remove built-in form typography styles
*/
input, button, textarea, select {
  font: inherit;
}
/*
  7. Avoid text overflows
*/
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
/*
  8. Create a root stacking context
*/
#root, #__next {
  isolation: isolate;
}
`;

export default GlobalStyles;
// bu yerda esa component export qilinmoqda
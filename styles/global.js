import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    color: inherit;
    margin: 0;
    font-size: 100%;
    vertical-align: baseline;
    text-decoration: none;
    overflow-wrap: break-word;
  }
  a {
    transition: 0.2s;
  }

  p {
    margin-bottom: .5rem;
  }
  ::selection {
    background: var(--primary-color);
    color: var(--gray-extra-light);
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  h1, h2, h3, h4, h5, h6 {
    color: var(--primary-color);
  }
  h2 {
    line-height: 1.5;
  }
  h3, h4, h5, h6 {
    line-height: 1.25;
  }
  body {
    color: var(--text-color);
  }
  strong {
    font-weight: bold;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
  }
  body {
    background: var(--body-bg);
    font-size: 16px;
    font-weight: 400;
    font-style: normal; 
    line-height: 1.75;
    font-family: var(--primary-font);
    word-break: break-word;
    hyphens: auto;
  }
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  :root { 
    --gray-extra-light: #f4f6f9; 
    --gray-light: #c9d1d9;  
    --gray: #28303c;
    --gray-dark: #3a3d4d;
    --primary-color: #0c132b;
    --secondary-color: #191f45;
    --thirdy-color: #c85517;
    --body-bg: #f5f8fa; 
    --content-bg: #fff;
    --bg-light: var(--gray-light);
    --bg-dark: var(--secondary-color);
    --box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 2px;
    --gap: var(--space-sm);
    --border-light: var(--gray-light);
    --border-dark: var(--gray-dark);
    --border-radius: 4px;
    --primary-font: 'Inter', sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    --secondary-font: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    --thirdy-font: Happy-Times, serif;
    --link-color: var(--thirdy-color);
    --link-color-hover: var(--gray);
    --text-color: #28303c;
    --text-light: var(--gray-light);
    --text-dark: var(--gray-dark);
    --width-container: 1200px;
    --content-width: 900px;
    --space: 2rem;
    --space-sm: 1rem;
    --space-lg: 3rem;
  }
`

export default GlobalStyle

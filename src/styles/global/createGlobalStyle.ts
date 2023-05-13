import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  *,
  ::before,
  ::after {
    border-width: 0;
    border-style: solid;
  }

  html {
    font-size: 100%;
  
    @media (min-width: 1080px) {
      font-size: 125%;
    }
  }

  blockquote,
  dl,
  dd,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  hr,
  figure,
  p,
  pre {
    margin: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-weight: inherit;
  }

  ol,
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  img,
  svg,
  video,
  canvas,
  audio,
  iframe,
  embed,
  object {
    display: block;
    vertical-align: middle;
  }

  img,
  video {
    max-width: 100%;
    height: auto;
  }

  button {
    background: transparent;
    cursor: pointer;
  }
`;

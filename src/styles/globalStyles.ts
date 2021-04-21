import { createGlobalStyle } from 'styled-components'
import { IColors } from '../store/theme/types'

export const GlobalStyle = createGlobalStyle<{ theme: IColors }>`
  :root {
    --primary-color: ${(props) => props.theme.primary_color};
    --secondary-color: ${(props) => props.theme.secundary_color};
    --thirdy-color: ${(props) => props.theme.thirdy_color};
    --fourthy-color: ${(props) => props.theme.fourth_color};
    --background-color: #f2f4f6;
    --font-family: 'Raleway', sans-serif;
  }

  body {
    margin: 0;
    font-family: var(--font-family);
    background-color: var(--background-color);

  }

  code {
    font-family: var(--font-family);
  }

  * {
    box-sizing: border-box;
  }

  .App{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      form{
        display: flex;
        gap: 0.685rem;
        margin: 0.685rem 0;
      }
      label{
        display: flex;
      flex-direction: column;

      }
      input{
        border-radius: 5px;
        background: transparent;
        margin: 0 2px;
      }
  }
`

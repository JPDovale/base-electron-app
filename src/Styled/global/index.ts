import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        cursor: default;
    }

    a{
        cursor: pointer;
        text-decoration: none;
        color: ${({theme}) => theme.Colors.Text100};
    }
`
import React from 'react' ;

import AppRoutes from '../AppRoutes';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../Styled/global';

import { themeApp } from '../Theme';

export default function App(){
    return (
        <ThemeProvider theme={themeApp}>
          <GlobalStyle/>
          <AppRoutes />
        </ThemeProvider>
    )
}
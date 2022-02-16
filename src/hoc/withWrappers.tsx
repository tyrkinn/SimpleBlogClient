import React, {ReactElement} from 'react';
import {ColorModeScript, ChakraProvider, theme} from '@chakra-ui/react';
import {BrowserRouter} from 'react-router-dom';


export const withWrappers = (component: ReactElement) => {
  return (
    <React.StrictMode>
      <ColorModeScript/>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          {component}
        </BrowserRouter>
      </ChakraProvider>
    </React.StrictMode>
  );
};

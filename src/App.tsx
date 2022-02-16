import * as React from 'react';
import {Center, ChakraProvider, Text, theme, VStack} from '@chakra-ui/react';
import {ColorModeSwitcher} from './components/shared/ColorModeSwitcher';

export const App = () => (
  <ChakraProvider theme={theme}>
    <Center height={'100vh'}>
      <VStack>
        <Text fontSize={'xl'}>Hello World!</Text>
        <ColorModeSwitcher/>
      </VStack>
    </Center>
  </ChakraProvider>
);

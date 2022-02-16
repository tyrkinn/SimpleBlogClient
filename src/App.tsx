import * as React from 'react';
import {Center, Text, VStack} from '@chakra-ui/react';
import {ColorModeSwitcher} from './components/shared/ColorModeSwitcher';

export const App = () => (
  <Center height={'100vh'}>
    <VStack>
      <Text fontSize={'xl'}>Hello World!</Text>
      <ColorModeSwitcher/>
    </VStack>
  </Center>
);

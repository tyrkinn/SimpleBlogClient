import React from 'react';
import {Flex, HStack, Menu, MenuButton} from '@chakra-ui/react';

export const HeaderUnregisteredMenu = () => {
  return (
    <Flex alignItems={'center'}>
      <Menu>
        <HStack>
          <MenuButton>Login</MenuButton>
          <MenuButton>Register</MenuButton>
        </HStack>
      </Menu>
    </Flex>
  );
};

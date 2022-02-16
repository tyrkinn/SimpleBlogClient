import React, {ReactNode} from 'react';
import {User} from 'types/User';
import {
  Avatar,
  Box, Flex,
  HStack,
  Menu,
  MenuButton,
  Text,
  VStack,
} from '@chakra-ui/react';
import {FiChevronDown} from 'react-icons/fi';

export interface HeaderUserMenuProps {
  user: User;
  children: ReactNode;
}

export const HeaderUserMenu: React.FC<HeaderUserMenuProps> =
  ({user: {avatarLink, fistName, lastName, role}, children}) => {
    return (
      <Flex alignItems={'center'}>
        <Menu>
          <MenuButton
            py={2}
            transition="all 0.3s"
            _focus={{boxShadow: 'none'}}>
            <HStack>
              <Avatar
                size={'sm'}
                src={avatarLink ?? undefined}
              />
              <VStack
                display={{base: 'none', md: 'flex'}}
                alignItems="flex-start"
                spacing="1px"
                ml="2">
                <Text fontSize="sm">{fistName} {lastName}</Text>
                <Text fontSize="xs" color="gray.600">
                  {role}
                </Text>
              </VStack>
              <Box display={{base: 'none', md: 'flex'}}>
                <FiChevronDown/>
              </Box>
            </HStack>
          </MenuButton>
          {children}
        </Menu>
      </Flex>
    );
  };

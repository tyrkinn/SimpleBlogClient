import {
  Flex,
  FlexProps,
  HStack,
  IconButton, MenuItem,
  MenuList,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import {FiMenu} from 'react-icons/fi';
import React from 'react';
import {User} from '../../types/User';
import {HeaderUserMenu} from './HeaderUserMenu';
import {HeaderUnregisteredMenu} from './HeaderUnregisteredMenu';

export interface ResponsiveHeaderProps extends FlexProps {
  onOpen: () => void;
  logo: string;
  user?: User;
}

export const ResponsiveHeader: React.FC<ResponsiveHeaderProps> =
  ({onOpen, logo, user, ...rest}) => {
    return (
      <Flex
        ml={{base: 0, md: 60}}
        px={{base: 4, md: 4}}
        height="20"
        alignItems="center"
        bg={useColorModeValue('white', 'gray.900')}
        borderBottomWidth="1px"
        borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
        justifyContent={{base: 'space-between', md: 'flex-end'}}
        {...rest}>
        <IconButton
          display={{base: 'flex', md: 'none'}}
          onClick={onOpen}
          variant="outline"
          aria-label="open menu"
          icon={<FiMenu/>}
        />

        <Text
          display={{base: 'flex', md: 'none'}}
          fontSize="2xl"
          fontFamily="monospace"
          fontWeight="bold">
          {logo}
        </Text>
        <HStack spacing={{base: '0', md: '6'}}>
          {user ?
            <HeaderUserMenu user={user}>
              <MenuList
                bg={useColorModeValue('white', 'gray.900')}
                borderColor={useColorModeValue('gray.200', 'gray.700')}>
                <MenuItem>Options</MenuItem>
              </MenuList>
            </HeaderUserMenu> :
            <HeaderUnregisteredMenu/>
          }
        </HStack>
      </Flex>
    );
  };

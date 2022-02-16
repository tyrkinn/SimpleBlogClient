import {
  Box,
  BoxProps,
  CloseButton,
  Flex,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import {IconType} from 'react-icons';
import {NavItem} from 'components/sidebar/NavItem';


export interface LinkItemProps {
  name: string;
  icon: IconType;
}

interface SidebarContentProps extends BoxProps {
  onClose: () => void;
  links: LinkItemProps[];
  logo: string;
}

export const SidebarContent: React.FC<SidebarContentProps> =
  ({onClose, logo, links, ...rest}) => {
    return (
      <Box
        transition="3s ease"
        bg={useColorModeValue('white', 'gray.900')}
        borderRight="1px"
        borderRightColor={useColorModeValue('gray.200', 'gray.700')}
        w={{base: 'full', md: 60}}
        pos="fixed"
        h="full"
        {...rest}>
        <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
          <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
            {logo}
          </Text>
          <CloseButton display={{base: 'flex', md: 'none'}} onClick={onClose}/>
        </Flex>
        {links.map((link) => (
          <NavItem key={link.name} icon={link.icon}>
            {link.name}
          </NavItem>
        ))}
      </Box>
    );
  };

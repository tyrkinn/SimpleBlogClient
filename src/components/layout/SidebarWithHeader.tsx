import React, {ReactNode} from 'react';
import {
  Box,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import {LinkItemProps} from 'components/sidebar/SidebarContent';
import {ResponsiveSidebar} from 'components/sidebar/ResponsiveSidebar';
import {ResponsiveHeader} from 'components/header/ResponsiveHeader';
import {User} from 'types/User';

export interface SidebarWithHeaderProps {
  children: ReactNode;
  links: LinkItemProps[];
  logo: string;
  user?: User;
}

export const SidebarWithHeader: React.FC<SidebarWithHeaderProps> =
  ({children, logo, links, user}) => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    return (
      <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
        <ResponsiveSidebar
          links={links}
          logo={logo}
          onClose={onClose}
          isOpen={isOpen}
        />
        <ResponsiveHeader logo={logo} onOpen={onOpen} user={user}/>
        <Box ml={{base: 0, md: 60}} p="4">
          {children}
        </Box>
      </Box>
    );
  };

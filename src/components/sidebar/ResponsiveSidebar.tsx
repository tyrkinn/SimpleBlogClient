import {LinkItemProps, SidebarContent} from 'components/sidebar/SidebarContent';
import {Drawer, DrawerContent} from '@chakra-ui/react';
import React, {Fragment} from 'react';

export interface ResponsiveSidebarProps {
  links: LinkItemProps[];
  logo: string;
  onClose: () => void;
  isOpen: boolean;
}

export const ResponsiveSidebar: React.FC<ResponsiveSidebarProps> =
  ({links, logo, onClose, isOpen}) => {
    return (
      <Fragment>
        <SidebarContent
          links={links}
          logo={logo}
          onClose={() => onClose}
          display={{base: 'none', md: 'block'}}
        />
        <Drawer
          autoFocus={false}
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="full">
          <DrawerContent>
            <SidebarContent logo={logo} onClose={onClose} links={links}/>
          </DrawerContent>
        </Drawer>
      </Fragment>
    );
  };

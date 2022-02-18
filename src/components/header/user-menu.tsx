import {IUser} from '../../types/user.interface';
import React from 'react';
import {
  Avatar,
  Button,
  Center,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';

export interface UserMenuProps {
  user: IUser;
}

export const UserMenu: React.FC<UserMenuProps> = ({user}) => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        rounded={'full'}
        variant={'link'}
        cursor={'pointer'}
        minW={0}>
        <Avatar
          size={'sm'}
          src={user.avatarLink ?? undefined}
        />
      </MenuButton>
      <MenuList alignItems={'center'}>
        <br/>
        <Center>
          <Avatar
            size={'2xl'}
            src={user.avatarLink ?? undefined}
          />
        </Center>
        <br/>
        <Center>
          <p>{user.userName}</p>
        </Center>
        <br/>
        <MenuDivider/>
        <MenuItem>Settings</MenuItem>
        <MenuItem>Comments</MenuItem>
        <MenuItem>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
};

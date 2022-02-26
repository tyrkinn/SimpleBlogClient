import React from 'react';
import {
  Box,
  Divider,
  Flex,
  HStack,
  Stack,
  Text,
} from '@chakra-ui/react';
import {ColorModeSwitcher} from '../shared/color-mode-switcher';
import {useAtom} from 'jotai';
import {authAtom} from 'store';
import {UserMenu} from './user-menu';
import {AuthButtons} from './auth-buttons';
import {Logo} from '../shared/logo';


export const SimpleHeader: React.FC = () => {
  const [auth] = useAtom(authAtom);
  return (
    <>
      <Box bg={'transparent'} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <HStack>
            <Logo width={30} />
            <Text>Lambda</Text>
            <Divider
              borderColor={'gray.500'}
              orientation={'vertical'}
              height={6}
            />
            <Text fontWeight={700}>blog</Text>
          </HStack>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <ColorModeSwitcher />
              {
                auth.isAuthorized ?
                  <UserMenu user={auth.user}/> : <AuthButtons />
              }
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

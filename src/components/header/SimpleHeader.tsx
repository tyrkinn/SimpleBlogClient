import React from 'react';
import {
  Box,
  Divider,
  Flex, HStack, Image,
  Stack,
  Text, useColorModeValue,
} from '@chakra-ui/react';
import {ColorModeSwitcher} from 'components/shared/ColorModeSwitcher';
import {useAtom} from 'jotai';
import logo from 'assets/images/oxygen.png';
import logoWhite from 'assets/images/oxygen-white.png';
import {authAtom} from 'store';
import {UserMenu} from './UserMenu';
import {AuthButtons} from './AuthButtons';


export const SimpleHeader: React.FC = () => {
  const [auth] = useAtom(authAtom);
  return (
    <>
      <Box bg={'transparent'} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <HStack>
            <Image
              src={useColorModeValue(logo, logoWhite) as string}
              width={30}
            />
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

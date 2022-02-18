import React from 'react';
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';
import {Logo} from '../shared/logo';
import {PasswordField} from './password-field';

export const LoginForm = () => {
  return (
    <Container maxW="lg" py={{base: '12', md: '24'}} px={{base: '0', sm: '8'}}>
      <Stack spacing="8">
        <Stack spacing="6" display={'flex'} alignItems={'center'}>
          <Logo width={'8rem'}/>
          <Stack spacing={{base: '2', md: '3'}} textAlign="center">
            <Heading size={useBreakpointValue({base: 'xs', md: 'sm'})}>
              Log in to your account
            </Heading>
            <HStack spacing="1" justify="center">
              <Text color="muted">Don&apos;t have an account?</Text>
              <Button variant="link" colorScheme="purple">
                Sign up
              </Button>
            </HStack>
          </Stack>
        </Stack>
        <Box
          py={{base: '0', sm: '8'}}
          px={{base: '4', sm: '10'}}
          bg={useBreakpointValue({base: 'transparent', sm: 'bg-surface'})}
          boxShadow={{base: 'none', sm: useColorModeValue('md', 'md-dark')}}
          borderRadius={{base: 'none', sm: 'xl'}}
        >
          <Stack spacing="10">
            <Stack spacing="5">
              <FormControl>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input id="email" type="email" />
              </FormControl>
              <PasswordField />
            </Stack>
            <Stack >
              <Button variant="solid" colorScheme={'purple'}>Sign in</Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

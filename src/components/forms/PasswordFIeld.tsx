import {
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
  useDisclosure,
  useMergeRefs,
} from '@chakra-ui/react';
import React, {useRef} from 'react';
import {HiEye, HiEyeOff} from 'react-icons/hi';

export const PasswordField = React.forwardRef<HTMLInputElement, InputProps>(
    (props, ref) => {
      const {isOpen, onToggle} = useDisclosure();
      const inputRef = useRef<HTMLInputElement>(null);

      const mergeRef = useMergeRefs(inputRef, ref);
      const onClickReveal = () => {
        onToggle();
        if (inputRef.current) {
          inputRef.current.focus({preventScroll: true});
        }
      };

      return (
        <FormControl isRequired>
          <FormLabel htmlFor="password">Password</FormLabel>
          <InputGroup>
            <InputRightElement>
              <IconButton
                variant="link"
                aria-label={isOpen ? 'Mask password' : 'Reveal password'}
                icon={isOpen ? <HiEyeOff/> : <HiEye/>}
                onClick={onClickReveal}
              />
            </InputRightElement>
            <Input
              id="password"
              ref={mergeRef}
              name="password"
              type={isOpen ? 'text' : 'password'}
              autoComplete="current-password"
              required
              {...props}
            />
          </InputGroup>
        </FormControl>
      );
    });

PasswordField.displayName = 'PasswordField';

import React from 'react';
import {ImageProps, useColorModeValue} from '@chakra-ui/react';
import logo from 'assets/images/oxygen.png';
import logoWhite from 'assets/images/oxygen-white.png';
import {Image} from '@chakra-ui/react';

export const Logo: React.FC<ImageProps> = (props) => {
  return (
    <Image {...props} src={useColorModeValue(logo, logoWhite) as string}/>
  );
};

import React from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';

import { ReactComponent as LogoIcon } from '../../assets/images/rm-logo.svg';

export const Logo = props => {
  const color = useColorModeValue('oxfordBlue.500', 'oxfordBlue.500');
  return <Box as={LogoIcon} w={props.width} color={color} />;
};

export default Logo;

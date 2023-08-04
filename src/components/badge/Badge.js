import React from 'react';
import { Tag } from '@chakra-ui/react';

const Badge = ({ title, bgColour, textColour }) => {
  return (
    <Tag
      borderRadius="full"
      mx="2px"
      mb="4px"
      px="2"
      bg={bgColour}
      color={textColour}
    >
      {title}
    </Tag>
  );
};

export default Badge;

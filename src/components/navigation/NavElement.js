import React from 'react';
import { Link } from '@chakra-ui/react';

function NavElement({id, title, link, isSelected, onClick }) {
  return (
    <Link
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: 'blue.500',
        color: 'white',
      }}
      link={link}
      bg={isSelected ? 'blue.500' : ''}
      color={isSelected ? 'white' : ''}
      onClick={(event) => {
        event.preventDefault();
        onClick(id);
      }}
    >
      {title}
    </Link>
  );
}

export default NavElement;

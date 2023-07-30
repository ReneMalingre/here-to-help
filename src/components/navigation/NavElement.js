import React from 'react';
import '../../index.css';
import { Link } from '@chakra-ui/react';

function NavElement({id, title, link, current, onClick }) {
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
      bg={current ? 'blue.500' : ''}
      color={current ? 'white' : ''}
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

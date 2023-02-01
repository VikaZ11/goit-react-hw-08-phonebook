import { Link } from '@chakra-ui/react';
import { Link as NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Link
        as={NavLink}
        to="/"
        display="inline-block"
        padding="12px"
        fontWeight="700"
        color="#2a363b"
        _hover={{
          color: '#7FB2F9',
        }}
      >
        Home
      </Link>
      {isLoggedIn && (
        <Link
          as={NavLink}
          to="/contacts"
          display="inline-block"
          padding="12px"
          fontWeight="700"
          color="#2a363b"
          _hover={{
            color: '#7FB2F9',
          }}
        >
          Contacts
        </Link>
      )}
    </nav>
  );
};

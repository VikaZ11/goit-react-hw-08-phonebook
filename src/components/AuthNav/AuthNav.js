import { Link } from '@chakra-ui/react';
import { Link as NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <div>
      <Link
        as={NavLink}
        to="/register"
        display="inline-block"
        padding="12px"
        fontWeight="700"
        color="#2a363b"
        _hover={{
          color: '#7FB2F9',
        }}
      >
        Register
      </Link>
      <Link
        as={NavLink}
        to="/login"
        display="inline-block"
        padding="12px"
        fontWeight="700"
        color="#2a363b"
        _hover={{
          color: '#7FB2F9',
        }}
      >
        Log In
      </Link>
    </div>
  );
};

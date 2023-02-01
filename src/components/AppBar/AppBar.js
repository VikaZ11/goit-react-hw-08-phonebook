import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Flex } from '@chakra-ui/react';
import { useAuth } from 'hooks';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Flex
      as="header"
      justifyContent={'space-between'}
      alignItems="center"
      mb="16px"
      borderBottom="1px solid #2a363b"
    >
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Flex>
  );
};
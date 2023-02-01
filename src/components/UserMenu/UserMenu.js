import { useDispatch } from 'react-redux';
import { Button, Flex, Text } from '@chakra-ui/react';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Flex alignItems={'center'} gap="12px">
      <Text fontWeight={'700'}>Welcome, {user.name}</Text>
      <Button
        type="button"
        onClick={() => dispatch(logOut())}
        bgColor="transparent"
        border={'1px solid #2a363b'}
        _hover={{
          borderColor: '#7FB2F9',
        }}
      >
        Logout
      </Button>
    </Flex>
  );
};

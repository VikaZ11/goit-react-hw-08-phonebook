import { useDispatch } from 'react-redux';
import { useState } from 'react';
import {
  FormControl,
  FormLabel,
  InputGroup,
  Input,
  InputRightElement,
  Button,
  useToast,
} from '@chakra-ui/react';
import { logIn } from 'redux/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const toast = useToast();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      .unwrap()
      .then(() =>
        toast({
          title: 'Welcome!',
          status: 'success',
          duration: 3000,
          isClosable: true,
          position: 'top-right',
        })
      )
      .catch((error) =>
        toast({
          title: `Error2`,
          status: 'error',
          duration: 3000,
          isClosable: true,
          position: 'top-right',
        })
      );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <FormControl width="400px" margin={'0 auto'} paddingBottom="16px">
        <FormLabel>
          Email
          <Input
            placeholder="Email"
            size="md"
            type="email"
            name="email"
            isRequired
          />
        </FormLabel>
      </FormControl>
      <FormControl width="400px" margin={'0 auto'} paddingBottom="20px">
        <FormLabel>
          Password
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? 'text' : 'password'}
              placeholder="Enter password"
              name="password"
              isRequired
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormLabel>
      </FormControl>

      <FormControl width="400px" margin={'0 auto'}>
        <Button
          type="submit"
          width="390px"
          _hover={{
            bgColor: '#7FB2F9',
          }}
        >
          Log In
        </Button>
      </FormControl>
    </form>
  );
};

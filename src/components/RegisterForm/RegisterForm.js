import { useDispatch } from 'react-redux';
import { useState } from 'react';
import {
  FormControl,
  FormLabel,
  InputGroup,
  Input,
  InputRightElement,
  Button,
  Text,
  Link
} from '@chakra-ui/react';
import { Link as NavLink } from 'react-router-dom';
import { register } from 'redux/auth/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit} autoComplete="off">
        <FormControl width="400px" margin={'0 auto'} paddingBottom="16px">
          <FormLabel>
            Username
            <Input
              placeholder="Username"
              size="md"
              type="text"
              name="name"
              isRequired
            />
          </FormLabel>
        </FormControl>

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

        <FormControl width="400px" margin={'0 auto'} paddingBottom="20px">
          <Button
            type="submit"
            width="390px"
            size="md"
            _hover={{
              bgColor: '#7FB2F9',
            }}
          >
            Register
          </Button>
        </FormControl>
      </form>

      <Text
        color="#2a363b"
        display={'block'}
        width="fit-content"
        margin={'0 auto'}
        fontSize="l"
      >
        Already have an account?{' '}
        <Link
          as={NavLink}
          to="/login"
          color="#2a363b"
          _hover={{
            color: '#7FB2F9',
          }}
        >
          LogIn
        </Link>
      </Text>
    </>
  );
};

import { Image, Flex, Box, Heading, Link } from '@chakra-ui/react';
import { Link as NavLink } from 'react-router-dom';
import phonebook from '../img/phonebook.png';

export default function Home() {
  return (
    <Flex justifyContent={'space-around'}>
      <Box>
        <Image
          src={phonebook}
          alt="Phonebook"
          width={'400px'}
          margin="0 auto"
        />
      </Box>
      <Box width={'600px'} margin={'0 auto'}>
        <Heading
          p={'50px 20px'}
          textAlign={'center'}
          fontSize={'36px'}
          color="#2a363b"
        >
          Welcome to Contact Book
        </Heading>
        <Link
          as={NavLink}
          to="/register"
          color="#2a363b"
          display={'block'}
          width="fit-content"
          margin="0 auto"
          fontSize={'24px'}
          padding={'10px 20px'}
          border={'1px solid #2a363b'}
          borderRadius="8px"
          _hover={{
            color: '#7FB2F9',
            borderColor: '#7FB2F9',
          }}
        >
          Let`s start!
        </Link>
      </Box>
    </Flex>
  );
}

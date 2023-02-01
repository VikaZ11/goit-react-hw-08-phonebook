import { Outlet } from "react-router-dom";
import { Container } from '@chakra-ui/react';
import { Suspense } from 'react';
import { AppBar } from './AppBar/AppBar'

export const Layout = () => {
    return (
      <Container maxW="container.lg" m="0 auto" p="0 24px">
        <AppBar />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
    );
}
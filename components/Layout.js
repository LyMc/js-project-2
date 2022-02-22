import { Box, Button, Container, HStack, VStack } from '@chakra-ui/react';
import Head from 'next/head';
import Link from 'next/link';

function NavItem({ href, children }) {
  return (
    <Link href={href} passHref>
      <Button as="a" variant="link" size="lg">
        {children}
      </Button>
    </Link>
  );
}

function Header() {
  return (
    <Box bg="purple.500" py={4}>
      <Container>
        <HStack justify="space-between">
          <NavItem href="/">Home</NavItem>
          <NavItem href="/search">Search</NavItem>
        </HStack>
      </Container>
    </Box>
  );
}

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <VStack align="stretch">
        <Header />
        <Box as="main">{children}</Box>
      </VStack>
    </>
  );
}

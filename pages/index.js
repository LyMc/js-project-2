import { Center, Heading } from '@chakra-ui/react';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout title="Homepage">
      <Center h="full">
        <Heading as="h2">App is up and running</Heading>
      </Center>
    </Layout>
  );
}

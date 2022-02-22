import { Container, Input, ListItem, UnorderedList } from '@chakra-ui/react';
import { useState } from 'react';
import { useEffect } from 'react';
import Layout from '../components/Layout';

export default function Search() {
  const [terms, setTerms] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!terms) return;

    fetch(`/api/search?terms=${terms}`)
      .then((r) => r.json())
      .then((r) => setResults(r.results));
  }, [terms]);

  return (
    <Layout>
      <Container>
        <Input
          placeholder="Search for a movie..."
          value={terms}
          onChange={(event) => setTerms(event.target.value)}
        />
        <UnorderedList>
          {results.map((result) => (
            <ListItem key={result.id}>{result.title}</ListItem>
          ))}
        </UnorderedList>
      </Container>
    </Layout>
  );
}

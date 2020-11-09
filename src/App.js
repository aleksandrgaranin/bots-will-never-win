import React, { useState } from 'react';
import useFetchJobs from './useFetchJobs';
import { Container } from 'react-bootstrap';
import Jobs from './components/Jobs/Jobs'



function App() {
  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)
  const { jobs, loading, error } = useFetchJobs(params, page)
  return (
    <Container>
      {loading && <h1>...loading...</h1>}
      {error && <h1>Error...something went wrong</h1>}
      <Jobs jobs={jobs}/>
    </Container>
  );
}

export default App;

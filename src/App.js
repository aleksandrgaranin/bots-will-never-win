import React, { useState } from 'react';
import useFetchJobs from './useFetchJobs';
import { Container } from 'react-bootstrap';
import Jobs from './components/Jobs/Jobs'
import SearchForm from './components/SearchForm/SearchForm';



function App() {
  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)
  const { jobs, loading, error } = useFetchJobs(params, page)
  

  const paramChangeHandler = (event) => {
    const param = event.target.name
    const value = event.target.value
    setParams(prevParans => {
      return { ...prevParans, [param]: value }
    })
  }

  
  return (
    <Container className="my-3">
      <h1> GitHub Jobs </h1>
      {loading && <h1>...loading...</h1>}
      {error && <h1>Error...something went wrong</h1>}
      <SearchForm params={params} onParamChange={paramChangeHandler}></SearchForm>
      <Jobs jobs={jobs} />
    </Container>
  );
}

export default App;

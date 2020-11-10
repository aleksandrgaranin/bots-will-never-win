import React, { useState } from 'react';
import useFetchJobs from './useFetchJobs';
import { Container } from 'react-bootstrap';
import Jobs from './components/Jobs/Jobs'
import SearchForm from './components/SearchForm/SearchForm';
import JPagination from './components/JPagination/JPagination'



function App() {
  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)
  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page)


  const paramChangeHandler = (event) => {
    const param = event.target.name
    const value = event.target.value
    setParams(prevParans => {
      return { ...prevParans, [param]: value }
    })
  }


  return (
    <Container className="my-3">
      {loading ? <h1 style={{ textAlign: 'center' }}>...loading...</h1> : <h1 style={{ textAlign: 'center' }}> GitHub Jobs </h1>}
      {error && <h1>Error...something went wrong. Please reload the page</h1>}

      <div>
        <SearchForm params={params} onParamChange={paramChangeHandler}></SearchForm>
        <JPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
        <Jobs jobs={jobs} />
        <JPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
      </div>
    </Container>
  );
}

export default App;

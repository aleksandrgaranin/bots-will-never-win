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
    <Container style={{ backgroundColor: 'lightgray', padding: '25px' }}>
      {loading ? <h2 style={{ textAlign: 'center', color: 'blue' }}>...loading...</h2> : <h2 style={{ textAlign: 'center', color: 'darkblue' }}> Jobs from GitHub API</h2>}
      {error && <h2>Error...something went wrong. Please reload the page</h2>}

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

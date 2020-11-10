import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';

import JobElement from './JobElement/JobElement'

export default function Jobs({ jobs }) {
    
    return (
        <Table striped bordered hover >
            <thead>
                {jobs.map(job => {
                    console.log(job)
                    return (<tr key={job.id}>
                        <JobElement job={job} style={{}}/>
                    </tr>)
                })}
            </thead>
        </Table>
    )
}

import React from 'react';
import Table from 'react-bootstrap/Table';

export default function Jobs({ jobs }) {

    return (
        <Table variant="dark" size="md">
            <thead>
                {jobs.map(job => {
                    console.log(job)
                    return (<tr key={job.id}>
                        <td>{job.title}, {job.location} </td>
                        <td>{job.created_at}</td>
                        <td>{job.description}</td>
                        <td>{job.full_time}</td>
                    </tr>)
                })}
            </thead>
        </Table>
    )
}

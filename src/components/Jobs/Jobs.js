import React from 'react';
import { Badge } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import ReactMarkdown from 'react-markdown'

export default function Jobs({ jobs }) {

    return (
        <Table striped bordered hover variant="dark" >
            <thead>
                {jobs.map(job => {
                    console.log(job)
                    return (<tr key={job.id}>
                        {/* <td><img alt={job.company} src={job.company_logo} style={{height: '70px'}}></img></td> */}
                        <td>{job.title},
                            <br/> <Badge variant="light">{job.location}</Badge>
                            <br/> <Badge variant="secondary">{job.company}</Badge>
                            <br/> <Badge variant="success">{job.type}</Badge>
                            <br/> 
                                <div style={{wordBreak: 'break-all', color: 'lightblue'}}>
                                <ReactMarkdown source={job.how_to_apply}></ReactMarkdown>
                                </div>
                        </td>
                        <td>{new Date(job.created_at).toLocaleDateString()}</td>
                        <td>{job.description}</td>
                    </tr>)
                })}
            </thead>
        </Table>
    )
}

import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';

import MyVerticallyCenteredModal from './JobElement/JobElement'

export default function Jobs({ jobs }) {
    const [modalShow, setModalShow] = useState(false);
    const [modalJob, setModalJob] = useState({})

    const showModalHandler = (job) => {        
        setModalJob(job)
        setModalShow(true)
    }
    const closeModal = () => {
        setModalShow(false)
        setModalJob({})
    }

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Company Name</th>
                        <th>Date</th>
                        <th>Location</th>
                        <th>Type</th>
                    </tr>
                    {jobs.map(job => {
                        // console.log(job)
                        return (

                            <tr key={job.id} onClick={() => showModalHandler(job)} >
                                {/* <JobElement job={job} /> */}
                                <td>{job.title}</td>
                                <td>{job.company}</td>
                                <td>{new Date(job.created_at).toLocaleDateString()}</td>
                                <td>{job.location}</td>
                                <td>{job.type}</td>
                            </tr>
                        )

                    })}

                </thead>
            </Table>
            <MyVerticallyCenteredModal
                job={modalJob}
                show={modalShow}
                onHide={closeModal}
            />
        </div>
    )
}

import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';

import MyVerticallyCenteredModal from './JobElement/JobElement'

export default function Jobs({ jobs }) {
    const [modalShow, setModalShow] = useState(false);
    const [modalJob, setModalJob] = useState({})
    const [sortedJobs, setSortedJobs] = useState(jobs)
    const [isSorted, setIsSorted] = useState(false)
    useEffect(() => {
    }, [jobs])

    const showModalHandler = (job) => {
        setModalJob(job)
        setModalShow(true)
    }

    const closeModal = () => {
        setModalShow(false)
    }

    const sortByTitlehandler = () => {
        console.log(jobs)
        jobs = jobs.sort((a, b) => {
            let ta = a.title.trim().toLowerCase(),
            tb = b.title.trim().toLowerCase();
            if (ta < tb) {
                return -1;
            }
            if (ta > tb) {
                return 1;
            }})
        // setIsSorted(true)        
        console.log(jobs)  
        setIsSorted(!isSorted)      
    }

    const sortByDate = () => {
        console.log(jobs)
        jobs = jobs.sort((a, b) => {
            let da = new Date(a.created_at),
                db = new Date(b.created_at);
            return da - db;
        })
        // setIsSorted(true)        
        console.log(jobs)  
        setIsSorted(!isSorted)      
    }


    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th onClick={sortByTitlehandler}>Title</th>
                        <th>Company Name</th>
                        <th onClick={sortByDate}>Date</th>
                        <th>Location</th>
                        <th>Type</th>
                    </tr>
                    { jobs.map(job => {
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

import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';

import MyVerticallyCenteredModal from './JobElement/JobElement'

const Jobs =({ jobs }) => {
    const [modalShow, setModalShow] = useState(false);
    const [modalJob, setModalJob] = useState({})
    const [unsorted, setUnsorted] = useState()
    const [isAscendingTitle, setIsAscendingTitle] = useState()
    const [isAscendingDate, setIsAscendingDate] = useState()
    const [isloading, setIsLoading] = useState(true)

    useEffect(() => {
        if (jobs && !isloading) {
            setUnsorted(jobs)
            console.log(unsorted)
            setIsLoading(false)
        }
    }, [])

    const showModalHandler = (job) => {
        setModalJob(job)
        setModalShow(true)
    }

    const closeModal = () => {
        setModalShow(false)
    }

    const sortByTitlehandler = (event, sortKey) => {
        if (!isAscendingTitle) {
            jobs = jobs.sort((a, b) => {
                let ta = a[sortKey].trim().toLowerCase(),
                    tb = b[sortKey].trim().toLowerCase();
                if (ta < tb) {
                    return -1;
                }
                if (ta > tb) {
                    return 1;
                }
            })                 
            setIsAscendingTitle(true)
        } else if (isAscendingTitle) {
            jobs = jobs.sort((a, b) => {
                let ta = a[sortKey].trim().toLowerCase(),
                    tb = b[sortKey].trim().toLowerCase();
                if (ta > tb) {
                    return -1;
                }
                if (ta < tb) {
                    return 1;
                }
            })               
            setIsAscendingTitle(false)
        }
    }

    const sortByDate = () => {
        if (!isAscendingDate) {
            jobs = jobs.sort((a, b) => {
                let da = new Date(a.created_at),
                    db = new Date(b.created_at);
                return da - db;
            })          
            setIsAscendingDate(true)
        } else if (isAscendingDate) {
            jobs = jobs.sort((a, b) => {
                let da = new Date(a.created_at),
                    db = new Date(b.created_at);
                return db - da;
            })
            setIsAscendingDate(false)

        }
    }


    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th onClick={e => sortByTitlehandler(e, 'title')}>Title</th>
                        <th onClick={e => sortByTitlehandler(e, 'company')}>Company Name</th>
                        <th onClick={sortByDate}>Date</th>
                        <th onClick={e => sortByTitlehandler(e, 'location')}>Location</th>
                        <th onClick={e => sortByTitlehandler(e, 'type')}>Type</th>
                    </tr>
                    {jobs.map(job => {
                        return (
                            <tr key={job.id} onClick={() => showModalHandler(job)} >
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
export default Jobs;


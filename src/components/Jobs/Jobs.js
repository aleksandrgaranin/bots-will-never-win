import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Badge } from 'react-bootstrap'
import JobElement from './JobElement/JobElement'
import cloneDeep from 'clone-deep';

const Jobs = ({ jobs }) => {
    const [modalShow, setModalShow] = useState(false);
    const [modalJob, setModalJob] = useState({})
    const [isAscendingString, setIsAscendingString] = useState(0)
    const [isAscendingDate, setIsAscendingDate] = useState(0)
    const [unsortedJobs, setUnsortedJobs] = useState()

    useEffect(() => {
        setUnsortedJobs(cloneDeep(jobs))
    }, []);

    const showModalHandler = (job) => {
        setModalJob(job)
        setModalShow(true)
    }

    const closeModal = () => {
        setModalShow(false)
    }

    const sortByStringhandler = (event, sortKey) => {
        if (isAscendingString === 0) {
            unsortedJobs.sort((a, b) => {
                let ta = a[sortKey].trim().toLowerCase(),
                    tb = b[sortKey].trim().toLowerCase();
                if (ta < tb) {
                    return -1;
                }
                if (ta > tb) {
                    return 1;
                }
            })
            setIsAscendingString(1)
        } else if (isAscendingString === 1) {
            unsortedJobs.sort((a, b) => {
                let ta = a[sortKey].trim().toLowerCase(),
                    tb = b[sortKey].trim().toLowerCase();
                if (ta > tb) {
                    return -1;
                }
                if (ta < tb) {
                    return 1;
                }
            })
            setIsAscendingString(2)
        } else if (isAscendingString === 2) {
            setIsAscendingString(0)
            setUnsortedJobs(cloneDeep(jobs))
        }
    }

    const sortByDateHandler = (event, sortKey) => {
        if (isAscendingDate === 0) {
            unsortedJobs.sort((a, b) => {
                let da = new Date(a[sortKey]),
                    db = new Date(b[sortKey]);
                return da - db;
            })
            setIsAscendingDate(1)
        } else if (isAscendingDate === 1) {
            unsortedJobs.sort((a, b) => {
                let da = new Date(a[sortKey]),
                    db = new Date(b[sortKey]);
                return db - da;
            })
            setIsAscendingDate(2)
        } else if (isAscendingDate === 2) {
            setIsAscendingDate(0)
            setUnsortedJobs(cloneDeep(jobs))
        }
    }

    return (
        <div>
            <Table striped bordered hover variant="dark" responsive>
                <thead>
                    <tr>
                        <th
                            onClick={e => sortByStringhandler(e, 'title')}
                            style={{ cursor: 'pointer', textAlign: 'center' }}
                        >Title </th>
                        <th
                            onClick={e => sortByStringhandler(e, 'company')}
                            style={{ cursor: 'pointer', textAlign: 'center' }}
                        >Company Name</th>
                        <th
                            onClick={e => sortByDateHandler(e, 'created_at')}
                            style={{ cursor: 'pointer', textAlign: 'center' }}
                        >Date</th>
                        <th
                            onClick={e => sortByStringhandler(e, 'location')}
                            style={{ cursor: 'pointer', textAlign: 'center' }}
                        >Location</th>
                    </tr>
                </thead>
                <tbody>
                    {unsortedJobs ? unsortedJobs.map(job => {
                        return (
                            <tr key={job.id} onClick={() => showModalHandler(job)} style={{ cursor: 'pointer' }}>
                                <td>
                                    {job.title}
                                    <br />
                                    <Badge className="m-1 mb-2" variant="success">{job.type}</Badge></td>
                                <td>{job.company}</td>
                                <td>{new Date(job.created_at).toLocaleDateString()}</td>
                                <td>{job.location}</td>
                            </tr>
                        )
                    }) : jobs.map(job => {
                        return (
                            <tr key={job.id} onClick={() => showModalHandler(job)} style={{ cursor: 'pointer' }}>
                                <td>
                                    {job.title}
                                    <br />
                                    <Badge className="m-1 mb-2" variant="success">{job.type}</Badge>
                                </td>
                                <td>{job.company}</td>
                                <td>{new Date(job.created_at).toLocaleDateString()}</td>
                                <td>{job.location}</td>
                            </tr>
                        )
                    })}
                </tbody>

            </Table>
            <JobElement
                job={modalJob}
                show={modalShow}
                onHide={closeModal}
            />
        </div>
    )
}
export default React.memo(
    Jobs, 
    (prevProps, nextProps) => 
        nextProps.show === prevProps.show &&
        nextProps.children === prevProps.children
    );



import React from 'react';
import { Badge, Button, Modal } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown'

const JobElement = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.job.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5 style={{ color: 'darkgreen' }}>"{props.job.company}"</h5>
                <Badge className="mr-1 mb-2" variant="secondary">{props.job.location}</Badge>
                <Badge className="mr-1 mb-2" variant="success">{props.job.type}</Badge>
                <br />
                <hr/>
                <div style={{wordBreak: 'break-all'}}>
                    <p style={{color:'darkblue'}}>How to aply:</p>
                    <ReactMarkdown source={props.job.how_to_apply} />
                </div>
                <hr/>
                <div  style={{wordBreak: 'break-all'}}>
                    <ReactMarkdown source={props.job.description} />
                </div>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default JobElement
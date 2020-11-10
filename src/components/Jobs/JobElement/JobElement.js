
import React, { useState } from 'react';
import { Badge, Button, Collapse, Card, Modal } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown'

// const JobElement = ({ job }) => {
//     const [showMore, setShowMore] = useState(false);

//     return (
//         <Card className="mb-2">
//             <Card.Header as="h5">{job.title}</Card.Header>
//             <Card.Body>
//                 <Card.Title>Company: {job.company}</Card.Title>
//                 <Card.Text>
//                     <Badge variant="secondary">{job.location}</Badge>
//                     <Badge variant="success">{job.type}</Badge>
//                 </Card.Text>
//                 <Button calssName="mb-4" onClick={() => setShowMore(prevShow => !prevShow)}>
//                     {showMore ? 'Hide Details' : 'Show Details' }
//                 </Button>
//                 <Collapse in={showMore}>
//                     <div>
//                         <ReactMarkdown source={job.description} />
//                     </div>
//                 </Collapse>
//             </Card.Body>
//         </Card>
//     )
// }

// export default JobElement

const MyVerticallyCenteredModal = (props) => {
    const [showMore, setShowMore] = useState(false);
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
                <h5>Company: {props.job.company}</h5>
                <Badge variant="secondary">{props.job.location}</Badge>
                <Badge variant="success">{props.job.type}</Badge>
                <br/>                
                    <div>
                        <ReactMarkdown source={props.job.description} />
                    </div>
                
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default MyVerticallyCenteredModal
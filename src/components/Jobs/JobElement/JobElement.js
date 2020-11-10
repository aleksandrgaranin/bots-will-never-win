
import React, { useState } from 'react';
import { Badge, Button, Collapse, Card} from 'react-bootstrap';
import ReactMarkdown from 'react-markdown'

const JobElement = ({ job }) => {
    const [showMore, setShowMore] = useState(false);

    return (
        <Card>
            <Card.Header as="h5">{job.title}</Card.Header>
            <Card.Body>
                <Card.Title>Company: {job.company}</Card.Title>
                <Card.Text>
                    <Badge variant="secondary">{job.location}</Badge>
                    <Badge variant="success">{job.type}</Badge>
                </Card.Text>
                <Button onClick={() => setShowMore(prevShow => !prevShow)}>Show More</Button>
                <Collapse in={showMore}>
                    <div>
                        <ReactMarkdown source={job.description} />
                    </div>
                </Collapse>   
                </Card.Body>
        </Card>

       
    )
}

export default JobElement
import React from 'react';
import { Form, Col } from 'react-bootstrap';

const SearchForm = ({ params, onParamChange }) => {
    return (
        <Form className="mb-4">
            <Form.Row >
                <Form.Group as={Col}>
                    <Form.Label>Description</Form.Label>
                    <Form.Control onChange={onParamChange} value={params.description} name="description" type="text" />
                    <Form.Check onChange={onParamChange} value={params.full_time} name="full_time" id="full_time" label="Only Full Time" type="checkbox" className="mt-2" />
                </Form.Group>
                <Form.Group xs="auto" className="ml-2">
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Location</Form.Label>
                    <Form.Control onChange={onParamChange} value={params.location} name="location" type="text" />
                </Form.Group>
            </Form.Row>
        </Form>
    )
}

export default SearchForm
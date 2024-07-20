import React from 'react';
import './TestimonialItem.css';
import { Card } from 'react-bootstrap';

const TestimonialItem = ({ name, feedback }) => {
    return (
        <Card className="testimonial-item">
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>"{feedback}"</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default TestimonialItem;

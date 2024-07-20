import React from 'react';
import TestimonialItem from './TestimonialItem';
import './Testimonials.css';
import { Container, Row, Col } from 'react-bootstrap';

const Testimonials = () => {
    const testimonials = [
        { id: 1, name: 'User 1', feedback: 'Feedback from user 1' },
        { id: 2, name: 'User 2', feedback: 'Feedback from user 2' },
        { id: 3, name: 'User 3', feedback: 'Feedback from user 3' },
    ];

    return (
        <section id="testimonials" className="testimonials">
            <Container>
                <h2>Testimonials</h2>
                <Row>
                    {testimonials.map(testimonial => (
                        <Col key={testimonial.id} md={4}>
                            <TestimonialItem name={testimonial.name} feedback={testimonial.feedback} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Testimonials;

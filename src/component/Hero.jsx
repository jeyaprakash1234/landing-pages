import React from 'react';
import './Hero.css';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Hero = () => {
    return (
        <section className="hero text-center">
            <Container>
                <Row>
                    <Col>
                        <h2>Welcome to Our Landing Page</h2>
                        <p>Discover amazing features and benefits.</p>
                        <Button variant="primary">Get Started</Button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;

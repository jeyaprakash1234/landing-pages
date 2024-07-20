import React from 'react';
import FeatureItem from './FeatureItem';
import './Feature.css';
import { Container, Row, Col } from 'react-bootstrap';

const Features = () => {
    const features = [
        { id: 1, title: 'Feature 1', description: 'Description of feature 1' },
        { id: 2, title: 'Feature 2', description: 'Description of feature 2' },
        { id: 3, title: 'Feature 3', description: 'Description of feature 3' },
    ];

    return (
        <section id="features" className="features">
            <Container>
                <h2>Features</h2>
                <Row>
                    {features.map(feature => (
                        <Col key={feature.id} md={4}>
                            <FeatureItem title={feature.title} description={feature.description} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Features;

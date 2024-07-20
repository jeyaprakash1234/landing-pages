import React from 'react';
import './FeatureItem.css';
import { Card } from 'react-bootstrap';

const FeatureItem = ({ title, description }) => {
    return (
        <Card className="feature-item">
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default FeatureItem;

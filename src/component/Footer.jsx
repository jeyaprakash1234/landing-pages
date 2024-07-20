import React from 'react';
import './Footer.css';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="footer bg-dark text-white text-center">
            <Container>
                <p>&copy; 2024 Your Company. All rights reserved.</p>
            </Container>
        </footer>
    );
};

export default Footer;

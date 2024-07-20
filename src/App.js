import React from 'react';
import Header from './component/Header';
import Hero from './component/Hero';
import Features from './component/Feature';
import Testimonials from './component/Testimonials';
import Footer from './component/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
        <div className="App">
            <Header />
            <Hero />
            <Features />
            <Testimonials />
            <Footer />
        </div>
    );
}

export default App;

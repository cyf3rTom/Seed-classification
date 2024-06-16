import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <section id="hero" className="d-flex align-items-center">
            <div className="container">
                <div>
                    <small>AGRICULTURE SOLUTION FOR THE FARMER BY THE FARMER</small>
                    <h1>Your Most Trusted <br />Agriculture Partner</h1>
                    <small> Farming Solutions: Crafted by the Hands of Farmers, for the Heart of the Agriculture Community.</small>
                </div>
                <div className="d-flex justify-content-start gap-2">
                    <Link to={'/service'} className="btn-get-started scrollto">Get Started</Link>
                </div>
            </div>
        </section>
    )
}
export default HeroSection;
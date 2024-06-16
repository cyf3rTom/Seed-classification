import React from 'react';
import './index.css';
import img from '../../../images/doc/farmer-1.jpg'
import img2 from '../../../images/doc/farmer-2.jpg'
import img3 from '../../../images/doc/farmer-2.jpg'
import { Link } from 'react-router-dom';

const Service = () => {
    return (
        <section className="container" style={{marginTop: 100, marginBottom:50}}>
            <div className='mb-5 section-title text-center'>
                <h2>Services</h2>
                <p className='m-0'>Uncover Our Extensive Range of Specialized Services</p>
            </div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 col-sm-6">
                        <div className="service-img">
                            <img src={img} alt="" className="img-fluid" />
                            <img src={img2} alt="" className="img-fluid mt-4" />
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="service-img mt-4 mt-lg-0">
                            <img src={img3} alt="" className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="service-content ps-4 mt-4 mt-lg-0">
                            <h2>Cultivating Success <br/> Empowering Agriculture</h2>
                            <p className="mt-4 mb-5 text-secondary form-text">Revolutionizing Agriculture: Setting New Standards in Service Excellence. We're dedicated to transforming agriculture through innovative solutions and personalized support. Our commitment to sustainability ensures that every service we offer is geared towards helping farmers thrive. Let us guide you on your agricultural journey.</p>
                            <Link to={'/service'} className="btn-get-started scrollto">Services</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service
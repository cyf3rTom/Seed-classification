import React from 'react';
import './InfoPage.css';
import { FaClock, FaSeedling ,FaLeaf  } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Weather from '../WeatherApp/Weather'

const InfoPage = () => {
    return (
        <section className="why-us mt-5 mt-md-0">
            <div className="container">

                <div className="row">
                    <div className="col-lg-5 d-flex align-items-stretch">
                           <Weather defaultCity="Amravati" className="content" />
                    </div>
                    <div className="col-lg-7 d-flex align-items-stretch">
                        <div className="icon-boxes d-flex flex-column justify-content-center">
                            <div className="row">
                                <div className="col-xl-6 d-flex align-items-stretch">
                                    <div className="icon-box mt-4 mt-xl-0">
                                        <FaLeaf className="icon"/>
                                        <h4>Leaf Detection</h4>
                                        <p className='text-secondary'> This innovative approach allows for the precise identification and classification of leaves, offering invaluable insights into plant health, species diversity, and environmental conditions.</p>
                                    </div>
                                </div>
                                <div className="col-xl-6 d-flex align-items-stretch">
                                    <div className="icon-box mt-4 mt-xl-0">
                                        <FaSeedling className="icon"/>
                                        <h4>Seed Detection</h4>
                                        <p>This sophisticated tool offers a detailed evaluation of seed size, shape, color, and texture. By facilitating the detection of genetic purity, disease presence, and overall health, seed analysis technology significantly enhances crop yield predictions and breeding strategies</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default InfoPage
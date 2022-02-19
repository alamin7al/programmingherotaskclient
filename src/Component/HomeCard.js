import React from 'react';
import { Card } from 'react-bootstrap';
import image from '../Component/img/cardimage2.webp'
import image2 from '../Component/img/cardimg.webp'
import './Homecard.css'
import '../Component/Revew/Revew.css'
import { Link } from 'react-router-dom';
const HomeCard = () => {
    return (
        <div className='container my-5'>
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <Card style={{ width: '20rem', color: '#FFF' }}>
                        <Card.Img variant="top" src={image} />
                        <Card.Body className='d-flex justify-content-center align-items-center'>
                            <div className="fw-normal">
                                <h6 className='text-center text-uppercase fw-normal' style={{ color: 'black' }}>simplicity and elegance, is truly <br /> a cherry on the cak</h6>
                                <div className="d-flex justify-content-center align-items-center">
                                    <p className='me-4 text-decoration-line-through fw-normal' style={{ color: 'black' }}>
                                        $465.00
                                    </p>
                                    <p style={{ color: 'black' }}>
                                        $365.00
                                    </p>
                                </div>
                                <Link to='/allproduct' class="rainbow-button  " alt="BuyNow"></Link>
                                {/* <a  class="rainbow-button text-center" alt=""></a> */}
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <div className=''>
                        <div className="fw-normal">
                            <h1 className=' text-start fw-normal'>A Unique Watch <br /> That Fits Your Style</h1>
                            <p className='text-start text-muted my-5'>
                                The new Lawson collection is already here! This quartz Lawson Franklin 38 model, designed with simplicity and elegance, is truly a cherry on the cake. Comes in different sizes and band colors, has a stainless steel back for a personalized engraving.
                            </p>
                            <div class="wrapper">
                                <a class="cta" >
                                    <span>Learn More</span>
                                    <span>

                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <div className="row my-5">

                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <div className=''>
                        <div className="fw-normal">
                            <h1 className=' text-start fw-normal'>Ideal Has Never <br /> Been Closer</h1>
                            <p className='text-start text-muted my-5'>
                            Have you ever come across a thing that is impossible to resist? Meet the Lawson Jefferson 38! Run by the vibration of a quartz crystal (32,786 times per second) under current to keep possibly accurate time. You will feel absolutely over the moon with it, we guarantee!
                            </p>
                            <div class="wrapper">
                                <a class="cta" >
                                    <span>Learn More</span>
                                    <span>

                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <Card style={{ width: '20rem', color: '#FFF' }}>
                        <Card.Img variant="top" src={image2} />
                        <Card.Body className='d-flex justify-content-center align-items-center'>
                            <div className="fw-normal">
                                <h6 className='text-center text-uppercase fw-normal' style={{ color: 'black' }}>simplicity and elegance, is truly <br /> a cherry on the cak</h6>
                                <div className="d-flex justify-content-center align-items-center">
                                    <p className='me-4 text-decoration-line-through fw-normal' style={{ color: 'black' }}>
                                        $465.00
                                    </p>
                                    <p style={{ color: 'black' }}>
                                        $365.00
                                    </p>
                                </div>
                                <Link to='/allproduct' class="rainbow-button  " alt="BuyNow"></Link>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default HomeCard;
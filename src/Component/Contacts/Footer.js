import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className='footerstyle text-white d-flex justify-content-center align-items-center' >
            <div className="container ">
                <div className="row">
                    <div className="col-md-5">
                        <h3 className='text-start fw-normal lh-base text-capitalize '>Sign up for our newsletter to receive special offers, news and great sales notifications.</h3>
                        <div class="my-5">
                            <div className="d-flex">
                                <input placeholder='Email Address' className=' inputfield  rounded-2 me-3' type="email" />
                                <a  class="rainbow-button text-center " alt="Subscribe"></a>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 text-start  text-uppercase">
                        <p className='mb-5'>Links</p>
                        <p className='     '>Home</p>
                        <p className='     '>Blog</p>
                        <p className='     '>Shop</p>
                        <p className='     '>Services</p>
                    </div>
                    <div className="col-md-3 text-start text-uppercase">
                        <p className='mb-5'>Info</p>
                        <p className='     '>Team</p>
                        <p className='     '>Our Mission</p>
                        <p className='     '>Our History</p>
                        <p className='     '>Contacts</p>
                    </div>
                    <div className="col-md-2 text-start  text-uppercase">
                        <p className='mb-5'>Socials</p>
                        <p className='     '>Instagram</p>
                        <p className='     '>Facebook</p>
                        <p className='     '>Youtube</p>
                        <p className='     '>Pianterset</p>
                    </div>
                    <hr className='text-white' />
                <p className='text-center'>AxiomThemes © 2022. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
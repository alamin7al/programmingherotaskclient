import React from 'react';
import { Card } from 'react-bootstrap';
import './Contact.css'
const Contacts = () => {
    return (
        <div style={{backgroundColor:'#E9E8E7',height:'180vh'}} className='  '>
            <div className="container">
            <div className="  row">
                <div className="col-lg-3 col-md-3 col-sm-12 d-flex justify-content-center align-items-center my-5">

                    <Card className='cardstyle ' style={{ width: '100%' }}>
                        <Card.Body className='d-flex justify-content-center align-items-center'>
                            <div className='text-start'>
                                <Card.Title className='my-4 fs-1 fw-normal'>Address</Card.Title>
                                <Card.Text className='text-muted'>
                                    12 Van Dyke St,
                                    <br />
                                    Brooklyn, NY 11231
                                </Card.Text>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12 d-flex justify-content-center align-items-center my-5">

                    <Card className='cardstyle ' style={{ width: '100%' }}>
                        <Card.Body className='d-flex justify-content-center align-items-center'>
                            <div className='text-start'>
                                <Card.Title className='my-4 fs-1 fw-normal'>Phone</Card.Title>
                                <Card.Text id='multi' className='fw-bold'>
                                    01832530116
                                    <br />
                                    01703754409
                                </Card.Text>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12 d-flex justify-content-center align-items-center my-5">

                    <Card className='cardstyle ' style={{ width: '100%' }}>
                        <Card.Body className='d-flex justify-content-center align-items-center'>
                            <div className='text-start'>
                                <Card.Title className='my-4 fs-1 fw-normal'>Mail</Card.Title>
                                <Card.Text id='multi' className='fw-bold'>
                                    ma7029582@gmail.com
                                    <br />
                                    alaminn852@gmail.com
                                </Card.Text>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12 d-flex justify-content-center align-items-center my-5">

                    <Card className='cardstyle' style={{ width: '100%' }}>
                        <Card.Body className='d-flex justify-content-center align-items-center'>
                            <div className='text-start'>
                                <Card.Title className='my-4 fs-1 fw-normal'>Hours</Card.Title>
                                <Card.Text className='text-muted'>
                                    Mon - Fri: 8 AM - 6 PM <br />
                                    Sat: 9 AM - 4 PM
                                </Card.Text>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div   className="my-5">
                <h2 className='text-center fs-1 my-5'>Drop a Line</h2>

                <div>
                    <div class="form-floating">
                        <form className='w-75 h-75 mx-auto'>
                            <div>
                                <div className="d-flex ">
                                    <div class="mb-3 w-100 h-100 me-5">
                                        <input  placeholder='Name' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                                    </div>
                                    <div class="mb-3  w-100 h-100">
                                        <input placeholder='Email' class="form-control" id="exampleInputPassword1" />
                                    </div>
                                </div>
                            </div>
                            <textarea class="form-control" placeholder="Comment" style={{ height: "200px" }}></textarea>

                            <div class="form-check text-start my-4">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label text-start text-muted" for="flexCheckDefault">
                                    I have read and agree to the Privacy Policy
                                </label>
                            </div>

                            <a type="submit"  class="rainbow-button text-center" alt="Submit"></a>

                            {/* <button type="submit" class="btn btn-primary">Submit</button> */}
                        </form>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Contacts;
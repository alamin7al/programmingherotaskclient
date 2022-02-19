import React from 'react';
import { Card } from 'react-bootstrap';
import '../Component/Homecard.css'
import image2 from '../Component/img/cardimg.webp'
const AllWatchHome = () => {
    return (
        <div>
            <div className='container my-5'>
                <h2 className='my-5 text-center fw-normal fs-1 text-uppercase'>Our Bestsellers</h2>

                <div className="row">
                    <div className="col-md-4">

                        <Card style={{ width: '20rem' }}>
                            <Card.Img variant="top" src={image2} />
                            <Card.Body>
                                <Card.Title className='text-uppercase'> Lorem, ipsum dolor.lorem </Card.Title>
                                <h6 className='text-start text-muted my-3'>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </h6>
                                <div className="d-flex justify-content-center align-items-center">
                                    <p className='me-4 text-decoration-line-through fw-normal' style={{ color: 'black' }}>
                                        $465.00
                                    </p>
                                    <p style={{ color: 'black' }}>
                                        $365.00
                                    </p>
                                </div>
                                <a  class="rainbow-button text-center" alt="BuyNow"></a>

                            </Card.Body>
                        </Card>

                    </div>
                    <div className="col-md-4">

                        <Card style={{ width: '20rem' }}>
                            <Card.Img variant="top" src={image2} />
                            <Card.Body>
                                <Card.Title className='text-uppercase'> Lorem, ipsum dolor.lorem </Card.Title>
                                <h6 className='text-start text-muted my-3'>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </h6>
                                <div className="d-flex justify-content-center align-items-center">
                                    <p className='me-4 text-decoration-line-through fw-normal' style={{ color: 'black' }}>
                                        $465.00
                                    </p>
                                    <p style={{ color: 'black' }}>
                                        $365.00
                                    </p>
                                </div>
                                <a  class="rainbow-button text-center" alt="BuyNow"></a>

                            </Card.Body>
                        </Card>

                    </div>
                    <div className="col-md-4">

                        <Card style={{ width: '20rem' }}>
                            <Card.Img variant="top" src={image2} />
                            <Card.Body>
                                <Card.Title className='text-uppercase'> Lorem, ipsum dolor.lorem </Card.Title>
                                <h6 className='text-start text-muted my-3'>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </h6>
                                <div className="d-flex justify-content-center align-items-center">
                                    <p className='me-4 text-decoration-line-through fw-normal' style={{ color: 'black' }}>
                                        $465.00
                                    </p>
                                    <p style={{ color: 'black' }}>
                                        $365.00
                                    </p>
                                </div>
                                <a  class="rainbow-button text-center" alt="BuyNow"></a>

                            </Card.Body>
                        </Card>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllWatchHome;
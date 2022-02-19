import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Watch.css'
const Watch = ({ watch }) => {
    const { img, title, name, price, rating } = watch
    return (
        <div className="col-md-4 col-sm-6 my-4">
            <Card style={{ width: '100%',height:'420px' }}>
                <Card.Img style={{ height: '190px', width: 'auto' }} variant="top" src={img} />
                <Card.Body>
                    <Card.Title className='text-uppercase'> {name.slice(0,20)} </Card.Title>
                    <h6 className='text-start text-muted my-3'>
                        {title.slice(0,50)}
                    </h6>
                    <div className="d-flex justify-content-center align-items-center">
                        <p className='me-4 text-decoration-line-through fw-normal' style={{ color: 'black' }}>
                            $465.00
                        </p>
                        <p style={{ color: 'black' }}>
                            {price}.00
                        </p>
                    </div>
                    <h6 className='colors'>Rating: <em className='icon-color fs-5 fw-bold ms-2'> {rating}</em> </h6>
                   <div className="d-flex">
                   <Link to={`/watch/details/${watch._id}`}>
                        <a class="rainbow-buttons text-center me-2" alt="BuyNow"></a>
                    </Link>
                    <Link to={`/edit/watch/${watch._id}`}>
                        <a class="rainbow-buttons text-center  me-3 " alt="edit"></a>
                    </Link>
                   </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Watch;
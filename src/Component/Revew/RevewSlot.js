import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import img2 from '../img/download.png'

const RevewSlot = () => {
    const [revew, setRevew] = useState([])
    useEffect(() => {
        fetch('https://tranquil-spire-06424.herokuapp.com/revew')
            .then(res => res.json())
            .then(data => setRevew(data))
    })
    return (
        <div className='my-5 container'>
            <h1 style={{color:'#062265'}} className='text-center my-5'>Customer Reviews</h1>
            <div className="row">


                {
                    revew.map(r =>
                        <div className="col-md-4 ">
                            <Card style={{ width: 'auto',height:'350px' }}>
                                <div className="d-flex justify-content-center align-items-center my-2">
                                <Card.Img className='text-center' style={{ width: '100px', height: '100px', borderRadius: '15px', }} src={img2} />

                                </div>
                                <Card.Body>
                                    <Card.Title style={{color:'#062265'}} className='fs-5 text-uppercase'>{r.description}</Card.Title>
                                    <Card.Text className='text-start text-muted text-capitalize'>
                                        {r.profession}
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </div>

                    )
                }
            </div>
        </div>
    );
};

export default RevewSlot;
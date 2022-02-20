import React from 'react';
import { Card } from 'react-bootstrap';

const strongailfilter = ({ e,users,setUsers }) => {
    const { name, email, city, phone, image,_id, productName, price } = e

    const handleDeleted = (id) => {
        const procces = window.confirm('Are You Sure, You Want To Delet')
        if (procces) {
            fetch(`https://tranquil-spire-06424.herokuapp.com/singlestrongail/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount >= 0) {
                        alert('deleted SuccessFully ')
                        const rstrongainignData = users.filter(x => x._id !== id)
                        setUsers(rstrongainignData)
                    }

                })
        }
    }
    return (
        <div className="col-md-6 col-sm-12 my-4">
            <Card style={{ width: '22rem',height:'520px' }}>
                <Card.Img style={{ height: '200px', width: 'auto' }} variant="top" src={image} />
                <Card.Body>
                    <Card.Title className='text-uppercase'> {productName} </Card.Title>

                    <div className="d-flex justify-content-center align-itstrongs-center">
                        <p className='me-4 text-decoration-line-through fw-normal' style={{ color: 'black' }}>
                            $465.00
                        </p>
                        <p style={{ color: 'black' }}>
                            {price}.00
                        </p>
                    </div>
                    <div className="">

                        <h6 className='text-start fw-normal'>  Your Name: <strong className='fw-bold fs-5' style={{ color: '#062265' }}>{name} </strong> </h6>
                        <h6 className='text-start fw-normal'>  Your strongail:<strong className='fw-bold fs-5' style={{ color: '#062265' }}>{email} </strong> </h6>
                        <h6 className='text-start fw-normal'>  Your Number: <strong className='fw-bold fs-5' style={{ color: '#062265' }}>{phone} </strong> </h6>
                        <h6 className='text-start fw-normal'>  Your City:   <strong className='fw-bold fs-5' style={{ color: '#062265' }}>{city} </strong>    </h6>
                    </div>
                    <button
                        onClick={() => handleDeleted(_id)}
                        class="rainbow-button text-center mx-auto  mt-4" type='submit'>
                        Delete
                    </button>
                </Card.Body>

            </Card>
        </div>
    );
};

export default strongailfilter;
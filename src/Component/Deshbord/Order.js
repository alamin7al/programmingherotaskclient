import React from 'react';
import { Card } from 'react-bootstrap';
import '../../Component/Homecard.css'

const Order = ({ order, allorder, setAllorder }) => {

    const { name, email, city, phone, _id, image, price, productName } = order
    const handleDeleted = (id) => {
        const procces = window.confirm('Are You Sure, You Want To Delet')
        if (procces) {
            fetch(`http://localhost:5000/details/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted SuccessFully ')
                        const rstrongainignData = allorder.filter(x => x._id !== id)
                        setAllorder(rstrongainignData)
                    }

                })
        }
    }



    return (
        <div className="col-md-6 col-sm-12 mb-4">
            <Card style={{ width: '20rstrong' }}>
                <Card.Img style={{ height: '200px', width: '22rem' }} variant="top" src={image} />
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
                        class="rainbow-button text-center mx-auto mt-4" type='submit'>
                        Delete
                    </button>
                </Card.Body>

            </Card>
        </div>
    );
};

export default Order;
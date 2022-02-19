import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import AllWatch from './AllWatch';

const AllProduct = () => {
    const [allwatch, setAllwatch] = useState([])
    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(0)
    useEffect(() => {
        fetch(`http://localhost:5000/watch?page=${page}&&size=5`)
            .then(res => res.json())
            .then(data => {
                setAllwatch(data.payload)

                const count = data.count
                const pageNumber = Math.ceil(count / 5)
                setPageSize(pageNumber);
            })
    }, [page])


    return (
        <div className="container my-5">
            <div className="row">
                {
                    allwatch.slice(0).reverse().map(all => <div className="col-md-4 col-sm-6 my-4 ">
                        <Card style={{ width: '100%',height:'400px' }}>
                            <Card.Img style={{ height: '190px', width: 'auto' }} variant="top" src={all.img} />
                            <Card.Body>
                                <Card.Title className='text-uppercase'> {all.name}  </Card.Title>
                                <h6 className='text-start text-muted my-3'>
                                    {all.title}
                                    
                                </h6>
                                <div className="d-flex justify-content-center align-items-center">
                                    <p className='me-4 text-decoration-line-through fw-normal' style={{ color: 'black' }}>
                                        $465.00
                                    </p>
                                    <p style={{ color: 'black' }}>
                                        {all.price}.00
                                    </p>
                                </div>
                                <h6 className='colors'>Rating: <em className='icon-color fs-5 fw-bold ms-2'> {all.rating}</em> </h6>
                                <div className="d-flex">
                                    <Link to={`/watch/details/${all._id}`}>
                                        <a class="rainbow-buttons text-center me-2" alt="BuyNow"></a>
                                    </Link>
                                    <Link to={`/edit/watch/${all._id}`}>
                                        <a class="rainbow-buttons text-center  me-3 " alt="edit"></a>
                                    </Link>
                                </div>
                            </Card.Body>
                        </Card>

                    </div>)
                }
            </div>
            {
                [...Array(pageSize).keys()].map(pageNum => <Button className='me-1' onClick={() => setPage(pageNum)}>{pageNum + 1}</Button>)
            }
        </div>
    );
};

export default AllProduct;
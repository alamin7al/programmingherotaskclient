import React, { useEffect, useState } from 'react';
// import { Card } from 'react-bootstrap';
import Order from './Order';

const Allorder = () => {
    const [allorder, setAllorder] = useState([])
    useEffect(() => {
        fetch('https://tranquil-spire-06424.herokuapp.com/details')
            .then(res => res.json())
            .then(data => setAllorder(data))
    })
    return (
        <div className='container my-5'>
            <div className="row">
                {
                    allorder.map(order => <Order
                        order={order}
                        setAllorder={setAllorder}
                    ></Order>)
                }
            </div>
        </div>
    );
};

export default Allorder;
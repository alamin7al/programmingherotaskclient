import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Component/Homecard.css'

import Watch from './Watch';


const WatchHome = () => {

    const [watches, setWatches] = useState([])


    useEffect(() => {
        fetch('https://tranquil-spire-06424.herokuapp.com/watch')
            .then(res => res.json())
            .then(data => setWatches(data.payload))
    })








    return (
        <div className='container my-5'>
            <h2 className='my-5 text-center fw-normal fs-1 text-uppercase'>Our Bestsellers</h2>

            <div className="row">
                {
                    watches.slice(0, 6).map(watch => <Watch
                        key={watch._id}
                        watch={watch}

                    ></Watch>)
                }
            </div>
            <div class="wrapper my-5">
                <a class="cta" >
                    <Link to='/allproduct'>
                        <span className='text-center fs-2'>All Watch</span>
                    </Link>
                    <span>
                    </span>
                </a>
            </div>
        </div>
    );
};

export default WatchHome;
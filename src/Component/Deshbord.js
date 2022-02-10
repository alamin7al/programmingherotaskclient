import React, { useState } from 'react';
import FoodAdd from './FoodAdd';
import ShowFood from './ShowFood';
import SHowStudent from './SHowStudent';
import StudentAdd from './StudentAdd';
import './Deshbord.css'
import FoodServe from './FoodServe';
const Deshbord = () => {
    const [nav, setNav] = useState("addFood");

    return (
        <div className='container'>
            <div className="row">

                <div className="col-md-3  ">
                    <div className="dashbordstyle d-flex align-items-center justify-content-center">
                        <div className="align-items-start d-grid gap-2 justify-content-center ">
                            <button className='btn btn-outline-dark ' onClick={() => setNav("addFood")}>ADD FOOD</button>
                            <button className='btn btn-outline-dark my-2' onClick={() => setNav("showFood")}>SHOW FOOD</button>
                            <button className='btn btn-outline-dark my-2' onClick={() => setNav("addStd")}>ADD STUDENT</button>
                            <button className='btn btn-outline-dark ' onClick={() => setNav("showStd")}>SHOW STUDENTS</button>
                            <button className='btn btn-outline-dark mt-4' onClick={() => setNav("serve")}>Serve Food</button>

                        </div>
                    </div>
                </div>
                <div className="col-md-9">
                    {
                        nav === "addFood" && <FoodAdd />
                    }
                    {
                        nav === "showFood" && < ShowFood />
                    }
                    {
                        nav === "addStd" && <StudentAdd />
                    }
                    {
                        nav === "showStd" && <SHowStudent />
                    }
                    {
                        nav === "serve" && <FoodServe />
                    }

                </div>
            </div>
        </div>
    );
};

export default Deshbord;
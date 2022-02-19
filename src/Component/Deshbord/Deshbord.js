import { useState } from "react";
import ProductAdd from "./ProductAdd";
import RevewDo from "./RevewDo";
import './Deshbord.css'
import Myorder from "./Myorder";
import Allorder from "./Allorder";
import Payment from "./Payment";
// import AllProduct from "../AllProduct";
import { Link } from "react-router-dom";
const Deshbord = () => {
    const [nav, setNav] = useState("order");

    return (
        <div style={{ backgroundColor: '#E9E8E7' }} >
            <div className=" deshbordcolor ">
                <div className='  mx-4 '>
                    <div className="row">

                        <div style={{ backgroundColor: '#8B9890' }} className="col-md-3 col-sm-12 ">
                            <div className="dashbordstyle d-flex align-items-center justify-content-center ">
                                <div className="align-items-start d-grid gap-4 mt-5 justify-content-center  ">
                                    {/* <a onClick={() => setNav("allproduct")}  ></a> */}
                                    <Link to='/allproduct' class="rainbow-button   text-dark" alt="ContinueShopping"></Link>

                                    <a onClick={() => setNav("order")} class="rainbow-button   text-dark  text-dark" alt="Myorder"></a>
                                    <a onClick={() => setNav("allorder")} class="rainbow-button   text-dark" alt="allorder"></a>
                                    <a onClick={() => setNav("revew")} class="rainbow-button   text-dark" alt="SiteRevew"></a>
                                    <a onClick={() => setNav("watch")} class="rainbow-button   text-dark" alt="AddWatch"></a>
                                    <a onClick={() => setNav("pay")} class="rainbow-button   text-dark" alt="Payment"></a>





                                </div>
                            </div>
                        </div>
                        <div className="col-md-9 col-sm-12 align-items-center container justify-content-center mb-5">
                            {
                                nav === "revew" && <RevewDo />
                            }
                            {
                                nav === "watch" && < ProductAdd />
                            }
                            {
                                nav === "order" && < Myorder />
                            }
                            {
                                nav === "allorder" && < Allorder />
                            }
                            {
                                nav === "pay" && < Payment />
                            }
                            {/* {
                            nav === "allproduct" && < AllProduct />
                        } */}


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Deshbord;
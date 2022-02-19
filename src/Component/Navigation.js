import React from 'react';
import { Card, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from './Login/useAuth';
import logo from '../Component/img/logo.jpg'
const Navigation = () => {
    const { user, logOut } = useAuth()

    return (
        <div className='colorNavigation my-3'>

            {/* <Header></Header> */}
            <Navbar

                className='ms-5 ' expand="lg">

                <Navbar.Toggle aria-controls="basic-navbar-nav bg-dark ssss" />
                <Navbar.Collapse id="basic-navbar-nav bg-dark ">
                    <Card.Img className='text-center' style={{ width: '120px', height: '60px', borderRadius: '15px', }} src={logo} />

                    <Navbar.Collapse className="justify-content-center">




                        <Link to='/home' className='    text-dark text-decoration-none me-2    fs-5  '>Home</Link>

                        <Link to='/allproduct' className=' text-dark text-decoration-none me-2  fs-5      '>Watch</Link>
                        <Link to='/homewatvh' className=' text-dark text-decoration-none me-2   fs-5  '>Shop</Link>
                        <Link to='/feature' className=' text-dark text-decoration-none mx-2     fs-5    '>Features</Link>
                        <Link to='/contact' className=' text-dark text-decoration-none          fs-5'>Contact</Link>


                    </Navbar.Collapse>
                    <div className='me-5'>
                        <Navbar.Text className=''>
                            <div className=" ">
                                <Link className='text-dark text-decoration-none' to='/deshbord'>
                                    <button className='btn btn-outline-secondary me-3 fw-bold '>


                                        Deshbord</button>
                                </Link>
                                {
                                    user?.email ?

                                        <button className='btn btn-outline-secondary  me-1  fw-bold' onClick={logOut}>


                                            LogOut</button>


                                        : <Link className='text-dark text-decoration-none fs-5 text-dark' to='/login'>


                                            Login</Link>
                                }

                                <Link to='/profile'>
                                    <a className='text-uppercase font-monospace text-dark ms-4 fs-5'>
                                        {user?.displayName}
                                    </a>
                                </Link>
                            </div>
                        </Navbar.Text>
                    </div>
                </Navbar.Collapse>

            </Navbar>
            {/* <hr /> */}

        </div>
    )
};

export default Navigation;
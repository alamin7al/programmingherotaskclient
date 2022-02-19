import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from './Login/useAuth';
import img2 from '../Component/img/download.png'

const Profile = () => {
    const { user } = useAuth()
    const [single, setSingle] = useState([])

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/profile', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })

            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('We recived your order.');

                }

                // history.push(redirect);

            })
    }
    useEffect(() => {
        const url = `http://localhost:5000/profile?email=${user?.email}`

        fetch(url)
            .then(res => res.json())
            .then(data => setSingle(data))
    }, [user.email, single])

    console.log(single);


    return (
        <div className='container'>
            <div className="row">
                {
                    single.slice(0, 1).map(s =>
                        <div className="col-md-6">
                            <Card

                                className='cardsss ' style={{ width: '22rem', height: '500px' }}>

                                {user.photoURL ? <div className="text-center">
                                    <Card.Img className='rounded-circle text-center w-50 my-4' variant="top" src={user?.photoURL} />
                                </div> : <div className="text-center">
                                    <Card.Img className='rounded-circle text-center w-50 my-4' variant="top" src={img2} />
                                </div>}

                                <div className="ms-4">
                                    <Card.Title className=''>
                                        <h6 className='text-start fw-normal'>  Your Name: <strong className='fw-bold fs-5 ms-2' style={{ color: '#062265' }}>{s.name} </strong> </h6>
                                    </Card.Title>
                                    <Card.Title>
                                        <h6 className='text-start fw-normal '>  Your Email: <strong className='fw-bold fs-5 ms-2 ' style={{ color: '#062265' }}>{s.email} </strong> </h6>
                                    </Card.Title>
                                    <Card.Title>
                                        <h6 className='text-start fw-normal'>  Phone Number: <strong className='fw-bold fs-5 ms-2' style={{ color: '#062265' }}>{s.phone} </strong> </h6>
                                    </Card.Title>
                                    <Card.Title>
                                        <h6 className='text-start fw-normal'> City Name : <strong className='fw-bold fs-5 ms-2' style={{ color: '#062265' }}>{s.city} </strong> </h6>
                                    </Card.Title>
                                    <Card.Title>
                                        <h6 className='text-start fw-normal'>  Profession: <strong className='fw-bold fs-5 ms-2' style={{ color: '#062265' }}>{s.price} </strong> </h6>
                                    </Card.Title>
                                </div>

                                <Link to={`/update/${s._id}`}>
                                    <a class="rainbow-button text-center ms-4 my-4" alt="Edit"></a>

                                </Link>



                            </Card>


                        </div>


                    )
                }


                <div className="col-md-6 mt-4">
                    <Card style={{ width: '100%', padding: '10px' }}>

                        <form className=" w-100 mx-auto " onSubmit={handleSubmit(onSubmit)}>

                            {
                                user.displayName && <div className="mb-3 text-start">
                                    <label for="exampleInputEmail1" className="form-label">User Name</label>
                                    <input readOnly defaultValue={user.displayName} {...register("name")} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                            }
                            {
                                user.email && <div className="mb-3 text-start">
                                    <label for="exampleInputPassword1" className="form-label">User Email</label>
                                    <input readOnly defaultValue={user.email} {...register("email",)} className="form-control" id="exampleInputPassword1" />
                                </div>
                            }



                            {errors.email && <span className="error">This field is required</span>}


                            <div className="mb-3 text-start">
                                <label for="exampleInputPassword1" className="form-label">Profession</label>
                                <input placeholder="profession"  {...register("price")} className="form-control" id="exampleInputPassword1" />

                            </div>
                            <div className="mb-3 text-start">

                                <label for="exampleInputPassword1" className="form-label">City Name</label>
                                <input placeholder="City"  {...register("city")} className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="mb-3 text-start">
                                <label for="exampleInputPassword1" className="form-label">Number</label>
                                <input placeholder="phone number" {...register("phone")} className="form-control" id="exampleInputPassword1" />
                            </div>
                            {/* <a type="submit"  alt="submit"></a> */}
                            <button class="rainbow-button text-center" type='submit'>
                                Submit
                            </button>
                        </form>
                    </Card>

                </div>


            </div>
        </div>
    );
};

export default Profile;
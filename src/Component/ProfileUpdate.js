import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";

const ProfileUpdate = () => {
    const { id } = useParams()
    const [single, setSingle] = useState({})
    const { register, handleSubmit, formState: { errors } } = useForm();

    useEffect(() => {
        fetch(`http://localhost:5000/profile/${id}`)
            .then(res => res.json())
            .then(data => setSingle(data))
    }, [single,id])

    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/profile/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount >= 0) {
                    alert('update')
                }
            })
    }
    return (
        <div className="container">
            <Card style={{ width: '100%',height:'300px' , padding: '10px' }}>

                <form className="shipping-form w-75 mx-auto " onSubmit={handleSubmit(onSubmit)}>

                    {
                        single.name && <div className="mb-3 text-start">
                            <label for="exampleInputEmail1" className="form-label">User Name</label>
                            <input defaultValue={single.name} {...register("name")} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                    }
                    {
                        single.email && <div className="mb-3 text-start">
                            <label for="exampleInputPassword1" className="form-label">User Email</label>
                            <input defaultValue={single.email} {...register("email",)} className="form-control" id="exampleInputPassword1" />
                        </div>
                    }
                    {single.price && <div className="mb-3 text-start">
                        <label for="exampleInputPassword1" className="form-label">Profession</label>
                        <input defaultValue={single.price} {...register("price")} className="form-control" id="exampleInputPassword1" />
                    </div>}

                    {errors.email && <span className="error">This field is required</span>}

                    {single.city && <div className="mb-3 text-start">
                        <label for="exampleInputPassword1" className="form-label">City Name</label>
                        <input defaultValue={single.city}  {...register("city")} className="form-control" id="exampleInputPassword1" />

                    </div>}
                    {single.phone && <div className="mb-3 text-start">
                        <label for="exampleInputPassword1" className="form-label">Phone Number</label>
                        <input defaultValue={single.phone}  {...register("phone")} className="form-control" id="exampleInputPassword1" />

                    </div>}

                    <button class="rainbow-button text-center" type='submit'>
                        Submit
                    </button>
                </form>
            </Card>
        </div>

    );
};

export default ProfileUpdate;
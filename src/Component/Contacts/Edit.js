import React, { useEffect, useState } from 'react';
import { Card, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const Edit = () => {
    const { id } = useParams()
    const [updateUser, setUpdateUser] = useState({})
    const { register, handleSubmit, formState: { errors } } = useForm();


    useEffect(() => {
        const url = `http://localhost:5000/watch/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setUpdateUser(data)
            })
    }, [id])
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/watch/${id}`
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
        <div className='shadow-sm p-3 mb-5 bg-body rounded'>
            <Card style={{ width: '100%' }}>
                <form
                    onSubmit={handleSubmit(onSubmit)}>
                    <Form
                        data-aos="fade-up"
                        data-aos-duration="3000"
                        className='w-50 mx-auto text-start'>
                        {updateUser?.name && <Form.Group className="" >
                            <Form.Label >Watch Name
                            </Form.Label>
                            <Form.Control className='text-capitalize' defaultValue={updateUser?.name} {...register("name")} />
                        </Form.Group>}
                        {updateUser?.title && <Form.Group className="" >
                            <label className='mb' for="exampleFormControlInput1">Title</label>

                            <textarea defaultValue={updateUser?.title} {...register("title")} class="form-control text-capitalize" rows="3"></textarea>
                        </Form.Group>}
                        {updateUser?.desc && <Form.Group className="" >
                            <label className='mb' for="exampleFormControlInput1">Description</label>

                            <textarea defaultValue={updateUser?.desc} {...register("desc")} class="form-control text-capitalize" rows="7"></textarea>
                        </Form.Group>}


                        {updateUser?.price && <Form.Group className="" >
                            <Form.Label>Price
                            </Form.Label>
                            <Form.Control defaultValue={updateUser?.price} {...register("price",)} />
                        </Form.Group>}
                        {updateUser?.rating && <Form.Group className="" >
                            <Form.Label>Rating
                            </Form.Label>
                            <Form.Control defaultValue={updateUser?.rating} {...register("rating", { Min: 5, max: 5 })} />
                        </Form.Group>}
                       
                    </Form>
                    {errors.exampleRequired && <span>This field is required</span>}
                    <button className='rainbow-button text-center mx-auto my-4' type="submit" >
                        Submit
                    </button>
                </form>
            </Card>
        </div>
    );
};

export default Edit;
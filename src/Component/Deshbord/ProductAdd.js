import React from 'react';
import { Card } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import '../../Component/Deshbord/Deshbord.css'
const ProductAdd = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/watch', {
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
    };
    return (
        <div className='my-5'>
            <Card className='mx-auto' style={{width:'30rem'}}>
                <form className='my-5 cards' onSubmit={handleSubmit(onSubmit)}>

                    <div class="form-group w-75 h-75 mx-auto text-start ">
                        <label className='mb' for="exampleFormControlInput1">Name</label>
                        <input placeholder='Name' {...register("name")} class="form-control mb-1" />

                        <label className='mb' for="exampleFormControlInput1">Title</label>
                        <input placeholder='Title' {...register("title")} class="form-control mb-1" />

                        <label className='mb' for="exampleFormControlInput1">Image</label>
                        <input placeholder='Image-Link' {...register("img")} class="form-control mb-1" />

                        <label className='mb' for="exampleFormControlInput1">Description</label>

                        <textarea placeholder='Desc' {...register("Desc")} class="form-control" rows="3"></textarea>
                        <label className='mb' for="exampleFormControlInput1">Price</label>
                        <input type="number" placeholder='Price' {...register("price")} class="form-control mb-1" />

                        <label className='mb' for="exampleFormControlInput1">Rating</label>
                        <input type="number" placeholder='Rating' {...register("rating", { Min: 5, max: 5 })} class="form-control mb-1" />
                        <input className='btn btn-outline-success btn-lg mt-2' type="submit" />

                    </div>
                    {errors.exampleRequired && <span>This field is required</span>}

                </form>
            </Card>
        </div >
    );
};

export default ProductAdd;
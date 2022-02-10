import React from 'react';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';

const FoodAdd = () => {
    const { register, handleSubmit, watch,reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/foods', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(data)
        })
         .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                Swal.fire({
                    icon: 'success',
                    title: 'Your food has been saved',
                    showConfirmButton: false,
                    timer: 1500
                })
                reset()
            }
        })

    }

    return (
        <div className='align-items-center w-75 h-75 mt-5 mx-auto justify-content-center food '>
            <div className="">
                <h2> Add Food</h2>

                <form onSubmit={handleSubmit(onSubmit)} className=''>
                    <div class="mb-3 text-start ">
                        <div className="">
                            <label for="exampleInputPassword1" class="form-label ">Food Name</label>
                            <input placeholder='Food Name' {...register("food")} class="form-control " />
                        </div>
                    </div>
                    <div class="mb-3 text-start">
                        <label for="exampleInputPassword1" class="form-label text-start">Food Price</label>

                        <input placeholder='Price' type='number' {...register("price", { required: true })} class="form-control" />
                    </div>
                    {errors.exampleRequired && <span>This field is required</span>}
                    <div class="mb-3 text-start">
                        <button type="submit" class="btn btn-outline-dark text-center w-50">Submit</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default FoodAdd;
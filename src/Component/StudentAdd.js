import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const StudentAdd = () => {
    const { register, handleSubmit, watch,reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch(`http://localhost:5000/students`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Student Added',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    reset()

                }
                else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Roll already exit',
                    })
                }
            })
    }












    
    return (
        <div className='align-items-center  justify-content-center food'>
            <div className="">


                <form style={{ padding: "10px" }} onSubmit={handleSubmit(onSubmit)}>
                    <div class="mb-1 text-start ">
                        <div className="">
                            <label for="exampleInputPassword1" class="form-label ">Student Name</label>
                            <input placeholder='Student Name' {...register("name")} class="form-control " />
                        </div>
                    </div>
                    <div class="mb-1 text-start">
                        <label for="exampleInputPassword1" class="form-label text-start">Student Roll</label>

                        <input placeholder='Student Roll' type='number' {...register("roll")} class="form-control" />
                    </div>
                    <div class="mb-1 text-start">
                        <label for="exampleInputPassword1" class="form-label text-start">Age</label>

                        <input placeholder='Age' type='number' {...register("age")} class="form-control" />
                    </div>
                    <div class="mb-1 text-start">
                        <label for="exampleInputPassword1" class="form-label text-start">Class Name</label>

                        <input placeholder='Class Name'  {...register("class")} class="form-control" />
                    </div>
                    <div class="mb-1 text-start">
                        <label for="exampleInputPassword1" class="form-label text-start">Hall Name</label>

                        <input placeholder='Hall Name'  {...register("hallname")} class="form-control" />
                    </div>
                    <div class="mb-3 text-start">
                        <label for="exampleInputPassword1" class="form-label text-start">Status</label>
                        <select class="form-select" type="text" {...register("status")}>
                            <option value="active">Active</option>
                            <option value="inActive">Inactive</option>
                        </select>

                    </div>
                    <div class="mb-1 text-start">
                        <button type="submit" class="btn btn-outline-dark text-center w-50">Submit</button>
                    </div>


                </form>


            </div>
        </div>
    );
};

export default StudentAdd;
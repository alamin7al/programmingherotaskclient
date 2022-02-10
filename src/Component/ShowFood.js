import React, { useEffect, useState } from 'react';
import { Button, Modal, Table } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './ShowFood.css'
import Swal from 'sweetalert2';
const ShowFood = () => {

    const [show, setShow] = useState(false);
    const [foo, setFood] = useState({});

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const { register, handleSubmit, reset } = useForm();

    const [foods, setFoods] = useState([])
    const [control, setControl] = useState(false)
    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(0)

    useEffect(() => {
        fetch(`http://localhost:5000/foods?page=${page}&&size=5`)
            .then(res => res.json())
            .then(data => {
                setFoods(data.payload)
                const count = data.count
                const pageNumber = Math.ceil(count / 5)
                setPageSize(pageNumber);
            })

    }, [page, control])

    useEffect(() => {
        reset(foo)
    }, [foo])

    const handleEdit = id => {
        console.log(id);
        fetch(`http://localhost:5000/foods/${id}`)
            .then(res => res.json())
            .then(data => setFood(data))
        setShow(true)
    }

    const onSubmit = data => {
        console.log(data);
        fetch(`http://localhost:5000/foods/${data._id}`, {
            method: "put",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire({
                    icon: 'success',
                    title: 'Your food has been updated',
                    showConfirmButton: false,
                    timer: 1500
                })
                setShow(false)
                setControl(!control)
            })
    }

    const handleDelete = id => {
        Swal.fire({
            title: 'Do you want to Delete the food?',
            showCancelButton: true,
            confirmButtonText: 'Delete',
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/foods/${id}`, {
                    method: "delete"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged) {
                            setControl(!control)
                            Swal.fire('Saved!', '', 'success')
                        }
                    })
            }
        })

    }
    return (
        <div className='container'>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Food Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        foods.map((pd, index) => <tr>
                            <td>{pd?.food}</td>
                            <td>${pd?.price}</td>
                            <td>
                                <button className='btn btn-success me-1' onClick={() => handleEdit(pd?._id)}>EDIT</button>

                                <button className='btn btn-danger' onClick={() => handleDelete(pd?._id)}>DELETE</button>
                            </td>
                        </tr>)
                    }

                </tbody>
            </Table>

            <Modal show={show} onHide={handleClose} >
                <form style={{ padding: "20px" }} onSubmit={handleSubmit(onSubmit)}>
                    <div class="mb-3 text-start ">
                        <div className="">
                            <label for="exampleInputPassword1" class="form-label ">Food Name</label>
                            <input placeholder='Food Name' defaultValue={foo?.food} {...register("food")} class="form-control " />
                        </div>
                    </div>
                    <div class="mb-3 text-start">
                        <label for="exampleInputPassword1" class="form-label text-start">Food Price</label>

                        <input placeholder='Price' type='number' defaultValue={foo?.price} {...register("price")} class="form-control" />
                    </div>
                    <div class="mb-3 text-start">
                        <button type="submit" class="btn btn-outline-dark text-center w-50">Submit</button>
                    </div>


                </form>
            </Modal>
            {
                [...Array(pageSize).keys()].map(pageNum => <Button className='me-1' onClick={() => setPage(pageNum)}>{pageNum + 1}</Button>)
            }
        </div>
    );


};

export default ShowFood;

   
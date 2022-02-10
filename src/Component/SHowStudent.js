import React, { useEffect, useState } from 'react';
import { Button, Modal, Table } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const SHowStudent = () => {
    const [show, setShow] = useState(false);
    const [students, setStudents] = useState([]);
    const [student, setStudent] = useState({});
    const [control, setControl] = useState(false)
    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(0)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const { register, handleSubmit, reset } = useForm();



    let checkId = [];

    useEffect(() => {
        reset(student)
    }, [student])
    useEffect(() => {
        fetch(`http://localhost:5000/students?page=${page}&&size=5`)
            .then(res => res.json())
            .then(data => {
                setStudents(data.payload)
                const count = data.count
                const pageNumber = Math.ceil(count / 5)
                setPageSize(pageNumber);
            })

    }, [page, control])

    const handleEdit = id => {
        console.log(id);
        fetch(`http://localhost:5000/students/${id}`)
            .then(res => res.json())
            .then(data => setStudent(data))
        setShow(true)
    }

    const handleDelete = id => {
        Swal.fire({
            title: 'Do you want to Delete the food?',
            showCancelButton: true,
            confirmButtonText: 'Delete',
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/students/${id}`, {
                    method: "delete"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged) {
                            setControl(!control)
                            Swal.fire('Delete!', '', 'success')
                        }
                    })
            }
        })

    }

    const handleCheckbox = id => {
        const checkBox = document.getElementById(`${id}`)
        if (checkBox.checked) {
            checkId.push(id)
            console.log(checkId);
        }
        else {
            for (let i = 0; i < checkId.length; i++) {
                if (checkId[i] === id) {
                    checkId.splice(i, 1)
                    console.log(checkId);
                }
            }
        }
    }

    const onSubmit = data => {
        console.log(data);
        fetch(`http://localhost:5000/students/${data._id}`, {
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

    const handleActiveStatus = () => {
        checkId.forEach(id => {
            fetch(`http://localhost:5000/student/${id}?status=active`, {
                method: "put"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Your food has been updated',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        setControl(!control)
                        checkId.forEach(id => {
                            document.getElementById(`${id}`).checked = false;
                        });
                    }
                })
        });
    }

    const handleInActiveStatus = () => {
        checkId.forEach(id => {
            fetch(`http://localhost:5000/student/${id}?status=inActive`, {
                method: "put"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Your food has been updated',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        setControl(!control)
                        checkId.forEach(id => {
                            document.getElementById(`${id}`).checked = false;
                        });
                    }
                })
        });
    }


    return (
        <div className='align-items-center justify-content-center food'>
          <button className='btn btn-success mb-3 me-2' onClick={handleActiveStatus}>Active</button>
            <button className='btn btn-primary mb-3 me-2' onClick={handleInActiveStatus}>In Active</button>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Student Name</th>
                                <th>Student Roll</th>
                                <th>Age</th>
                                <th>Class Name</th>
                                <th>Hall Name</th>
                                <th>Status</th>
                                <th>Checkbox</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                students.map((pd, index) => <tr>
                                    <td>{pd?.name}</td>
                                    <td>{pd?.roll}</td>
                                    <td>{pd?.age}</td>
                                    <td>{pd?.class}</td>
                                    <td>{pd?.hallname}</td>
                                    <td>{pd?.status}</td>
                            <td> <input id={pd?._id} type="checkbox" onChange={() => handleCheckbox(pd?._id)} /> </td>

                                    <td>
                                        <button className='btn btn-success me-1' onClick={() => handleEdit(pd?._id)}>EDIT</button>

                                        <button className='btn btn-danger' onClick={() => handleDelete(pd?._id)}>DELETE</button>
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </Table>

                    <Modal show={show} onHide={handleClose} >
                        <form style={{ padding: "10px" }} onSubmit={handleSubmit(onSubmit)}>
                            <div class="mb-1 text-start ">
                                <div className="">
                                    <label for="exampleInputPassword1" class="form-label ">Student Name</label>
                                    <input defaultValue={student.name}  {...register("name")} class="form-control " />
                                </div>
                            </div>
                            <div class="mb-1 text-start">
                                <label for="exampleInputPassword1" class="form-label text-start">Student Roll</label>

                                <input defaultValue={student.roll} type='number' {...register("roll")} class="form-control" />
                            </div>
                            <div class="mb-1 text-start">
                                <label for="exampleInputPassword1" class="form-label text-start">Age</label>

                                <input defaultValue={student.age} type='number' {...register("age")} class="form-control" />
                            </div>
                            <div class="mb-1 text-start">
                                <label for="exampleInputPassword1" class="form-label text-start">Class Name</label>

                                <input defaultValue={student.class}  {...register("class")} class="form-control" />
                            </div>
                            <div class="mb-1 text-start">
                                <label for="exampleInputPassword1" class="form-label text-start">Hall Name</label>

                                <input defaultValue={student.hallname} {...register("hallname")} class="form-control" />
                            </div>

                            <div class="mb-1 text-start">
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

export default SHowStudent;
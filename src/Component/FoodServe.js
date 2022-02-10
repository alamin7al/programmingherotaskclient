import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import "./FoodServe.css"
import { Multiselect } from "multiselect-react-dropdown";
import Swal from 'sweetalert2';

const FoodServe = () => {
    let today = new Date().toLocaleDateString()
    const { register, handleSubmit, watch, reset } = useForm();


    const [student, setStudent] = useState({})
    const [students, setStudents] = useState([])
    const [foods, setFoods] = useState([])
    const [selectItems, setSelectItems] = useState([])
    const [roll, setRoll] = useState([])

    let rollRef = useRef(null)

    useEffect(() => {
        fetch(`http://localhost:5000/students`)
            .then(res => res.json())
            .then(data => setStudents(data.payload))

        fetch(`http://localhost:5000/foods`)
            .then(res => res.json())
            .then(data => setFoods(data.payload))
    }, [])


    const handleStudentRoll = (e) => {
        const id = e.target.value
        const selectStudent = students.find(std => std.roll === id)
        setStudent(selectStudent)
    }
   

    const onSelect = (selectedList, selectedItem) => {
        setSelectItems(selectedList);
    }
    const onRemove = (selectedList, removedItem) => {
        setSelectItems(removedItem)
    }

    const onSubmit = data => {
        const studentMeal = { ...data, status: "served", foodItemList: selectItems, studentId: student.roll }
        fetch(`http://localhost:5000/food/serve`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(studentMeal)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Food served',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    reset()
                    setStudent("")
                    setSelectItems([])
                    rollRef.current.value = ""
                }
                else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: `${data.message}`,
                        footer: '<a href="">Why do I have this issue?</a>'
                    })
                }
            })
    }

    return (
        <div className='ServeFood'>

            <form>
                <input className='form-control w-50' type="number" onChange={handleStudentRoll} placeholder="Enter student roll" ref={rollRef} />
                <div className='w-50'>
                    {
                        student &&
                        <ul className={student && 'search_student_roll'}>
                            <li className='text-start py-3'>{student.name}</li>
                        </ul>
                    }
                </div>  
            </form>

            <div className="mt-3 p-3 border w-50">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className='form-control' type="number" value={student ? student?.roll : ""} placeholder="Student roll" {...register("studentId")} />
                    <input className='form-control mt-2' type="text" {...register("date")} value={today} />
                    <select className='form-control mt-2 mb-2' {...register("shift")} >
                        <option value="breakfast">Breakfast</option>
                        <option value="lunch">Lunch</option>
                        <option value="dinner">Dinner</option>
                    </select>
                    <Multiselect   displayValue="name" onSelect={onSelect} onRemove={onRemove} />                    <input className='form-control mt-2 btn-primary' type="submit" value="SERVE" />
                </form>
            </div>
        </div>
    );
};

export default FoodServe;
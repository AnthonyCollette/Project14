import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
// import SmoothSelect from './SmoothSelect';
// import CustomizableModal from './CustomizableModal';

// const Form = () => {

//     const stateOptions = ['New York', 'Paris', 'Londres', 'Tokyo']
//     const departmentOptions = ['Sales', 'Marketing']
//     const [selectedState, setSelectedState] = useState()
//     const [selectedDepartment, setSelectedDepartment] = useState()
//     const handleSelectedState = (option) => {
//         setSelectedState(option)
//     }
//     const handleSelectedDepartment = (option) => {
//         setSelectedDepartment(option)
//     }
//     const [isOpenModal, setIsOpenModal] = useState(false)

//     const handleClick = (e) => {
//         e.preventDefault()
//         setIsOpenModal(true)
//     }

//     return (
//         <form>
//             <div className='form-group'>
//                 <label>First Name</label>
//                 <input type='text' name='firstName' />
//             </div>
//             <div className='form-group'>
//                 <label>Last Name</label>
//                 <input type='text' name='lastName' />
//             </div>
//             <div className='form-group'>
//                 <label>Date of Birth</label>
//                 <input type='text' name='birthdate' />
//             </div>
//             <div className='form-group'>
//                 <label>Start Date</label>
//                 <input type='text' name='startDate' />
//             </div>
//             <fieldset>
//                 <legend>Address</legend>
//                 <div className='form-group'>
//                     <label>Street</label>
//                     <input type='text' name='street' />
//                 </div>
//                 <div className='form-group'>
//                     <label>City</label>
//                     <input type='text' name='city' />
//                 </div>
//                 <div className='form-group'>
//                     <label>State</label>
//                     <SmoothSelect options={stateOptions} selected={selectedState} handleSelected={handleSelectedState} />
//                 </div>
//                 <div className='form-group'>
//                     <label>Zip Code</label>
//                     <input type='number' name='zipCode' />
//                 </div>
//             </fieldset>
//             <div className='form-group'>
//                 <label>Department</label>
//                 <SmoothSelect options={departmentOptions} selected={selectedDepartment} handleSelected={handleSelectedDepartment} />
//             </div>
//             <button className='btn' onClick={handleClick}>
//                 Save
//             </button>
//             {isOpenModal && <CustomizableModal />}

//         </form>
//     );
// };
const Form = () => {
    const {
        register,
        handleSubmit,
        watch, formState: { errors }
    } = useForm()

    const onSubmit = (data) => console.log(data)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='form-group'>
                <label htmlFor="firstName">First Name</label>
                <input type='text' name='firstName' {...register("firstName")} />
            </div>
            <div className='form-group'>
                <label htmlFor="lastName">Last Name</label>
                <input type='text' name='lastName' {...register("lastName")} />
            </div>
            <div className='form-group'>
                <label htmlFor="birthDate">Date of Birth</label>
                <input type='date' name='birthDate' {...register("birthDate")} />
            </div>
            <div className='form-group'>
                <label htmlFor="startDate">Start Date</label>
                <input type='date' name='startDate' {...register("startDate")} />
            </div>
            <fieldset>
                <legend>Address</legend>
                <div className='form-group'>
                    <label htmlFor="street">Street</label>
                    <input type='text' name='street' {...register("street")} />
                </div>
                <div className='form-group'>
                    <label htmlFor="city">City</label>
                    <input type='text' name='city' {...register("city")} />
                </div>
                <div className='form-group'>
                    <label htmlFor="state">State</label>
                    <select {...register("state")}>
                        <option>Alabama</option>
                        <option>Alaska</option>
                        <option>Arizona</option>
                    </select>
                </div>
                <div className='form-group'>
                    <label htmlFor="zip">Zip Code</label>
                    <input type='text' name='zip' {...register("zip")} />
                </div>
            </fieldset>
            <div className='form-group'>
                <select {...register("department")}>
                    <option>Sales</option>
                    <option>Marketing</option>
                </select>
            </div>
            <button type='submit' className='btn'>Save</button>
        </form>
    )
}

export default Form;
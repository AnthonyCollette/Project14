import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Form = ({ handleFormSubmit }) => {
    const {
        register,
        handleSubmit,
        watch, formState: { errors }
    } = useForm()

    const onSubmit = (data) => console.log(data)

    return (
        <form onSubmit={(e) => {
            handleSubmit(onSubmit)
            handleFormSubmit(e)
        }}>
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
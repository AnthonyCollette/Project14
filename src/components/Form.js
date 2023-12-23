import React, { useEffect, useState } from 'react';
import SmoothSelect from './SmoothSelect';
import CustomizableModal from './CustomizableModal';

const Form = () => {

    const stateOptions = ['New York', 'Paris', 'Londres', 'Tokyo']
    const departmentOptions = ['Sales', 'Marketing']
    const [selectedState, setSelectedState] = useState()
    const [selectedDepartment, setSelectedDepartment] = useState()
    const handleSelectedState = (option) => {
        setSelectedState(option)
    }
    const handleSelectedDepartment = (option) => {
        setSelectedDepartment(option)
    }
    const [isOpenModal, setIsOpenModal] = useState(false)

    const handleClick = (e) => {
        e.preventDefault()
        console.log('State : ' + selectedState + ', department : ' + selectedDepartment)
        setIsOpenModal(true)
    }

    return (
        <form>
            <div className='form-group'>
                <label>First Name</label>
                <input type='text' name='firstName' />
            </div>
            <div className='form-group'>
                <label>Last Name</label>
                <input type='text' name='lastName' />
            </div>
            <div className='form-group'>
                <label>Date of Birth</label>
                <input type='text' name='birthdate' />
            </div>
            <div className='form-group'>
                <label>Start Date</label>
                <input type='text' name='startDate' />
            </div>
            <fieldset>
                <legend>Address</legend>
                <div className='form-group'>
                    <label>Street</label>
                    <input type='text' name='street' />
                </div>
                <div className='form-group'>
                    <label>City</label>
                    <input type='text' name='city' />
                </div>
                <div className='form-group'>
                    <label>State</label>
                    <SmoothSelect options={stateOptions} selected={selectedState} handleSelected={handleSelectedState} />
                </div>
                <div className='form-group'>
                    <label>Zip Code</label>
                    <input type='number' name='zipCode' />
                </div>
            </fieldset>
            <div className='form-group'>
                <label>Department</label>
                <SmoothSelect options={departmentOptions} selected={selectedDepartment} handleSelected={handleSelectedDepartment} />
            </div>
            <button className='btn' onClick={handleClick}>
                Save
            </button>
            {isOpenModal && <CustomizableModal />}
            
        </form>
    );
};

export default Form;
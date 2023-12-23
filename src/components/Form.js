import React from 'react';

const Form = () => {
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
                    <select name='city'>
                        <option value='New York'>New York</option>
                    </select>
                </div>
                <div className='form-group'>
                    <label>Zip Code</label>
                    <input type='number' name='zipCode' />
                </div>
            </fieldset>
            <div className='form-group'>
                <label>Department</label>
                <select name="department">
                    <option value="Sales">Sales</option>
                    <option value="Marketing">Marketing</option>
                </select>
            </div>
            <button className='btn'>
                Save
            </button>
        </form>
    );
};

export default Form;
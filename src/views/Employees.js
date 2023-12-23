import React from 'react';
import Table from '../components/Table';
import { Link } from 'react-router-dom';
import SmoothSelect from '../components/SmoothSelect';

const Employees = () => {

    const quantityOptions = ['10', '25', '50', '100']

    return (
        <main>
            <h1>Current Employees</h1>
            <div className='filters'>
                <p>Show 
                    <SmoothSelect options={quantityOptions} />
                    entries
                </p>

                <div className='search'>
                    <label for="search">
                        Search
                    </label>
                    <input type="text" name="search" />
                </div>
            </div>
            <Table />
            <div className='table--bottom'>
                <p>Showing 0 to 0 of 0 entries</p>
                <div className='pagination'>
                    <button>Previous</button>
                    <button>Next</button>
                </div>
            </div>
            <Link to="/" className='back'>Home</Link>
        </main>
    );
};

export default Employees;
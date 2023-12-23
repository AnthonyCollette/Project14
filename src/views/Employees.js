import React from 'react';
import Table from '../components/Table';
import { Link } from 'react-router-dom';

const Employees = () => {

    return (
        <main>
            <h1>Current Employees</h1>
            <div className='filters'>
                <p>Show <select name='resultsQuantity'>
                    <option value='10'>
                        10
                    </option>
                    <option value='25'>
                        25
                    </option>
                    <option value='50'>
                        50
                    </option>
                    <option value='100'>
                        100
                    </option>
                </select>
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
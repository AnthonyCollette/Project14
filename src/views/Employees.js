import React from 'react';
import Table from '../components/Table';
import { Link } from 'react-router-dom';
import SmoothSelect from '../components/SmoothSelect';

const Employees = () => {

    return (
        <main>
            <h1>Current Employees</h1>
            <div className='container'>
                <Table />
            </div>
            <Link to="/" className='back'>Home</Link>
        </main>
    );
};

export default Employees;
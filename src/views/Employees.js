import React from 'react';
import Table from '../components/Table';
import { Link } from 'react-router-dom';

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
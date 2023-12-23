import React from 'react';
import { Link } from 'react-router-dom';
import Form from '../components/Form';

const Homepage = () => {
    return (
        <main>
            <h1>HRnet</h1>
            <Link to="/employees" className='link-w-arrow'>View Current Employees <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg></Link>
            <h2>Create Employee</h2>
            <Form />
        </main>
    );
};

export default Homepage;
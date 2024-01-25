import { Link } from 'react-router-dom';
import Form from '../components/Form';
import { useState } from 'react';
import CustomizableModal from '../components/CustomizableModal';

const Homepage = () => {

    const [openModal, isOpenModal] = useState(false)
    const handleCrossBtn = () => {
        isOpenModal(false)
    }
    const handleModalBtn = () => {
        isOpenModal(false)
    }
    const handleFormSubmit = () => {
        isOpenModal(true)
    }

    return (
        <main>
            <h1>HRnet</h1>
            <Link to="/employees" className='link-w-arrow'>View Current Employees <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" /></svg></Link>
            <h2>Create Employee</h2>
            <Form handleFormSubmit={handleFormSubmit} />
            {openModal && <CustomizableModal color='#669bbc' title="Congratulations !" titleAlign="center" crossColor="#669bbc" text="Employee Created !" textAlign="center" btnFilled btnText='Fermer la modale' btnBorderRadius={5} btnAlign="center" btnPadding="10px 30px" handleCrossBtn={handleCrossBtn} btnCross border="2" handleModalBtn={handleModalBtn} />}

        </main>
    );
};

export default Homepage;
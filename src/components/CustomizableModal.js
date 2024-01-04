import React from 'react';
import { IoClose } from "react-icons/io5";

const CustomizableModal = ({ color, title, text, btnStyle }) => {

    return (
        <div className='customizable-modal'>
            <div className='customizable-modal--overlay'>
                {title && <h2 style={{ 'color': color }}>{title}</h2>}
                {text && <p style={{ 'color': color }}>{text}</p>}
                {btnStyle && <div className='btn--cross'><IoClose /></div>}
            </div>
        </div>
    );
};

export default CustomizableModal;
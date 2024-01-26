import React from 'react';
import closeIcon from '../assets/images/close_icon.svg'

const CustomizableModal = ({ color, title, text, btnFilled, btnOutline, btnText, handleCrossBtn, btnBorderRadius, btnPadding, btnAlign, textAlign, titleAlign, crossColor, btnCross, border, handleModalBtn }) => {

    const btnPosition = () => {
        switch (btnAlign) {
            case 'left':
                return '0 auto 0 0'
            case 'center':
                return '0 auto'
            case 'right':
                return '0 0 0 auto'
        }
    }

    return (
        <div className='customizable-modal'>
            <div className='customizable-modal--overlay' style={{'border': `${border}px solid ${color}`}}>
                {title && <h2 style={{ 'color': color, 'textAlign': titleAlign }}>{title}</h2>}
                {text && <p style={{ 'color': color, 'textAlign': textAlign }}>{text}</p>}
                {btnFilled && <button onClick={handleModalBtn} style={{ 'backgroundColor': color, 'color': 'white', 'border': `1px solid ${color}`, 'borderRadius': btnBorderRadius, 'padding': btnPadding, 'margin': btnPosition() }}>{btnText || ''}</button>}
                {btnOutline && <button onClick={handleModalBtn} style={{ 'backgroundColor': 'transparent', 'color': color, 'border': '1px solid white', 'borderRadius': btnBorderRadius }}>{btnText || ''}</button>}
                {btnCross && <div className='btn--cross' onClick={handleCrossBtn} style={{ backgroundColor: crossColor }}><img src={closeIcon} className='close-icon' alt='close icon' /></div>}
            </div>
        </div>
    );
};

export default CustomizableModal;
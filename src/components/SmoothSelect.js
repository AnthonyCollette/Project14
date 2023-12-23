import React, { useRef, useState, useEffect } from 'react';

const SmoothSelect = ({ options, handleSelected, selected }) => {

    const select = useRef()
    const smoothSelect = useRef()
    const smoothSelectBox = useRef()

    const [open, isOpen] = useState(false)
    const [selectedOption, setSelectedOption] = useState('')

    const handleClick = () => {
        isOpen(!open)
    }

    const handleSelectedOption = (option) => {
        setSelectedOption(option)
        isOpen(false)
    }

    function useClickOutside(ref, onClickOutside) {
        useEffect(() => {

            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    onClickOutside();
                }
            }

            document.addEventListener("mousedown", handleClickOutside);

            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref, onClickOutside]);
    }

    useClickOutside(smoothSelectBox, () => {
        isOpen(false);
    });

    return (
        <div className='smooth-select' ref={smoothSelectBox}>
            <select name='city' ref={select}>
                {options.map((option) => {
                    return <option value={option}>
                        {option}
                    </option>
                })}
            </select>
            <div className={open ? 'smooth-select--container open' : 'smooth-select--container'} ref={smoothSelect}>
                <p className='smooth-select--current' onClick={handleClick}>
                    {selected ? selected : options[0] }
                    <svg fill="#000000" height="10px" width="10px" version="1.1" id="Layer_1"
                        viewBox="0 0 407.437 407.437">
                        <polygon points="386.258,91.567 203.718,273.512 21.179,91.567 0,112.815 203.718,315.87 407.437,112.815 " />
                    </svg>
                </p>
                <ul>
                    {options.map((option) => {
                        return <li onClick={() => {
                            isOpen(false)
                            handleSelected(option)}}>{option}</li>
                    })}
                </ul>
            </div>
        </div>
    );
};

export default SmoothSelect;
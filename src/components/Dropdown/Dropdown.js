import { useState } from 'react'

export const Dropdown = ({
    options,
    initial,
    selectionChanged,
}) => {
    const [selectedOption, setSelectedOption] = useState(initial);
    const handleChange = (e) => {
        setSelectedOption(e.target.value)
        //console.log('selected', e.target.value)
        typeof selectionChanged === 'function' && selectionChanged(e.target.value)
    }
    return (
        <select className='form-control mx-3'
            value={selectedOption}
            onChange={handleChange}>
            {options.map(o => (
                <option key={o.value} value={o.value}>{o.label}</option>
            ))}
        </select>
    );
};


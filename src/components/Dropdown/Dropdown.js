import { useState } from 'react'

export const Dropdown = ({
    options,
    initial,
    selectionChanged,
    selectedLabelChanged,
}) => {
    const [selectedOption, setSelectedOption] = useState(initial);
    const handleChange = (e) => {
        setSelectedOption(e.target.value)
        //console.log('selected', e.target.value)
        const val = e.target.value;
        typeof selectionChanged === 'function' && selectionChanged(val)
        typeof selectedLabelChanged === 'function' && selectedLabelChanged(options.find(f=>f.value===val).label);
    }
    return (
        <select className='form-control mx-3'
            value={selectedOption}
            onChange={handleChange}>
            {options.map(o => (
                <option key={o.value} value={o.value} name={o.label}>{o.label}</option>
            ))}
        </select>
    );
};


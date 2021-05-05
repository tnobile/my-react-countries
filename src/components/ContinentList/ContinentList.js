import React from 'react'
import CountryList from '../CountryList/CountryList';

const ContinentList = ({
    continents,
    selectedContinent,
    selectedCity
}) => {
    return (
        <div>
            <table className="table table-sm table-stripped table-dark table-hover">
                {continents && continents.filter(c=>c.code===selectedContinent).map(c =>
                    <CountryList ccode={c.code} cname={c.name} countries={c.countries} selected={selectedCity} />
                )}
                {!continents && <div>No continents</div>}
            </table>
        </div>
    )
}

export default ContinentList;
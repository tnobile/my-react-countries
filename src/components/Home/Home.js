import { Dropdown } from '../Dropdown/Dropdown';
import React, { useState } from 'react'
import { useQuery } from 'react-query'
import ContinentList from '../ContinentList/ContinentList'

const endpoint = "https://countries.trevorblades.com"
const FILMS_QUERY = `
  {
    continents{
        code name countries { 
            code emoji name native capital currency phone
            languages {name native code} 
        } 
    }
  }
`;

// continents(filter:{ code:{eq:"AS"}}) {name}

const Home = () => {
    const [selected, setSelected] = useState('AS')
    const [city, setCity] = useState()
    const { data, isLoading, error } = useQuery("launches", () => {
        return fetch(endpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query: FILMS_QUERY })
        }).then(response => {
            if (response.status >= 400) {
                throw new Error("Error fetching data");
            } else {
                return response.json();
            }
        }).then(json => json.data)
    })


    if (isLoading) return "Loading...";
    if (error) return <pre>{error.message}</pre>;

    const selectionChanged = s => {
        console.log('selected', s)
        setSelected(s)
    }

    return (
        // fluid for widh: 100%
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <h2 className='text-center m-4'>Countries [{selected}] by useQuery hook</h2>
                </div>
            </div>
            <div className="row" >
                <div className="col-3">
                    <div class='input-group mb-3'>
                        <div className="input-group-prepend">
                            <button className="btn btn-outline-primary" type="button">filter</button>
                        </div>
                        <input type='text' className='form-control' placeholder="filter by" value={city}></input>
                    </div>
                </div>
                <div className="col-9" >
                    <div className='form-group form-inline'>
                        <label el className='mx-3' for='selector'>Continents</label>
                        {
                            data && data.continents && data.continents.length > 0 &&
                            <Dropdown options={data.continents.map(o => { return { "value": o.code, "label": o.name } })}
                                initial={selected}
                                selectionChanged={selectionChanged} />
                        }
                        <div className="mr-2">==&gt;</div>
                        <select name="selector" class="form-control" value={selected}>
                            {data && data.continents && data.continents.map(o => <option value={o.code}>{o.name}</option>)}
                        </select>
                        <div className="mr-2">==&gt;</div>
                        {
                            data && data.continents && data.continents.length > 0 &&
                            <Dropdown
                                selectedLabelChanged={setCity}
                                options={
                                    data.continents
                                        .filter(o => o.code === selected)
                                        .flatMap(c => c.countries) //selectMany!
                                        .map(o => { return { "value": o.code, "label": o.name } })}
                            />
                        }
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    {console.log(data.continents)}
                    {data && data.continents && data.continents.length > 0 &&
                        <ContinentList continents={data.continents} selectedContinent={selected} seletedCity={city} />}
                    {!data && <div>no data...</div>}
                </div>
            </div>
        </div>
    )
}

export default Home;
import React from 'react'
import { useQuery } from 'react-query'
import ContinentList from '../ContinentList/ContinentList'
import CountryList from '../CountryList/CountryList'

import styles from './Home.module.css'

const endpoint = "https://countries.trevorblades.com"
const FILMS_QUERY = `
  {
    continents(filter:{code:{eq:"AS"}}) {
        code name countries { 
            code emoji name native capital currency phone
            languages {name native code} 
        } 
    }
  }
`;

// continents(filter:{ code:{eq:"AS"}}) {name}

const Home = () => {
    const { data, isLoading, error } = useQuery("launches", () => {
        return fetch(endpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query: FILMS_QUERY })
        })
            .then(response => {
                if (response.status >= 400) {
                    throw new Error("Error fetching data");
                } else {
                    return response.json();
                }
            })
            .then(json => json.data)
    })

    if (isLoading) return "Loading...";
    if (error) return <pre>{error.message}</pre>;

    return (
        <>
            <h3>Home</h3>
            {console.log(data.continents)}
            {data && data.continents && data.continents.length > 0 &&
                <ContinentList continents={data.continents} />}
            {!data && <div>no data...</div>}
            <div>End</div>
        </>
    )
}

export default Home;
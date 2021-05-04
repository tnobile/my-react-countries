import styles from './CountryList.module.css'
import React, { useState } from 'react'

// sortable? https://www.smashingmagazine.com/2020/03/sortable-tables-react/
const useSortableData = (items, config = null) => {
    const [sortConfig, setSortConfig] = React.useState(config);
  
    const sortedItems = React.useMemo(() => {
      let sortableItems = [...items];
      if (sortConfig !== null) {
        sortableItems.sort((a, b) => {
          if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
          }
          if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
          }
          return 0;
        });
      }
      return sortableItems;
    }, [items, sortConfig]);
  
    const requestSort = (key) => {
      let direction = 'ascending';
      if (
        sortConfig &&
        sortConfig.key === key &&
        sortConfig.direction === 'ascending'
      ) {
        direction = 'descending';
      }
      setSortConfig({ key, direction });
    };
  
    return { items: sortedItems, requestSort, sortConfig };
  };
  

const CountryList = ({ ccode, cname, countries }) => {
    const [sortedField, setSortedField] = useState(null);
    const { items, requestSort, sortConfig } = useSortableData(countries);
    const getClassNamesFor = (name) => {
      if (!sortConfig) {
        return;
      }
      return sortConfig.key === name ? sortConfig.direction : undefined;
    };
    const handleSort = e => {
        requestSort(e.target.getAttribute('name'))
    }
    // const handleSort = (e) => {
    //     e.preventDefault();
    //     // For an <input> element, id,name,type etc are valid. 
    //     // For <li> tag the property name is not a valid one, hence e.target.name is undefined.
    //     var f = e.target.getAttribute('name');
    //     setSortedField(f)
    // }

    // let sortedCountries = [...countries];
    // if (sortedCountries !== null) {
    //     sortedCountries.sort((a, b) => {
    //         if (a[sortedField] < b[sortedField]) {
    //             return -1;
    //         }
    //         if (a[sortedField] > b[sortedField]) {
    //             return 1;
    //         }
    //         return 0;
    //     })
    // }
    return (
        <>
            <thead className="thead-dark">
                <tr>
                    <th scople='col' name='code' onClick={handleSort} className={styles[getClassNamesFor('code')]}>code</th>
                    <th scople='col' name='emoji' onClick={handleSort} className={styles[getClassNamesFor('emoji')]}>emoji</th>
                    <th scople='col' name='name' onClick={handleSort} className={styles[getClassNamesFor('name')]}>name</th>
                    <th scople='col' name='native' onClick={handleSort} className={styles[getClassNamesFor('native')]}>native</th>
                    <th scople='col' name='ccy' onClick={handleSort} className={styles[getClassNamesFor('ccy')]}>ccy</th>
                    <th scople='col' name='capital' onClick={handleSort} className={styles[getClassNamesFor('capital')]}>capital</th>
                    <th scople='col'>phone</th>
                    <th scople='col' name='languages' onClick={handleSort} className={styles[getClassNamesFor('languages')]}>languages</th>
                    <th scople='col' name='continent' onClick={handleSort} className={styles[getClassNamesFor('continent')]}>continent</th>
                    <th scople='col'>ccode</th>
                </tr>
            </thead>
            <tbody>
                {countries && countries.length > 0 &&
                    items.map(d => {
                        //console.log(d);
                        return (
                            <tr className={styles.country} key={d.code}>
                                <td>{d.code}</td>
                                <td>{d.emoji}</td>
                                <td>{d.name}</td>
                                <td>{d.native}</td>
                                <td>{d.currency}</td>
                                <td>{d.capital}</td>
                                <td>{d.phone}</td>
                                <td>{d.languages && d.languages.map(l => l.name).join('/')}</td>
                                <td>{ccode}</td>
                                <td>{cname}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </>
    )
}

export default CountryList;
import { useEffect, useState } from "react";
import { getAllCountries, searchForRegion } from "../api/api";
import { RootObject } from "../types/countriesTypes";
import { Country } from "./Country";
import { Search } from "./Search";

export function DisplaySection() {
    const [result, setResult] = useState<RootObject[] | string>([]);
    const [searchField, setSearchField] = useState<string>('');
    const [selectField, setSelectField] = useState<string>('');

    function setResponseData() {
        getAllCountries().then(data => {setResult(data)});
    }

    useEffect(() => {
        if (!searchField) {
            setResult('searching')
            setResponseData()
        }
    }, [searchField]);

    useEffect(() => {
        if (selectField) {
            setResult('searching')
            searchForRegion(selectField)
            .then(data => setResult(data));
        }
    }, [selectField]);

    return (
        <section className="pb-6 container mx-auto md:px-16 px-4">
            <Search 
                selectField={selectField} 
                setSelectField={setSelectField} 
                setSearchField={setSearchField}
                setResult={setResult}
                searchField={searchField}
            />
            
            {result === 'error' ?
                <p className="text-center mt-16">
                    An error occurs, it is not possible to display the countries.
                </p>

                :

                <div className="mt-16">
                    {result.length > 0 && Array.isArray(result) ? (
                        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
                            {result.map((country, index) => {
                                return (
                                    /*// @ts-ignore */
                                    <Country
                                        key={index}
                                        name={country.name}
                                        capital={country.capital}
                                        population={country.population}
                                        region={country.region}
                                        flags={country.flags}
                                        cca3={country.cca3}
                                    />
                                )
                            })}
                        </div>
                    ) : (
                        <p>Searching....</p>
                    )}
                </div>
            }
        </section>
    );
}
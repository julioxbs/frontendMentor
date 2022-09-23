import { useEffect, useState } from "react";
import { getRandomCountries, searchCountry, searchForRegion } from "../api/api";
import { Country } from "./Country";
import { Search } from "./Search";

export type countriesType = {
    region: string,
    population: number,
    capital: string,
    subregion: string,
    name: {
        common: string,
        official: string,
    },
    flags: {
        svg: string
    }
}

export function FilterableSection() {
    const [randomCountries, setRandomCountries] = useState<countriesType[] | string>([]);
    const [searchField, setSearchField] = useState<string>('');
    const [selectField, setSelectField] = useState<string>('');

    function setResponseData() {
        getRandomCountries().then(data => {
            setRandomCountries(data)
        });
    }

    useEffect(() => {
        if (searchField) {
            searchCountry(searchField)
            .then(data => setRandomCountries(data));
            setSelectField('');
        } else {
            if (!selectField) {
                setResponseData()
            }
        }
    }, [searchField]);

    useEffect(() => {
        if (selectField) {
            console.log('foi aqui')
            searchForRegion(selectField)
            .then(data => setRandomCountries(data));
            setSearchField('')
        }
    }, [selectField])

    return (
        <section className="pb-6">
            <Search 
                selectField={selectField} 
                setSelectField={setSelectField} 
                setSearchField={setSearchField} 
                searchField={searchField}
            />

            {randomCountries === 'error' ?
                <p className="text-center mt-16">
                    An error occurs, it is not possible to display the countries.
                </p>

                :

                <div className="container mx-auto px-16 mt-16">
                    {randomCountries.length > 0 && Array.isArray(randomCountries) ? (
                        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
                            {randomCountries.map((country, index) => {
                                return (
                                    <Country
                                        key={index}
                                        name={country.name.common}
                                        capital={country.capital}
                                        population={country.population}
                                        region={country.region}
                                        flag={country.flags.svg} />
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
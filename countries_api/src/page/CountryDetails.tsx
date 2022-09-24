import { Link } from 'react-router-dom'
import { faCircleChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { RootObject } from "../types/countriesTypes";
import axios from "axios";
import { getNativeName, getCurrencies, getLanguages } from '../utils/utilsFunctions';

export function CountryDetails() {
    const [country, setCountry] = useState<RootObject[]>([]);
    const { name } = useParams<string>();

    async function getCountry(name: string) {
        const res = await axios.get(`https://restcountries.com/v3.1/alpha/${name}`);
        return res.data;
    }

    useEffect(() => {
        if (name) {
            getCountry(name).then(data => {
                setCountry(data);
            })
        }
    }, [name])

    return (
        <section className="container mx-auto px-16 mt-16 min-h-screen pb-4">
            <button>
                <Link to={'/'} className="shadow-md px-6 py-1 darkmode_components flex items-center gap-2">
                    <FontAwesomeIcon className="text-xl" icon={faCircleChevronLeft} />
                    Back
                </Link>
            </button>

            <div className="mt-16">
                {country.map((info, index) => {
                    return (
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-24 mt-4" key={index}>
                            <div>
                                <img src={info.flags.svg} alt={info.name.official} />
                            </div>

                            <div className="self-center">
                                <h1 className="text-2xl font-extrabold mb-4">{info.name.common}</h1>

                                <div className="grid md:grid-cols-2 grid-cols-1">
                                    <ul className="flex flex-col gap-2">
                                        <li><strong>Native Name: </strong>{info.name.nativeName && getNativeName(info.name.nativeName)}</li>
                                        <li><strong>Population: </strong>{info.population.toLocaleString()}</li>
                                        <li><strong>Region: </strong>{info.region}</li>
                                        <li><strong>Sub Region: </strong>{info.subregion}</li>
                                        <li><strong>Capital: </strong>{info.capital}</li>
                                    </ul>

                                    <ul className="flex flex-col gap-2">
                                        <li><strong>Top Level Domain: </strong>{info.tld}</li>
                                        <li><strong>Currencie(s): </strong>{info.currencies && getCurrencies(info.currencies)}</li>
                                        <li><strong>Languages: </strong>{info.languages && getLanguages(info.languages)}</li>
                                    </ul>
                                </div>

                                <div className={`mt-16 flex items-center flex-wrap gap-3 ${info.borders ?? 'hidden'}`}>
                                    <p><strong>Border Countries: </strong></p>
                                    {info.borders && info.borders?.map(country => <Link to={`/country/${country}`} className="shadow-md px-6 py-1 darkmode_components">{country}</Link>)}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
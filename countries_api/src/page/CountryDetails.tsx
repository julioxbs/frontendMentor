import {Link} from 'react-router-dom'
import { faCircleChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { RootObject } from "../types/countriesTypes";

export function CountryDetails() {
    const [country, setCountry] = useState<RootObject[]>([]);
    const { name } = useParams<string>();

    async function getCountry(name: string) {
        const res = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
        return res;
    }

    useEffect(() => {
        if (name) {
            getCountry(name).then(data => {
                setCountry(data.data);
                console.log(country)
            })
        }
    }, [])

    function getNativeName(names: {[key: string]: any}): string {
        let totalNames: {
            official: string;
            common: string;
        }[] = [];
        Object.entries(names).forEach(([key, value]) => {
            totalNames.push(names[key]);
        })
        return totalNames[0].common
    };

    function getCurrencies(currencies: {[key: string]: any}): string {
        let totalCurrencies: {
            name: string;
            symbol: string
        }[] = [];
        Object.entries(currencies).forEach(([key, value]) => {
            totalCurrencies.push(currencies[key])
        })
        return totalCurrencies[0].name
    };

    function getLanguages(languages: {[key: string]: any}): string {
        let totalLanguages: string[] = [];
        Object.entries(languages).forEach(([key, value]) => {
            totalLanguages.push(languages[key])
        })
        return totalLanguages.join(', ')
    }

    return (
        <section className="container mx-auto px-16 mt-16 min-h-screen pb-4">
            <button>
                <Link to={'/'} className="shadow-md px-6 py-1 dark:bg-[#2B3743] flex items-center gap-2">
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
                                        <li><strong>Population: </strong>{info.population}</li>
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

                                <div className="mt-16 flex items-center flex-wrap gap-3">
                                    <p><strong>Border Countries: </strong></p>
                                    {info.borders?.map(val => <button className="shadow-md px-6 py-1 dark:bg-[#2B3743]">{val}</button>)}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
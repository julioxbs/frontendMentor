import { Link } from "react-router-dom"

type countryTypes = {
    name: string;
    population: number;
    region: string;
    capital: string;
    flag: string
}

export function Country({name, population, region, capital, flag}: countryTypes) {
    return (
        <Link to={`/country/${name.toLocaleLowerCase()}`} className="dark:bg-[#2B3743] outline-gray-300 shadow-md rounded overflow-auto">
            <div className="h-[150px]">
                <img className="object-cover w-full h-full block" 
                src={flag} 
                alt={`flag of ${name}`} />
            </div>
            
            <div className="p-6">
                <p className="text-xl"><strong>{name}</strong></p>
                <p><strong>Population:</strong> {population}</p>
                <p><strong>Region:</strong> {region}</p>
                <p><strong>Capital:</strong> {capital}</p>
            </div>
        </Link>
    );
}
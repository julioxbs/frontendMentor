import { Link } from "react-router-dom"
import { RootObject } from "../types/countriesTypes";

export function Country({ name, population, region, capital, flags, cca3 }: RootObject) {
    return (
        <Link to={`/country/${cca3}`} className="darkmode_components acessibility_outline md:shadow-xl shadow-md rounded overflow-auto">
            <div className="h-[150px]">
                <img className="object-cover w-full h-full block" 
                src={flags.svg} 
                alt={`flag of ${name.common}`} />
            </div>
            
            <div className="p-6">
                <p className="text-xl"><strong>{name.common}</strong></p>
                <p><strong>Population:</strong> {population}</p>
                <p><strong>Region:</strong> {region}</p>
                <p><strong>Capital:</strong> {capital}</p>
            </div>
        </Link>
    );
}
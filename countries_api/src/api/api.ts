import axios, { AxiosError } from "axios"

export async function getRandomCountries() {
    const response = await axios.get(`https://restcountries.com/v3.1/all`)
        .then(res => res.data.splice(0, 8))
        .catch((reason: AxiosError) => 'error');
    return response;
};

export async function searchCountry(country: string) {
    const response = await axios.get(`https://restcountries.com/v3.1/name/${country}`)
        .then(res => res.data)
        .catch((reason: AxiosError) => 'error');
    return response;
}

export async function searchForRegion(region: string) {
    const response = await axios.get(`https://restcountries.com/v3.1/region/${region}`)
        .then(res => res.data)
        .catch((reason: AxiosError) => 'error');
    return response;
}
import { useForm, SubmitHandler } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { searchForCountry } from "../api/api";

type Inputs = {
    search: string;
    select: string;
}

type searchTypes = {
    selectField: string;
    searchField: string;
    setSelectField: (selectField: string) => void;
    setSearchField: (searchField: string) => void;
    setResult: (searchField: string) => void;
}

export function Search({ setSearchField, searchField, setSelectField, selectField, setResult }: searchTypes) {
    const { register, handleSubmit} = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data, e) => {
        searchForCountry(data.search)
        .then(country => setResult(country))
    };

    return (
        <form className='mt-16' onSubmit={handleSubmit(onSubmit)}>
            <div className="flex md:flex-row flex-col gap-2 md:items-center justify-between  container">
                <div className='md:w-[450px] w-full shadow-md'>
                    <div className={`flex items-center py-4 px-6 gap-4 dark:bg-[#2B3743] rounded`}>
                        <FontAwesomeIcon className='text-xl' icon={faMagnifyingGlass} />
                        <input value={searchField} onInput={(e) => setSearchField((e.target as HTMLInputElement).value)} {...register('search')} type="search" className='bg-transparent border-none outline-none dark:text-white w-full placeholder:font-semibold dark:placeholder:text-white' placeholder='Search for a countries...' />
                    </div>
                </div>

                <select value={selectField} onChange={(e) => setSelectField(e.target.value)} className="shadow-md md:w-[200px] w-full dark:bg-[#2B3743] py-4 px-2 rounded font-semibold">
                    <option value="">Filter by region</option>
                    <option value="africa">Africa</option>
                    <option value="america">America</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                    <option value="oceania">Oceania</option>
                </select>
            </div>
        </form>
    );
}
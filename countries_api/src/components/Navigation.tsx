import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { useContext } from 'react';
import { themeContext } from '../context/theme';
import { saveToLocalStorage } from '../utils/localStorage';

export function Navigation() {
    const { theme, setTheme } = useContext(themeContext);

    function setDarkMode() {
        saveToLocalStorage(!theme);
        setTheme(!theme)
    }

    return (
        <nav className='shadow-md py-6 md:px-16 px-4 dark:bg-[#2B3743]'>
            <div className="container flex items-center justify-between mx-auto">
                <h1 className="font-extrabold md:text-2xl">Where in the world?</h1>

                <button className='flex items-center gap-2 font-semibold' onClick={setDarkMode}>
                    <FontAwesomeIcon className='text-xl' icon={faMoon} />
                    Dark mode
                </button>
            </div>
        </nav>
    );
}
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Nav = () => {
    const { t, i18n } = useTranslation();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleLanguage = () => {
        const newLang = i18n.language === 'pt' ? 'en' : 'pt';
        i18n.changeLanguage(newLang);
    };

    return (
        <div className="w-full top-0 h-[12vh] bg-[#1C1032] shadow-md">
            <div className="flex items-center justify-between w-[95%] h-full mx-auto">
                {/* Navigation Links */}
                <div className="flex items-center space-x-8 ml-16 hidden md:flex">
                    <div className="nav-link relative group text-[16px] text-white font-bold cursor-pointer font-mono" aria-label="Home">
                        {t('HOME')}
                        <span className="absolute left-0 bottom-0 h-[2px] bg-yellow-300 w-full transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
                    </div>
                    <div className="nav-link relative group text-[16px] text-white font-bold cursor-pointer font-mono" aria-label="Experiences">
                        {t('EXPERIENCES')}
                        <span className="absolute left-0 bottom-0 h-[2px] bg-yellow-300 w-full transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
                    </div>
                    <div className="nav-link relative group text-[16px] text-white font-bold cursor-pointer font-mono" aria-label="Projects">
                        {t('PROJECTS')}
                        <span className="absolute left-0 bottom-0 h-[2px] bg-yellow-300 w-full transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
                    </div>
                    <div className="nav-link relative group text-[16px] text-white font-bold cursor-pointer font-mono" aria-label="Contact">
                        {t('CONTACT')}
                        <span className="absolute left-0 bottom-0 h-[2px] bg-yellow-300 w-full transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
                    </div>
                </div>

                {/* Logo */}
                <img
                    src="./Images/logo2.png"
                    className="w-[10%] h-full rounded-full object-cover mt-5 ml- 3.2 mx-auto transition-transform duration-300 ease-in-out transform hover:scale-110"
                    alt="Logo"
                />

                {/* Social Media Links */}
                <div className="flex items-center space-x-6 hidden md:flex">
                    <a href="https://github.com/stephanyborzi" target="_blank" rel="noopener noreferrer">
                        <img src="./Images/github.png" className="w-6 h-6 transition-transform duration-300 ease-in-out transform hover:scale-110" alt="GitHub" />
                    </a>
                    <a href="https://www.linkedin.com/in/stephany-borzi-marques-28b086266" target="_blank" rel="noopener noreferrer">
                        <img src="./Images/linkedin.png" className="w-6 h-6 transition-transform duration-300 ease-in-out transform hover:scale-110" alt="LinkedIn" />
                    </a>
                    <a href="mailto:borzistephany18@outlook.com">
                        <img src="./Images/envelope.svg" className="w-6 h-6 filter invert transition-transform duration-300 ease-in-out transform hover:scale-110" alt="E-mail" />
                    </a>
                    <a href="https://www.instagram.com/stephany__borzi__marques?igsh=cjlvbTA1Mzl5aTZo&utm_source=qr" target="_blank" rel="noopener noreferrer">
                        <img src="./Images/instagram.svg" className="w-6 h-6 filter invert transition-transform duration-300 ease-in-out transform hover:scale-110" alt="Instagram" />
                    </a>
                    <button
                        className="text-white text-lg font-bold py-1 px-4 rounded-md bg-transparent border-2 border-white hover:bg-white hover:text-[#1C1032] transition duration-300"
                        onClick={toggleLanguage}
                    >
                        {i18n.language === 'pt' ? 'EN' : 'PT'}
                    </button>
                </div>

                {/* Hamburger Menu Button (Mobile view) */}
                <div className="md:hidden flex items-center" onClick={() => setMenuOpen(!menuOpen)}>
                    <button className="text-white">
                        <span className="text-2xl">☰</span>
                    </button>
                </div>

                {/* Language Toggle Button (Mobile) */}
                <div className="md:hidden flex items-center">
                    <button
                        className="text-white text-lg font-bold py-1 px-4 rounded-md bg-transparent border-2 border-white hover:bg-white hover:text-[#1C1032] transition duration-300"
                        onClick={toggleLanguage}
                    >
                        {i18n.language === 'pt' ? 'EN' : 'PT'}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="flex flex-col items-center space-y-6 mt-4 md:hidden transition-all duration-500 ease-in-out transform bg-[#1C1032] p-4 rounded-lg">
                    <div className="nav-link text-white font-bold cursor-pointer font-mono">
                        {t('HOME')}
                    </div>
                    <div className="nav-link text-white font-bold cursor-pointer font-mono">
                        {t('EXPERIENCES')}
                    </div>
                    <div className="nav-link text-white font-bold cursor-pointer font-mono">
                        {t('PROJECTS')}
                    </div>
                    <div className="nav-link text-white font-bold cursor-pointer font-mono">
                        {t('CONTACT')}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Nav;

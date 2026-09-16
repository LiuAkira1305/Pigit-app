import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setIsOpen(false);
    };

    const currentLang = i18n.language;
    const isVi = currentLang === 'vi';

    return (
        <div className="absolute top-4 left-4 z-50 font-baloo">
            <div className="relative">
                <button
                    type="button"
                    onClick={toggleDropdown}
                    className="flex items-center gap-2 bg-white/80 backdrop-blur-md border border-gray-300 shadow-sm rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-white transition-all"
                >
                    <span className="text-gray-500 font-normal">{t('lang_label')}:</span>
                    <img 
                        src={isVi ? "https://flagcdn.com/w20/vn.png" : "https://flagcdn.com/w20/us.png"} 
                        alt={isVi ? "VN Flag" : "US Flag"} 
                        className="w-5 h-auto object-contain shadow-sm"
                    />
                    <span>{isVi ? 'Tiếng Việt' : 'English'}</span>
                    <svg className={`w-4 h-4 ml-1 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>

                {isOpen && (
                    <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
                        <button
                            type="button"
                            onClick={() => changeLanguage('vi')}
                            className={`w-full flex items-center gap-2 px-4 py-3 text-sm text-left hover:bg-gray-50 transition-colors ${isVi ? 'bg-gray-50 font-semibold' : 'text-gray-700'}`}
                        >
                            <img src="https://flagcdn.com/w20/vn.png" alt="VN Flag" className="w-5 h-auto object-contain shadow-sm" /> Tiếng Việt
                        </button>
                        <button
                            type="button"
                            onClick={() => changeLanguage('en')}
                            className={`w-full flex items-center gap-2 px-4 py-3 text-sm text-left hover:bg-gray-50 transition-colors ${!isVi ? 'bg-gray-50 font-semibold' : 'text-gray-700'}`}
                        >
                            <img src="https://flagcdn.com/w20/us.png" alt="US Flag" className="w-5 h-auto object-contain shadow-sm" /> English
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LanguageSwitcher;

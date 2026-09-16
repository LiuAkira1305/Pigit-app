import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../components/LanguageSwitcher';

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { t } = useTranslation();

    return (
        <div className="min-h-screen w-full flex flex-col lg:flex-row bg-white font-['Poppins'] relative">
            <LanguageSwitcher />
            
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-8 lg:p-12 relative min-h-[40vh] lg:min-h-screen">
                <img
                    className="w-full max-w-xl object-contain mb-8 z-10"
                    src="/Pigit_full.png"
                    alt="Illustration main"
                />
            </div>

            <div className="w-full lg:w-1/2 bg-[#0F6447] lg:rounded-l-[150px] flex items-center justify-center p-6 lg:p-12">
                <div className="w-full max-w-lg bg-white shadow-2xl rounded-[40px] lg:rounded-[50px] p-8 lg:p-12 flex flex-col gap-8 relative z-20">
                    <div className="text-center flex flex-col gap-2">
                        <h1 className="text-4xl lg:text-[55px] font-semibold text-black leading-tight">{t('login_title')}</h1>
                        <p className="text-lg lg:text-xl font-medium text-black">{t('login_subtitle')}</p>
                    </div>

                    <form className="flex flex-col gap-6 w-full">
                        <div className="flex flex-col gap-2">
                            <label className="text-lg lg:text-xl font-medium text-black">{t('email_label')}</label>
                            <input
                                type="email"
                                placeholder={t('email_placeholder')}
                                className="w-full h-[50px] rounded-xl lg:rounded-[20px] border border-[#666666] px-4 text-base lg:text-lg text-gray-700 outline-none focus:border-[#0F6447] focus:ring-1 focus:ring-[#0F6447] transition-all"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-lg lg:text-xl font-medium text-black">{t('password_label')}</label>
                            <div className="relative w-full">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder={t('password_placeholder')}
                                    className="w-full h-[50px] rounded-xl lg:rounded-[20px] border border-[#666666] px-4 pr-12 text-base lg:text-lg text-gray-700 outline-none focus:border-[#0F6447] focus:ring-1 focus:ring-[#0F6447] transition-all"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                                >
                                    {showPassword ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-between items-center text-sm lg:text-base font-medium gap-4 sm:gap-0 mt-2">
                            <div className="text-[#8D8D8D]">
                                {t('no_account')} <Link to="/register" className="text-[#0E6347] hover:underline cursor-pointer">{t('sign_up_link')}</Link>
                            </div>
                            <a href="#" className="text-[#0E6347] hover:underline cursor-pointer">{t('forgot_password')}</a>
                        </div>

                        <button
                            type="button"
                            className="w-full h-[50px] bg-[#589B3D] hover:bg-[#4d8635] text-white rounded-[20px] text-lg lg:text-xl font-medium shadow-lg transition-colors mt-2"
                        >
                            {t('login_btn')}
                        </button>
                    </form>

                    <div className="flex items-center justify-center gap-4">
                        <div className="h-px bg-gray-200 flex-1"></div>
                        <span className="text-[#8D8D8D] font-medium text-lg lg:text-xl">{t('or')}</span>
                        <div className="h-px bg-gray-200 flex-1"></div>
                    </div>

                    <button
                        type="button"
                        className="w-full h-[60px] bg-[#D8E8DD] hover:bg-[#c4d9cb] text-[#0F6347] rounded-[20px] text-lg lg:text-xl font-normal flex items-center justify-center gap-2 transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#0F6347] relative -top-[2.1px]">
                            <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.735c0 5.906 3.327 10.984 8.165 13.98a.75.75 0 0 0 .78 0c4.838-2.996 8.165-8.074 8.165-13.98a12.74 12.74 0 0 0-.635-3.97.75.75 0 0 0-.722-.515 11.209 11.209 0 0 1-7.877-3.08Z" clipRule="evenodd" />
                        </svg>
                        <span>{t('sso_btn')}</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
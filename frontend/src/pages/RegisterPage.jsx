import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../components/LanguageSwitcher';

const RegisterPage = () => {
    const { t } = useTranslation();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
    };

    const validate = () => {
        const newErrors = {};
        const nameRegex = /^[A-Za-zÀ-ỹ\s]+$/;
        
        if (!formData.firstName) {
            newErrors.firstName = t('val_req_firstname');
        } else if (!nameRegex.test(formData.firstName)) {
            newErrors.firstName = t('val_let_firstname');
        }

        if (!formData.lastName) {
            newErrors.lastName = t('val_req_lastname');
        } else if (!nameRegex.test(formData.lastName)) {
            newErrors.lastName = t('val_let_lastname');
        }

        if (!formData.userName) {
            newErrors.userName = t('val_req_username');
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email) {
            newErrors.email = t('val_req_email');
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = t('val_fmt_email');
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        if (!formData.password) {
            newErrors.password = t('val_req_password');
        } else if (!passwordRegex.test(formData.password)) {
            newErrors.password = t('val_fmt_password');
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = t('val_req_confirm');
        } else if (formData.confirmPassword !== formData.password) {
            newErrors.confirmPassword = t('val_fmt_confirm');
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            console.log("Form is valid! Data submitted:", formData);
            alert(t('alert_success'));
        }
    };

    return (
        <div className="min-h-screen w-full flex flex-col lg:flex-row bg-white font-['Montserrat'] relative">
            <LanguageSwitcher />

            {/* Nửa bên trái: Khu vực hình ảnh minh họa */}
            <div className="hidden lg:flex w-full lg:w-1/2 flex-col items-center justify-center p-8 lg:p-12 relative min-h-screen">
                <img
                    className="w-full max-w-xl object-contain mb-8 z-10"
                    src="/Pigit_full.png"
                    alt="Illustration main"
                />
            </div>

            {/* Nửa bên phải: Khu vực Form đăng ký */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-4 lg:p-0 min-h-screen lg:min-h-0">
                <div className="w-full h-full min-h-[calc(100vh-2rem)] lg:min-h-screen bg-[#0F6447] rounded-[40px] lg:rounded-none lg:rounded-l-[150px] flex items-center justify-center p-6 lg:p-12">

                {/* Khung (Card) màu trắng chứa Form */}
                <div className="w-full max-w-lg bg-white shadow-2xl rounded-[30px] lg:rounded-[50px] p-6 sm:p-8 lg:p-12 flex flex-col gap-6 relative z-20">

                    {/* Tiêu đề */}
                    <div className="text-center flex flex-col gap-1 lg:gap-2">
                        <p className="text-sm sm:text-base lg:text-xl font-bold text-black">{t('register_subtitle')}</p>
                        <h1 className="text-4xl lg:text-[50px] font-bold text-black leading-tight">{t('register_title')}</h1>
                    </div>

                    <form className="flex flex-col gap-5 w-full" onSubmit={handleSubmit}>

                        {/* Input First Name & Last Name */}
                        <div className="flex flex-col sm:flex-row gap-5">
                            <div className="flex flex-col gap-1 flex-1">
                                <label className="text-sm sm:text-base lg:text-xl font-bold text-black">{t('first_name_label')}</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder={t('first_name_placeholder')}
                                    className={`w-full h-[50px] rounded-xl lg:rounded-[20px] border ${errors.firstName ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-[#666666] focus:border-[#0F6447] focus:ring-[#0F6447]'} px-4 text-base text-gray-700 outline-none focus:ring-1 transition-all`}
                                />
                                {errors.firstName && <span className="text-red-500 text-sm mt-1">{errors.firstName}</span>}
                            </div>
                            <div className="flex flex-col gap-1 flex-1">
                                <label className="text-sm sm:text-base lg:text-xl font-bold text-black">{t('last_name_label')}</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder={t('last_name_placeholder')}
                                    className={`w-full h-[50px] rounded-xl lg:rounded-[20px] border ${errors.lastName ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-[#666666] focus:border-[#0F6447] focus:ring-[#0F6447]'} px-4 text-base text-gray-700 outline-none focus:ring-1 transition-all`}
                                />
                                {errors.lastName && <span className="text-red-500 text-sm mt-1">{errors.lastName}</span>}
                            </div>
                        </div>

                        {/* Input User Name */}
                        <div className="flex flex-col gap-1">
                            <label className="text-sm sm:text-base lg:text-xl font-bold text-black">{t('user_name_label')}</label>
                            <input
                                type="text"
                                name="userName"
                                value={formData.userName}
                                onChange={handleChange}
                                placeholder={t('user_name_placeholder')}
                                className={`w-full h-[50px] rounded-xl lg:rounded-[20px] border ${errors.userName ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-[#666666] focus:border-[#0F6447] focus:ring-[#0F6447]'} px-4 text-base text-gray-700 outline-none focus:ring-1 transition-all`}
                            />
                            {errors.userName && <span className="text-red-500 text-sm mt-1">{errors.userName}</span>}
                        </div>

                        {/* Input Email */}
                        <div className="flex flex-col gap-1">
                            <label className="text-sm sm:text-base lg:text-xl font-bold text-black">{t('email_label')}</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder={t('email_placeholder')}
                                className={`w-full h-[50px] rounded-xl lg:rounded-[20px] border ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-[#666666] focus:border-[#0F6447] focus:ring-[#0F6447]'} px-4 text-base text-gray-700 outline-none focus:ring-1 transition-all`}
                            />
                            {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email}</span>}
                        </div>

                        {/* Input Password */}
                        <div className="flex flex-col gap-1">
                            <label className="text-sm sm:text-base lg:text-xl font-bold text-black">{t('password_label')}</label>
                            <div className="relative w-full">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder={t('password_placeholder')}
                                    className={`w-full h-[50px] rounded-xl lg:rounded-[20px] border ${errors.password ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-[#666666] focus:border-[#0F6447] focus:ring-[#0F6447]'} px-4 pr-12 text-base text-gray-700 outline-none focus:ring-1 transition-all`}
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
                            {errors.password && <span className="text-red-500 text-sm mt-1">{errors.password}</span>}
                        </div>

                        {/* Input Confirm Password */}
                        <div className="flex flex-col gap-1">
                            <label className="text-sm sm:text-base lg:text-xl font-bold text-black">{t('confirm_password_label')}</label>
                            <div className="relative w-full">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    placeholder={t('confirm_password_placeholder')}
                                    className={`w-full h-[50px] rounded-xl lg:rounded-[20px] border ${errors.confirmPassword ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-[#666666] focus:border-[#0F6447] focus:ring-[#0F6447]'} px-4 pr-12 text-base text-gray-700 outline-none focus:ring-1 transition-all`}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                                >
                                    {showConfirmPassword ? (
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
                            {errors.confirmPassword && <span className="text-red-500 text-sm mt-1">{errors.confirmPassword}</span>}
                        </div>

                        {/* Đã có tài khoản? */}
                        <div className="flex justify-center text-xs sm:text-sm lg:text-base font-medium mt-1">
                            <div className="text-[#8D8D8D]">
                                {t('already_have_account')} <Link to="/login" className="text-[#0E6347] font-bold hover:underline cursor-pointer">{t('log_in_link')}</Link>
                            </div>
                        </div>

                        {/* Nút Sign up */}
                        <button
                            type="submit"
                            className="w-full h-[50px] bg-[#589B3D] hover:bg-[#4d8635] text-white rounded-[20px] text-lg font-medium shadow-lg transition-colors mt-2"
                        >
                            {t('sign_up_btn')}
                        </button>
                    </form>

                    {/* Dòng chữ OR */}
                    <div className="flex items-center justify-center gap-4">
                        <div className="h-px bg-gray-200 flex-1"></div>
                        <span className="text-[#8D8D8D] font-medium text-base">{t('or')}</span>
                        <div className="h-px bg-gray-200 flex-1"></div>
                    </div>

                    {/* Nút Social Login (Google & Facebook) */}
                    <div className="flex flex-col sm:flex-row gap-4 w-full">
                        {/* Nút Google */}
                        <button
                            type="button"
                            className="flex-1 h-[50px] lg:h-[60px] bg-white border border-gray-300 hover:bg-gray-50 rounded-[20px] flex items-center justify-center gap-2 transition-colors shadow-sm"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-5 h-5">
                                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                            </svg>
                            <span className="text-gray-700 font-bold text-sm sm:text-base lg:text-lg">{t('google_btn')}</span>
                        </button>

                        {/* Nút Facebook */}
                        <button
                            type="button"
                            className="flex-1 h-[50px] lg:h-[60px] bg-[#1877F2] hover:bg-[#166fe5] rounded-[20px] flex items-center justify-center gap-2 transition-colors shadow-sm"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                            <span className="text-white font-bold text-sm sm:text-base lg:text-lg">{t('facebook_btn')}</span>
                        </button>
                    </div>

                </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
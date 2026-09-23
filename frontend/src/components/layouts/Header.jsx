import React, { useEffect, useState } from 'react';
import { Bell, Search, User, Menu } from 'lucide-react';

const Header = () => {
    const [user, setUser] = useState({
        name: 'Guest',
        role: 'Khách',
        avatarText: '?',
        avatarBg: '#e5e7eb',
        avatarColor: '#6b7280'
    });

    useEffect(() => {
        const storedUser = localStorage.getItem('currentUser');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    return (
        <header className="h-16 bg-white shadow-sm flex items-center justify-between px-6 z-10">
            {/* Nút mở menu trên Mobile (sẽ code logic sau) & Thanh tìm kiếm */}
            <div className="flex items-center gap-4">
                <button className="md:hidden text-gray-500 hover:text-black">
                    <Menu size={24} />
                </button>
                <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2">
                    <Search size={18} className="text-gray-400" />
                    <input
                        type="text"
                        placeholder="Tìm kiếm..."
                        className="bg-transparent border-none outline-none ml-2 text-sm w-64"
                    />
                </div>
            </div>

            {/* Thông báo & Profile */}
            <div className="flex items-center gap-4">
                <button className="relative p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
                    <Bell size={20} />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
                <div className="flex items-center gap-3 border-l pl-4">
                    <div className="flex flex-col text-right hidden sm:flex">
                        <span className="text-sm font-semibold text-gray-800">{user.name}</span>
                        <span className="text-xs text-gray-500">{user.role}</span>
                    </div>
                    <div 
                        className="w-10 h-10 rounded-full flex items-center justify-center font-bold"
                        style={{ backgroundColor: user.avatarBg, color: user.avatarColor }}
                    >
                        {user.avatarText}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
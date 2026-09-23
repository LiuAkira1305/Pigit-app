import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Tractor, Warehouse, Truck, Users, LogOut } from 'lucide-react';

const Sidebar = () => {
    const location = useLocation();

    // Danh sách các menu dựa theo 4 Module nghiệp vụ
    const menuItems = [
        { name: 'Tổng quan', path: '/admin', icon: <LayoutDashboard size={20} /> },
        { name: 'Kinh doanh & Kho', path: '/admin/commerce', icon: <Warehouse size={20} /> },
        { name: 'Trang trại', path: '/admin/farm', icon: <Tractor size={20} /> },
        { name: 'Vận chuyển', path: '/admin/delivery', icon: <Truck size={20} /> },
        { name: 'Nhân sự', path: '/admin/hr', icon: <Users size={20} /> },
    ];

    return (
        <aside className="w-64 bg-[#0F6447] text-white flex flex-col hidden md:flex h-full font-['Quicksand']">
            {/* Logo */}
            <div className="h-16 flex items-center justify-center border-b border-white/20">
                <Link to="/admin">
                    <img src="/Pigit_text_white.png" alt="Pigit Logo" className="h-8 object-contain hover:opacity-80 transition-opacity" />
                </Link>
            </div>

            {/* Menu Navigation */}
            <nav className="flex-1 py-6 px-4 flex flex-col gap-2">
                {menuItems.map((item) => (
                    <Link
                        key={item.name}
                        to={item.path}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${location.pathname === item.path
                            ? 'bg-white/20 font-semibold'
                            : 'hover:bg-white/10'
                            }`}
                    >
                        {item.icon}
                        <span>{item.name}</span>
                    </Link>
                ))}
            </nav>

            {/* Nút Đăng xuất */}
            <div className="p-4 border-t border-white/20">
                <Link to="/login" onClick={() => localStorage.removeItem('currentUser')} className="flex items-center justify-center gap-3 px-4 py-3 bg-white/10 hover:bg-red-500/20 text-red-300 border border-white/10 hover:border-red-500/30 rounded-2xl transition-all font-semibold shadow-sm">
                    <LogOut size={20} />
                    <span>Đăng xuất</span>
                </Link>
            </div>
        </aside>
    );
};

export default Sidebar;
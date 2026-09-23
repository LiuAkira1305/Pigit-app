/* Đây chỉ là Demo layout dành cho Admin (Có thể thay đổi sau) */

import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const AdminLayout = () => {
    return (
        <div className="flex h-screen bg-gray-50 overflow-hidden font-['Inter']">
            <Sidebar />
            <div className="flex-1 flex flex-col min-w-0">
                <Header />
                {/* Khu vực hiển thị nội dung từng trang (Dashboard, Farm, HR...) */}
                <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
/* Đây chỉ là Demo layout dành cho Admin (Có thể thay đổi sau) */

import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const AdminLayout = () => {
    return (
        <div className="flex h-screen bg-gray-100">
            {/* Thanh Menu bên trái - Luôn đứng im */}
            <Sidebar />

            {/* Khu vực bên phải */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Thanh Tiêu đề phía trên - Luôn đứng im */}
                <Header />

                {/* NỘI DUNG THAY ĐỔI: Chỗ này sẽ hiển thị trang Quản lý Heo hoặc Kho hàng... */}
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
                    <Outlet /> {/* Component Outlet làm nhiệm vụ "hứng" nội dung của từng trang */}
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
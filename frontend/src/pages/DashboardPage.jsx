import React from 'react';

const DashboardPage = () => {
    return (
        <div className="flex flex-col gap-6">
            <h1 className="text-2xl font-bold text-gray-800">Tổng quan hệ thống Pigit</h1>

            {/* Các thẻ thống kê mẫu */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="text-gray-500 text-sm font-medium">Tổng số heo hiện có</h3>
                    <p className="text-3xl font-bold text-[#0F6447] mt-2">1,250 <span className="text-sm font-normal text-gray-400">con</span></p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="text-gray-500 text-sm font-medium">Tồn kho cám</h3>
                    <p className="text-3xl font-bold text-orange-500 mt-2">5,400 <span className="text-sm font-normal text-gray-400">kg</span></p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="text-gray-500 text-sm font-medium">Đơn hàng chờ giao</h3>
                    <p className="text-3xl font-bold text-blue-600 mt-2">12 <span className="text-sm font-normal text-gray-400">đơn</span></p>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
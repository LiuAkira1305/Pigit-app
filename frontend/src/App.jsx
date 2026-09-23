import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Import Pages
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';

// Import Layouts
import AdminLayout from './components/layouts/AdminLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Các tuyến đường không cần Layout (Public Routes) */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Các tuyến đường cần Layout Quản trị (Protected Routes) */}
        <Route path="/admin" element={<AdminLayout />}>
          {/* Outlet sẽ render DashboardPage khi URL là /admin */}
          <Route index element={<DashboardPage />} />

          {/* Các trang sẽ làm sau: */}
          {/* <Route path="farm" element={<FarmPage />} /> */}
          {/* <Route path="commerce" element={<CommercePage />} /> */}
        </Route>

        {/* Chuyển hướng mặc định về Login nếu vào đường dẫn không tồn tại */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
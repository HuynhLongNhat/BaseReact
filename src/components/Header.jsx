import React from 'react'
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
  return (
   <nav className="w-full px-8 py-4 flex justify-between items-center shadow-md bg-white sticky top-0 z-50">
        <h1 className="text-xl font-bold text-blue-600">MyWebsite</h1>
        <ul className="flex gap-6 text-gray-700 font-medium">
          <li className="hover:text-blue-600 transition">Trang chủ</li>
          <li className="hover:text-blue-600 transition">Giới thiệu</li>
         <li className="hover:text-blue-600 transition">Liên hệ</li>
         <li className="hover:text-blue-600 transition" onClick={() => navigate("/login")}>Đăng nhập</li>
        </ul>
      </nav>
  )
}

export default Header
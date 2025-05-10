import { Rocket, ShieldCheck, LayoutDashboard } from "lucide-react";
import Header from "./Header";

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      {/* Navbar */}
     <Header />

      {/* Hero Section */}
      <section className="text-center px-6 md:px-20 py-20 bg-gradient-to-r from-blue-100 via-white to-purple-100">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight mb-6">
          Thiết kế web hiện đại bằng <span className="text-blue-600">React</span> & <span className="text-purple-600">Tailwind</span>
        </h2>
        <p className="text-gray-600 text-lg max-w-xl mx-auto mb-8">
          Trang chủ được xây dựng với bố cục tinh gọn, dễ mở rộng và sẵn sàng cho mọi thiết bị.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition">
          Bắt đầu ngay
        </button>
      </section>

      {/* Features */}
      <section className="py-20 px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard
          icon={<LayoutDashboard className="w-10 h-10 text-blue-500" />}
          title="Bố cục tối ưu"
          description="Thiết kế tối giản, tập trung trải nghiệm người dùng và hiệu quả."
        />
        <FeatureCard
          icon={<Rocket className="w-10 h-10 text-red-500" />}
          title="Hiệu suất mạnh mẽ"
          description="Sử dụng React và Tailwind giúp tải nhanh và phản hồi mượt mà."
        />
        <FeatureCard
          icon={<ShieldCheck className="w-10 h-10 text-green-500" />}
          title="Bảo mật"
          description="Áp dụng tiêu chuẩn bảo mật cao để đảm bảo dữ liệu người dùng."
        />
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 border-t">
        © 2025 MyWebsite. All rights reserved.
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white shadow-lg hover:shadow-xl transition rounded-xl p-6 text-center border border-gray-100">
      <div className="mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

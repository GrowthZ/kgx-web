import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../src/components/SEO';

const NotFoundPage: React.FC = () => {
    useEffect(() => {
        // Cuộn lên đầu trang khi component mount
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] bg-background-light text-center px-4">
            <SEO
                title="404 - Không tìm thấy trang | KGX"
                description="Trang bạn đang tìm kiếm không tồn tại hoặc đã bị xóa khỏi hệ thống Không Gian Xanh."
            />
            {/* Sử dụng thẻ meta báo crawler không đánh chỉ mục trang 404 này qua Helmet ở component SEO */}

            <h1 className="text-8xl md:text-9xl font-black text-primary mb-4 tracking-tighter drop-shadow-sm">404</h1>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 font-display">Trang không tồn tại hoặc đã bị xóa</h2>

            <p className="text-gray-600 mb-10 max-w-md mx-auto text-lg leading-relaxed">
                Rất xin lỗi, nội dung bạn tìm kiếm đã được gỡ bỏ, đổi tên hoặc không bao giờ tồn tại trên hệ thống của Không Gian Xanh.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/" className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition shadow-lg shadow-primary/30 flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined">home</span>
                    Về Trang Chủ
                </Link>
                <Link to="/dich-vu" className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 font-bold rounded-xl hover:border-primary hover:text-primary transition flex items-center justify-center gap-2 shadow-sm">
                    Xem Dịch Vụ
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;

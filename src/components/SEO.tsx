import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description?: string;
    image?: string;
    url?: string;
    type?: string;
}

const SEO: React.FC<SEOProps> = ({
    title,
    description = "Kiến Tạo Không Gian Xanh - Chuyên thiết kế và thi công cảnh quan, cảnh quan sân vườn, hồ cá Koi, kiến trúc xanh chuyên nghiệp.",
    image = "https://kgxvn.vn/src/media/logo.png",
    url = "https://kgxvn.vn",
    type = "website"
}) => {
    // Ensure title always has branding if not already present
    const siteTitle = title.includes("KGX") ? title : `${title} | KGX - Không Gian Xanh`;

    return (
        <Helmet>
            {/* Standard Meta Tags */}
            <title>{siteTitle}</title>
            <meta name="description" content={description} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={siteTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />
        </Helmet>
    );
};

export default SEO;

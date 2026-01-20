import React, { useState } from 'react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    fallbackSrc?: string;
    isBackground?: boolean;
    children?: React.ReactNode;
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
    src,
    alt,
    className,
    fallbackSrc = 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=2070&auto=format&fit=crop', // Generic high-quality landscape
    isBackground = false,
    children,
    ...props
}) => {
    const [imgSrc, setImgSrc] = useState(src);
    const [error, setError] = useState(false);

    const handleError = () => {
        if (!error) {
            setImgSrc(fallbackSrc);
            setError(true);
        }
    };

    if (isBackground) {
        return (
            <div
                className={className}
                style={{
                    backgroundImage: `url('${imgSrc || fallbackSrc}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
                {...props as any}
            >
                {children}
            </div>
        );
    }

    return (
        <img
            src={imgSrc || fallbackSrc}
            alt={alt}
            className={className}
            onError={handleError}
            {...props}
        />
    );
};

export default ImageWithFallback;

import React, { useState } from 'react';
import logoKgx from '../src/media/logo-kgx.png';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    fallbackSrc?: string;
    isBackground?: boolean;
    children?: React.ReactNode;
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
    src,
    alt,
    className,
    fallbackSrc = logoKgx,
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

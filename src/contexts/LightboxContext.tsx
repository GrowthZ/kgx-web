import { createContext, useContext, useState, ReactNode, FC } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface LightboxContextType {
    openLightbox: (images: string[], index?: number) => void;
    closeLightbox: () => void;
}

const LightboxContext = createContext<LightboxContextType | undefined>(undefined);

export const LightboxProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [images, setImages] = useState<string[]>([]);
    const [index, setIndex] = useState(0);

    const openLightbox = (newImages: string[], newIndex: number = 0) => {
        setImages(newImages);
        setIndex(newIndex);
        setIsOpen(true);
    };

    const closeLightbox = () => {
        setIsOpen(false);
    };

    return (
        <LightboxContext.Provider value={{ openLightbox, closeLightbox }}>
            {children}
            <Lightbox
                open={isOpen}
                close={closeLightbox}
                index={index}
                slides={images.map(img => ({ src: img }))}
            />
        </LightboxContext.Provider>
    );
};

export const useLightbox = () => {
    const context = useContext(LightboxContext);
    if (context === undefined) {
        throw new Error('useLightbox must be used within a LightboxProvider');
    }
    return context;
};

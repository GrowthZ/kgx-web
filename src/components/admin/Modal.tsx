import React from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    maxWidth?: string;
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    children,
    maxWidth = 'max-w-6xl'
}) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-md animate-fadeIn">
            <div
                className={`bg-white rounded-[2rem] shadow-2xl w-full ${maxWidth} max-h-[90vh] overflow-hidden border border-slate-200 animate-in fade-in zoom-in duration-300 flex flex-col`}
            >
                {children}
            </div>
            {/* Backdrop click to close */}
            <div
                className="absolute inset-0 -z-10"
                onClick={onClose}
            ></div>
        </div>
    );
};

export default Modal;

import React from 'react';

interface ConfirmDialogProps {
    isOpen: boolean;
    title: string;
    message: string;
    confirmText?: string;
    cancelText?: string;
    onConfirm: () => void;
    onCancel: () => void;
    type?: 'danger' | 'warning' | 'info';
}

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
    isOpen,
    title,
    message,
    confirmText = 'Xác nhận',
    cancelText = 'Hủy',
    onConfirm,
    onCancel,
    type = 'danger',
}) => {
    if (!isOpen) return null;

    const colorClasses = {
        danger: 'bg-rose-600 hover:brightness-110 shadow-rose-200',
        warning: 'bg-admin-secondary hover:brightness-110 shadow-orange-200',
        info: 'bg-admin-primary hover:brightness-110 shadow-admin-primary/20',
    };

    const iconClasses = {
        danger: 'text-rose-600 bg-rose-50',
        warning: 'text-admin-secondary bg-orange-50',
        info: 'text-admin-primary bg-admin-primary/10',
    };

    const icons = {
        danger: 'error',
        warning: 'warning',
        info: 'info',
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/40 backdrop-blur-sm animate-fadeIn">
            <div className="bg-white rounded-3xl shadow-2xl shadow-slate-900/20 max-w-sm w-full p-8 border border-slate-100 scale-100 animate-in fade-in zoom-in duration-300">
                <div className="flex flex-col items-center text-center">
                    <div className={`size-16 rounded-2xl ${iconClasses[type]} flex items-center justify-center mb-6`}>
                        <span className="material-symbols-outlined text-2xl">
                            {icons[type]}
                        </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{message}</p>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-10">
                    <button
                        onClick={onCancel}
                        className="px-6 py-3.5 border border-slate-200 text-slate-600 rounded-2xl hover:bg-slate-50 transition-all font-bold text-sm"
                    >
                        {cancelText}
                    </button>
                    <button
                        onClick={onConfirm}
                        className={`px-6 py-3.5 text-white rounded-2xl transition-all font-bold text-sm shadow-lg ${colorClasses[type]}`}
                    >
                        {confirmText}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmDialog;

import { FC } from 'react';
import zaloIcon from '../src/media/zalo.png';
import messengerIcon from '../src/media/messenger.png';

const FloatingCTA: FC = () => {
    return (
        <>
            {/* Left Side: Phone Call Pulse */}
            <a
                href="tel:0868462462"
                className="fixed bottom-6 left-6 z-50 flex items-center justify-center size-14 bg-rose-500 text-white rounded-full shadow-lg shadow-rose-500/30 hover:bg-rose-600 transition-colors group"
                aria-label="Gọi hotline"
            >
                {/* Pulse Ripples */}
                <span className="absolute inset-0 rounded-full bg-rose-500 opacity-75 animate-ping" style={{ animationDuration: '2s' }}></span>
                <span className="absolute inset-[-8px] rounded-full border-2 border-rose-500 opacity-30 animate-pulse" style={{ animationDuration: '2.5s' }}></span>

                {/* Main Icon */}
                <div className="relative z-10 flex items-center justify-center p-3.5 bg-rose-500 rounded-full group-hover:bg-rose-600 transition-colors">
                    <span className="material-symbols-outlined text-3xl animate-[wiggle_1s_ease-in-out_infinite]">call</span>
                </div>

                {/* Tooltip */}
                <div className="absolute left-full ml-4 whitespace-nowrap bg-white text-slate-700 px-4 py-2 rounded-xl text-sm font-bold shadow-xl border border-slate-100 opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0 pointer-events-none">
                    Gọi 0868 462 462
                    {/* Tooltip Arrow */}
                    <div className="absolute top-1/2 -left-1.5 w-3 h-3 bg-white border-l border-b border-slate-100 transform -translate-y-1/2 rotate-45"></div>
                </div>
            </a>

            {/* Right Side: Social Icons Container */}
            <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">

                {/* Zalo Button */}
                <a
                    href="https://zalo.me/0868462462"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex items-center justify-center size-14 rounded-full shadow-lg shadow-[#0068FF]/30 transition-all hover:scale-110 group overflow-hidden"
                    aria-label="Chat Zalo"
                >
                    <img src={zaloIcon} alt="Zalo" className="w-full h-full object-cover" />

                    {/* Tooltip */}
                    <div className="absolute right-full mr-4 whitespace-nowrap bg-white text-slate-700 px-4 py-2 rounded-xl text-sm font-bold shadow-xl border border-slate-100 opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0 pointer-events-none">
                        Chat Zalo
                        {/* Tooltip Arrow */}
                        <div className="absolute top-1/2 -right-1.5 w-3 h-3 bg-white border-r border-t border-slate-100 transform -translate-y-1/2 rotate-45"></div>
                    </div>
                </a>

                {/* Facebook Messenger Button */}
                <a
                    href="https://m.me/khonggianxanhthainguyen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex items-center justify-center size-14 rounded-full shadow-lg shadow-[#00A3FF]/30 transition-all hover:scale-110 group overflow-hidden"
                    aria-label="Chat Messenger"
                >
                    <img src={messengerIcon} alt="Messenger" className="w-full h-full object-cover" />

                    {/* Tooltip */}
                    <div className="absolute right-full mr-4 whitespace-nowrap bg-white text-slate-700 px-4 py-2 rounded-xl text-sm font-bold shadow-xl border border-slate-100 opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0 pointer-events-none">
                        Nhắn tin Facebook
                        {/* Tooltip Arrow */}
                        <div className="absolute top-1/2 -right-1.5 w-3 h-3 bg-white border-r border-t border-slate-100 transform -translate-y-1/2 rotate-45"></div>
                    </div>
                </a>

            </div>
        </>
    );
};

export default FloatingCTA;

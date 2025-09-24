import React from 'react';

const TelegramIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M24 12c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12 12-5.373 12-12zm-18.435-1.621l4.558 1.666 1.12 4.673c.123.513.738.653.979.195l1.979-3.719 3.939 2.911c.543.402 1.332.029 1.304-.632l1.98-9.423c.022-.924-.763-1.425-1.46-1.096l-12.02 4.496c-.842.315-.842 1.48.001 1.745z"/>
    </svg>
);

const YouTubeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
);

const WhatsAppIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 12c0 1.74.45 3.39 1.23 4.84l-1.28 4.68 4.8-1.26c1.41.72 2.99 1.14 4.66 1.14h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zM9.57 17.51c-1.47 0-2.85-.48-4-1.3l-.28-.17-2.97.78.8-2.91-.19-.29c-.89-1.35-1.43-2.99-1.43-4.73 0-4.36 3.54-7.9 7.9-7.9 2.13 0 4.1.84 5.59 2.32s2.32 3.45 2.32 5.59c0 4.36-3.54 7.9-7.9 7.9h-.01zm4.86-5.43c-.27-.13-1.58-.78-1.82-.87-.25-.09-.43-.13-.61.13-.18.27-.69.87-.84 1.04-.16.18-.31.2-.58.06-.27-.13-1.14-.42-2.16-1.33-.8-.72-1.34-1.61-1.5-1.88s-.16-.42 0-.55c.14-.14.31-.36.47-.54.16-.18.21-.31.31-.51s.05-.38-.03-.51c-.08-.13-.61-1.47-.84-2-.23-.54-.46-.46-.61-.47h-.53c-.18 0-.46.08-.7.35-.23.27-.88.86-.88 2.1s.9 2.43 1.03 2.6c.13.18 1.77 2.7 4.29 3.78 2.52 1.08 2.52.72 2.97.69.46-.03 1.58-.64 1.8-1.28.23-.64.23-1.18.16-1.28l-.26-.13z"/>
    </svg>
);

const FacebookIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
    </svg>
);

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800/95 backdrop-blur-md border-t border-gray-700/50">
            <div className="container mx-auto px-6 py-6">
                <div className="flex flex-col sm:flex-row justify-between items-center">
                    <p className="text-gray-400 mb-4 sm:mb-0">
                        © 2024 أحمد رضا فيزياء. جميع الحقوق محفوظة.
                    </p>
                    <div className="flex items-center space-x-4 space-x-reverse">
                         <a 
                            href="https://wa.me/201095571577" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                            aria-label="WhatsApp"
                        >
                            <WhatsAppIcon />
                        </a>
                        <a 
                            href="https://t.me/ahmedredaphysics" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-gray-400 hover:text-sky-400 transition-colors duration-300"
                            aria-label="Telegram Group"
                        >
                            <TelegramIcon />
                        </a>
                        <a 
                            href="https://www.youtube.com/@ahmedreda27944" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-gray-400 hover:text-red-500 transition-colors duration-300"
                            aria-label="YouTube Channel"
                        >
                            <YouTubeIcon />
                        </a>
                        <a 
                            href="https://www.facebook.com/share/1715UT9h45/?mibextid=wwXIfr" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
                            aria-label="Facebook Group"
                        >
                            <FacebookIcon />
                        </a>
                    </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-700/50 text-center">
                    <p className="text-gray-500 text-sm">
                        للتواصل مع المطور (واتساب):
                        <a 
                            href="https://wa.me/201040495471" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-sky-400 hover:text-sky-300 transition-colors mx-1"
                            dir="ltr"
                        >
                             +20 104 049 5471
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

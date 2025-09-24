import React, { useState } from 'react';

const ShareIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12s-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.368a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
    </svg>
);

const CheckIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
);

const ShareButton: React.FC = () => {
    const [isCopied, setIsCopied] = useState(false);

    const handleShare = async () => {
        const shareUrl = 'https://aistudio.google.com/apps/drive/1GhuhE1NdnwSn5dHHro1NOmnmHP5U1bPd?resourceKey=&showAssistant=true&showPreview=true';
        const shareData = {
            title: 'أحمد رضا فيزياء',
            text: 'انضم إلى أفضل شرح لمادة الفيزياء مع الأستاذ أحمد رضا. الموقع الرسمي يحتوي على كل ما تحتاجه للتفوق!',
            url: shareUrl,
        };

        // Priority 1: Use Web Share API if available (best for mobile)
        if (navigator.share) {
            try {
                await navigator.share(shareData);
                return; // Exit if share is successful
            } catch (err) {
                // If user cancels, AbortError is thrown. We can ignore it.
                // For other errors, we fall through to the copy mechanism.
                if (err.name !== 'AbortError') {
                    console.warn("Web Share API failed, falling back to copy.", err);
                } else {
                    return; // User cancelled, so we stop.
                }
            }
        }
        
        let copied = false;
        
        // Priority 2: Use modern Clipboard API
        if (navigator.clipboard && navigator.clipboard.writeText) {
            try {
                await navigator.clipboard.writeText(shareUrl);
                copied = true;
            } catch (err) {
                console.warn('Clipboard API failed, trying legacy fallback.', err);
            }
        }
        
        // Priority 3: Use legacy execCommand as a fallback
        if (!copied) {
            const textArea = document.createElement('textarea');
            textArea.value = shareUrl;
            
            // Make the textarea invisible and prevent scroll jump
            textArea.style.position = 'fixed';
            textArea.style.top = '0';
            textArea.style.left = '0';
            textArea.style.width = '2em';
            textArea.style.height = '2em';
            textArea.style.padding = '0';
            textArea.style.border = 'none';
            textArea.style.outline = 'none';
            textArea.style.boxShadow = 'none';
            textArea.style.background = 'transparent';

            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();

            try {
                copied = document.execCommand('copy');
            } catch (err) {
                console.error('Legacy copy command failed.', err);
            }
            document.body.removeChild(textArea);
        }

        // Give user feedback
        if (copied) {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2500);
        } else {
            // Ultimate fallback if nothing works
            alert('لمشاركة الموقع، يرجى نسخ الرابط من شريط العنوان.');
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <button
                onClick={handleShare}
                className={`flex items-center justify-center gap-x-2 text-white font-bold rounded-full transition-all duration-300 ease-in-out shadow-lg transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 ${
                    isCopied 
                    ? 'bg-green-500 hover:bg-green-600 w-36 py-3 px-4'
                    : 'bg-sky-500 hover:bg-sky-600 p-4'
                }`}
                aria-live="polite"
                aria-label={isCopied ? "تم نسخ الرابط بنجاح" : "دعوة صديق أو مشاركة الرابط"}
            >
                {isCopied ? (
                    <>
                        <CheckIcon />
                        <span>تم النسخ!</span>
                    </>
                ) : (
                    <ShareIcon />
                )}
            </button>
        </div>
    );
};

export default ShareButton;
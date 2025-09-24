import React, { useState, useEffect, useRef } from 'react';

const CHECK_INTERVAL = 5 * 60 * 1000; // 5 minutes

const UpdateNotifier: React.FC = () => {
    const [isUpdateAvailable, setIsUpdateAvailable] = useState(false);
    const initialVersion = useRef<string | null>(null);

    useEffect(() => {
        const fetchVersion = async () => {
            try {
                // Add a cache-busting parameter to the request
                const response = await fetch('/version.json?t=' + new Date().getTime());
                if (!response.ok) return null;
                const data = await response.json();
                return data.version;
            } catch (error) {
                console.error('Failed to fetch version:', error);
                return null;
            }
        };

        // Fetch initial version
        fetchVersion().then(version => {
            if (version) {
                initialVersion.current = version;
            }
        });

        // Set up interval to check for updates
        const intervalId = setInterval(async () => {
            const latestVersion = await fetchVersion();
            if (initialVersion.current && latestVersion && latestVersion !== initialVersion.current) {
                setIsUpdateAvailable(true);
                clearInterval(intervalId); // Stop checking once an update is found
            }
        }, CHECK_INTERVAL);

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    const handleReload = () => {
        window.location.reload();
    };

    if (!isUpdateAvailable) {
        return null;
    }

    return (
        <div
            className="fixed bottom-0 left-0 right-0 bg-sky-500 text-white p-4 z-50 flex flex-col sm:flex-row justify-center items-center text-center gap-4 animate-slide-up"
            role="alert"
            aria-live="polite"
        >
            <p className="font-semibold">تتوفر نسخة جديدة من الموقع!</p>
            <button
                onClick={handleReload}
                className="bg-white text-sky-600 font-bold py-2 px-6 rounded-md hover:bg-gray-100 transition-colors duration-300 shadow-lg"
            >
                تحديث الآن
            </button>
        </div>
    );
};

export default UpdateNotifier;

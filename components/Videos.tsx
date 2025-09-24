import React from 'react';

const videos = [
    {
        id: 'euiTSY5wonU',
        title: 'شرح الدرس الرابع (تطبيقات الضغط - الأواني المستطرقة)',
    },
    {
        id: '7yqt-4Uv7HE',
        title: 'شرح الدرس الثالث (الضغط عند نقطة في باطن سائل)',
    }
];

const VideoCard: React.FC<{ video: typeof videos[0] }> = ({ video }) => (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300 ease-in-out flex flex-col">
        <div className="relative w-full" style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
            <iframe
                className="absolute top-0 left-0 w-full h-full rounded-t-lg"
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
            ></iframe>
        </div>
        <div className="p-4">
            <h3 className="font-semibold text-lg text-white" title={video.title}>{video.title}</h3>
        </div>
    </div>
);

const Videos: React.FC = () => {
    return (
        <section className="py-20 bg-gray-900/90 backdrop-blur-md">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-extrabold text-center mb-12 text-sky-400">شاهد محاضرتنا</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {videos.map(video => (
                        <VideoCard key={video.id} video={video} />
                    ))}
                </div>
                 <div className="text-center mt-12">
                    <a
                        href="https://www.youtube.com/@ahmedreda27944"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105 duration-300 ease-in-out shadow-lg"
                    >
                        المزيد على اليوتيوب
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Videos;
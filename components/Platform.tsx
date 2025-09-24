import React from 'react';

const Platform: React.FC = () => {
    return (
        <section className="py-20 bg-gray-800/90 backdrop-blur-md">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                    <div className="md:w-1/2">
                        <img 
                            src="https://scontent.fcai20-5.fna.fbcdn.net/v/t39.30808-6/538325233_766900425922465_2159321775475075613_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=HQNXpqVEJ1QQ7kNvwEIvhIs&_nc_oc=AdlrJ2hUyZ3cxtqDE8EVwp8psJv6-JLJjtt75fl85FfAWxBJYH3T9SHlk_fp4DAPXks&_nc_zt=23&_nc_ht=scontent.fcai20-5.fna&_nc_gid=M6kqKaka6vAwPaDjr20V4g&oh=00_Afa88pyOjOSnqjt8yupa4hnslsGg3UGQz-D5VcfOr0Rt2w&oe=68D90348" 
                            alt="منصة الأستاذ أحمد رضا" 
                            className="rounded-lg shadow-2xl w-full h-auto object-cover border-4 border-sky-500/50"
                        />
                    </div>
                    <div className="md:w-1/2 text-center md:text-right">
                        <h2 className="text-4xl font-extrabold mb-6 text-sky-400">منصتنا التعليمية</h2>
                        <p className="text-lg leading-relaxed text-gray-300 mb-8">
                            انضم إلى منصتنا التعليمية المتكاملة للحصول على تجربة فريدة. نقدم شروحات تفصيلية، واجبات إلكترونية، اختبارات دورية، ومتابعة مستمرة لضمان تحقيقك لأعلى مستويات التفوق في الفيزياء.
                        </p>
                        <a 
                            href="https://engahmedreda.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105 duration-300 ease-in-out shadow-lg"
                        >
                            اكتشف المنصة الآن
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Platform;
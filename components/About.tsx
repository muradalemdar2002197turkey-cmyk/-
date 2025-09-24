import React from 'react';

const About: React.FC = () => {
    return (
        <section className="py-20 bg-gray-800/90 backdrop-blur-md">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <img 
                            src="https://picsum.photos/seed/physics-teacher/800/600" 
                            alt="الأستاذ أحمد رضا" 
                            className="rounded-lg shadow-2xl w-full h-auto object-cover"
                        />
                    </div>
                    <div className="md:w-1/2 text-center md:text-right">
                        <h2 className="text-4xl font-extrabold mb-6 text-sky-400">عن الأستاذ أحمد رضا</h2>
                        <p className="text-lg leading-relaxed text-gray-300">
                           بخبرة تمتد لسنوات في تدريس الفيزياء، أؤمن بأن تبسيط المفاهيم المعقدة هو مفتاح التفوق. رسالتي هي إلهام الطلاب ومساعدتهم على فهم جمال الفيزياء وقوانينها، وتزويدهم بالأدوات اللازمة لتحقيق أعلى الدرجات. نسعى معًا لجعل رحلة تعلم الفيزياء ممتعة ومثمرة.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
import React from 'react';

const courseItems = [
    {
        name: 'شرح منهج الصف الأول الثانوي',
        description: 'تأسيس قوي في أساسيات الفيزياء للصف الأول الثانوي، مع التركيز على الفهم العميق والتطبيق العملي.',
        features: ['شرح مبسط وممتع', 'تجارب عملية افتراضية', 'متابعة دورية'],
        image: 'https://picsum.photos/seed/physics-1st-year/400/300'
    },
    {
        name: 'شرح منهج الصف الثاني الثانوي',
        description: 'شرح شامل ومفصل لمنهج فيزياء الصف الثاني الثانوي، يغطي الترمين الدراسيين بأحدث الطرق التعليمية.',
        features: ['حصص مباشرة تفاعلية', 'مذكرات رقمية', 'اختبارات أسبوعية'],
        image: 'https://picsum.photos/seed/physics-2nd-year/400/300'
    },
    {
        name: 'شرح منهج الصف الثالث الثانوي',
        description: 'إعداد شامل ومكثف لمنهج الشهادة الثانوية، يهدف إلى تأهيل الطلاب لتحقيق أعلى الدرجات.',
        features: ['حل امتحانات سابقة', 'مراجعات نهائية مركزة', 'استراتيجيات التفوق'],
        image: 'https://picsum.photos/seed/physics-3rd-year/400/300'
    },
];

const CourseCard: React.FC<{ item: typeof courseItems[0] }> = ({ item }) => (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
        <img className="w-full h-56 object-cover" src={item.image} alt={item.name} />
        <div className="p-6">
            <h3 className="font-bold text-2xl mb-2 text-white">{item.name}</h3>
            <p className="text-gray-400 text-base mb-4">{item.description}</p>
            <div className="flex flex-wrap gap-2">
                {item.features.map(feature => (
                     <span key={feature} className="bg-sky-500/20 text-sky-300 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">{feature}</span>
                ))}
            </div>
        </div>
    </div>
);


const Menu: React.FC = () => {
    return (
        <section className="py-20 bg-gray-900/90 backdrop-blur-md">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-extrabold text-center mb-12 text-sky-400">الدورات المتاحة</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {courseItems.map(item => (
                        <CourseCard key={item.name} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Menu;
import React from 'react';

const testimonials = [
    {
        quote: "والله يا هندسة انت افضل مهندس فيزياء في ابو كبير وكمان بتجعل الحصه مباركة بالصلاة على النبي.",
        name: "علي حجازي - طالب",
        avatar: "https://picsum.photos/seed/student4/100/100"
    },
    {
        quote: "من احسن مدرسين الفيزياء اللي ممكن تقابلهم في حياتك، شرحه جميل جدا وبيفهم كويس اوي وبيعيد اكتر من مره لو حد مش فاهم.",
        name: "فاطمة الزهراء - طالبة",
        avatar: "https://picsum.photos/seed/student2/100/100"
    },
    {
        quote: "بجد شرحه تحفه وبيوصل المعلومه بطريقه جميله جدا وبسيطه، ربنا يباركلك يا مستر ويجعله في ميزان حسناتك.",
        name: "يوسف أحمد - طالب",
        avatar: "https://picsum.photos/seed/student3/100/100"
    },
];

const TestimonialCard: React.FC<{ item: typeof testimonials[0] }> = ({ item }) => (
    <div className="bg-gray-800 p-8 rounded-xl shadow-lg flex flex-col items-center text-center">
        <img src={item.avatar} alt={item.name} className="w-20 h-20 rounded-full mb-4 border-4 border-sky-400" />
        <p className="text-gray-300 mb-4 italic">"{item.quote}"</p>
        <h4 className="font-bold text-lg text-white">{item.name}</h4>
    </div>
)

const Gallery: React.FC = () => {
    return (
        <section className="py-20 bg-gray-800/90 backdrop-blur-md">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-extrabold text-center mb-12 text-sky-400">ماذا قال طلابنا؟</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                   {testimonials.map((item, index) => (
                       <TestimonialCard key={index} item={item} />
                   ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
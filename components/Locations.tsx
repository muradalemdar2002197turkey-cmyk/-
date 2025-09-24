import React from 'react';

const locations = [
    {
        branch: 'الفرع الأول',
        address: 'منشية صالح - مركز أبو كبير - الشرقية',
    },
    {
        branch: 'الفرع الثاني',
        address: 'مركز صقر - الشرقية',
    }
];

const LocationIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-4 text-sky-400" viewBox="0 0 20 20" fill="currentColor" {...props}>
        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
    </svg>
);


const LocationCard: React.FC<{ item: typeof locations[0] }> = ({ item }) => (
    <div className="bg-gray-800 rounded-lg p-8 shadow-lg transform hover:-translate-y-2 transition-transform duration-300 ease-in-out flex flex-col items-center text-center">
        <LocationIcon />
        <h3 className="font-bold text-2xl mb-2 text-white">{item.branch}</h3>
        <p className="text-gray-400 text-lg">{item.address}</p>
    </div>
);

const Locations: React.FC = () => {
    return (
        <section className="py-20 bg-gray-900/90 backdrop-blur-md">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-extrabold text-center mb-12 text-sky-400">أماكن تواجدنا</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
                    {locations.map(item => (
                        <LocationCard key={item.branch} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Locations;
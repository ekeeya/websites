type AppLogo = {
    src: string;
    alt: string;
};

const apps: AppLogo[] = [
    { src: '/src/assets/01.png', alt: 'App 01' },
    { src: '/src/assets/02.png', alt: 'App 02' },
    { src: '/src/assets/03.png', alt: 'App 03' },
    { src: '/src/assets/04.png', alt: 'App 04' },
    { src: '/src/assets/05.png', alt: 'App 05' },
    { src: '/src/assets/06.png', alt: 'App 06' },
    { src: '/src/assets/07.png', alt: 'App 07' },
    { src: '/src/assets/08.png', alt: 'App 08' },
    { src: '/src/assets/09.png', alt: 'App 09' },
    { src: '/src/assets/10.png', alt: 'App 10' },
    { src: '/src/assets/11.png', alt: 'App 11' },
];

const ResourcesAndApps = () => {
    return (
        <section className="bg-[#ebeede] py-16">
            <div className="max-w-[1400px] mx-auto px-4">
                {/* Resources header */}
                <div>
                    <h3 className="text-4xl font-extrabold text-gray-900">Resources</h3>
                    <p className="mt-2 text-gray-700">Repository to host reference materials</p>
                </div>

                {/* Resources box */}
                <div className="mt-8 bg-white rounded-xl h-40 flex items-center justify-center shadow-sm">
                    <span className="text-xl tracking-wider text-gray-700">COMING SOON...</span>
                </div>

                {/* Apps header */}
                <div className="mt-14">
                    <h3 className="text-4xl font-extrabold"><span className="text-gray-900">Other </span><span className="text-green-700">Applications</span></h3>
                </div>

                {/* Apps grid */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {apps.map((app, index) => (
                        <div key={index} className="bg-white rounded-xl h-36 flex items-center justify-center shadow">
                            <img src={app.src} alt={app.alt} className="max-h-28 object-contain px-2" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ResourcesAndApps;



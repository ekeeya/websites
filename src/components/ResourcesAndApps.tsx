import img01 from "../assets/01.png";
import img02 from "../assets/02.png";
import img03 from "../assets/03.png";
import img04 from "../assets/04.png";
import img05 from "../assets/05.png";
import img06 from "../assets/06.png";
import img07 from "../assets/07.png";
import img08 from "../assets/08.png";
import img09 from "../assets/09.png";
import img10 from "../assets/10.png";
import img11 from "../assets/11.png";

type AppLogo = {
    src: string;
    alt: string;
};

const apps: AppLogo[] = [
    { src: img01, alt: 'App 01' },
    { src: img02, alt: 'App 02' },
    { src: img03, alt: 'App 03' },
    { src: img04, alt: 'App 04' },
    { src: img05, alt: 'App 05' },
    { src: img06, alt: 'App 06' },
    { src: img07, alt: 'App 07' },
    { src: img08, alt: 'App 08' },
    { src: img09, alt: 'App 09' },
    { src: img10, alt: 'App 10' },
    { src: img11, alt: 'App 11' },
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
                    <h3 className="text-4xl font-extrabold"><span className="text-[#3786A5]">Other </span><span className="text-[#53A537]">Applications</span></h3>
                </div>

                {/* Apps grid */}
                <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {apps.map((app, index) => (
                        <div key={index} className="bg-white rounded-xl h-36 flex items-center justify-center shadow">
                            <img src={app.src} alt={app.alt} className="max-h-28 object-contain px-2 bhashini-skip-translation" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ResourcesAndApps;



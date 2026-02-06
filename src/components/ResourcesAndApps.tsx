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
import img12 from "../assets/ministy_of_panchayati.png";
import img13 from "../assets/Bhashini_new.png";
import { FaPlayCircle, FaFilePdf } from "react-icons/fa";
import { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";

import launchVideo from "../assets/2026-01-24-PANCHAYAT-MPOR-FINAL-APPROVED.mp4";
import onBoardingVideo from "../assets/onBoardingVideo.mp4";
import advisoryPdf from "../assets/Download Advisory.pdf";

type ResourceItem = {
    title: string;
    type: 'video' | 'document';
    /** Video/document URL. Use null for placeholder until the file is in assets; then import and set src. */
    src: string | null;
    icon: React.ElementType;
    colorClass: string;
};

type AppLogo = {
    src: string;
    alt: string;
    link: string;
};

const resources: ResourceItem[] = [
    {
        title: "Launch video of PANCHAM",
        type: 'video',
        src: launchVideo,
        icon: FaPlayCircle,
        colorClass: "text-red-600"
    },
    {
        title: "Onboarding video for ERs, PFs and Citizens",
        type: 'video',
        src: onBoardingVideo,
        icon: FaPlayCircle,
        colorClass: "text-red-600"
    },
    {
        title: "Advisory",
        type: 'document',
        src: advisoryPdf,
        icon: FaFilePdf,
        colorClass: "text-red-600"
    }
];

const apps: AppLogo[] = [
    { src: img01, alt: 'App 01', link:'https://gbdp.nic.in/' },
    { src: img02, alt: 'App 02', link:'https://egramswaraj.gov.in/' },
    { src: img03, alt: 'App 03', link:'https://svamitva.nic.in/' },
    { src: img04, alt: 'App 04', link:'https://auditonline.gov.in/' },
    { src: img05, alt: 'App 05', link:'https://panchayatcharter.nic.in/' },
    { src: img06, alt: 'App 06', link:'https://egramswaraj.gov.in/urjaDashboard.do' },
    { src: img07, alt: 'App 07', link:'https://lgdirectory.gov.in/' },
    { src: img08, alt: 'App 08', link:'https://rgsa.gov.in/index.htm' },
    { src: img09, alt: 'App 09', link:'https://trainingonline.gov.in/' },
    { src: img10, alt: 'App 10', link:'https://panchayataward.gov.in/' },
    { src: img11, alt: 'App 11', link:'https://pai.gov.in/' },
    { src: img12, alt: 'App 12', link:'https://panchayat.gov.in/' },
    { src: img13, alt: 'App 13', link:'https://bhashini.gov.in/' },
];

const ResourcesAndApps = () => {
    const [selectedResource, setSelectedResource] = useState<ResourceItem | null>(null);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (selectedResource) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedResource]);

    return (
        <section className="bg-[#ebeede] py-16 relative">
            <div className="max-w-[1400px] mx-auto px-4">
                {/* Resources header */}
                <div>
                    <h3 className="text-4xl font-extrabold text-gray-900">Resources</h3>
                    <p className="mt-2 text-gray-700">Repository to host reference materials</p>
                </div>

                {/* Resources Grid */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {resources.map((resource, index) => (
                        <button
                            type="button"
                            key={index}
                            onClick={() => setSelectedResource(resource)}
                            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col text-left cursor-pointer group border border-transparent hover:border-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                        >
                            {/* Thumbnail area */}
                            <div className="relative aspect-video w-full bg-gray-100 overflow-hidden">
                                {resource.type === 'video' ? (
                                    resource.src ? (
                                        <>
                                            <video
                                                src={resource.src}
                                                preload="metadata"
                                                muted
                                                playsInline
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/25 group-hover:bg-black/40 transition-colors p-4">
                                                <span className={`rounded-full bg-white/95 p-4 ${resource.colorClass} shadow-xl group-hover:scale-110 transition-transform duration-300 ring-2 ring-white/50`}>
                                                    <resource.icon className="w-10 h-10 md:w-12 md:h-12" />
                                                </span>
                                                <span className="text-white text-center font-semibold text-sm md:text-base drop-shadow-lg line-clamp-2 px-2">
                                                    {resource.title}
                                                </span>
                                            </div>
                                        </>
                                    ) : (
                                        <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-blue-50 to-blue-100/80 p-4 border-2 border-dashed border-blue-200">
                                            <span className={`p-4 rounded-xl bg-white shadow-md ${resource.colorClass}`}>
                                                <resource.icon className="w-12 h-12 md:w-14 md:h-14" />
                                            </span>
                                            <span className="text-xl font-semibold text-blue-700 text-center">Coming soon</span>
                                            <span className="text-sm text-gray-600 text-center line-clamp-2 px-2">{resource.title}</span>
                                        </div>
                                    )
                                ) : (
                                    resource.src ? (
                                        <>
                                            <iframe
                                                src={resource.src}
                                                className="w-full h-full pointer-events-none scale-100 origin-top-left"
                                                title={`${resource.title} preview`}
                                            />
                                            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/20 group-hover:bg-black/35 transition-colors p-4">
                                                <span className={`rounded-full bg-white/95 p-4 ${resource.colorClass} shadow-xl group-hover:scale-110 transition-transform duration-300 ring-2 ring-white/50`}>
                                                    <resource.icon className="w-10 h-10 md:w-12 md:h-12" />
                                                </span>
                                                <span className="text-white text-center font-semibold text-sm md:text-base drop-shadow-lg line-clamp-2 px-2">
                                                    {resource.title}
                                                </span>
                                            </div>
                                        </>
                                    ) : (
                                        <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-gray-50 to-gray-100 p-4 border-2 border-dashed border-gray-200">
                                            <span className={`p-4 rounded-xl bg-white shadow-md ${resource.colorClass}`}>
                                                <resource.icon className="w-12 h-12 md:w-14 md:h-14" />
                                            </span>
                                            <span className="text-xl font-semibold text-gray-600 text-center">Coming soon</span>
                                            <span className="text-sm text-gray-500 text-center line-clamp-2 px-2">{resource.title}</span>
                                        </div>
                                    )
                                )}
                            </div>
                        </button>
                    ))}
                </div>

                {/* Modal */}
                {selectedResource && (
                    <div
                        className="modal-overlay-in fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                        onClick={() => setSelectedResource(null)}
                    >
                        <div
                            className="modal-pop-in bg-white rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex justify-between items-center p-4 border-b">
                                <h3 className="text-xl font-bold text-gray-900">{selectedResource.title}</h3>
                                <button 
                                    onClick={() => setSelectedResource(null)}
                                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                >
                                    <IoClose className="w-6 h-6" />
                                </button>
                            </div>
                            
                            <div className="p-4 bg-gray-100 flex items-center justify-center min-h-[300px] max-h-[80vh] overflow-auto">
                                {selectedResource.type === 'video' ? (
                                    selectedResource.src ? (
                                        <video 
                                            src={selectedResource.src} 
                                            controls 
                                            autoPlay 
                                            className="w-full max-h-[70vh] rounded-lg shadow-lg"
                                        />
                                    ) : (
                                        <div className="flex flex-col items-center justify-center gap-4 py-12 px-6 text-center">
                                            <span className={`p-5 rounded-full bg-blue-100 ${selectedResource.colorClass}`}>
                                                <selectedResource.icon className="w-16 h-16" />
                                            </span>
                                            <p className="text-lg font-semibold text-gray-800">This video will be available soon.</p>
                                            <p className="text-sm text-gray-600 max-w-sm">{selectedResource.title}</p>
                                        </div>
                                    )
                                ) : selectedResource.src ? (
                                    <iframe 
                                        src={selectedResource.src} 
                                        className="w-full h-[70vh] rounded-lg shadow-lg"
                                        title={selectedResource.title}
                                    />
                                ) : null}
                            </div>
                        </div>
                    </div>
                )}

                {/* Apps header */}
                <div className="mt-14">
                    <h3 className="text-4xl font-extrabold"><span className="text-[#3786A5]">Other </span><span className="text-[#53A537]">Applications</span></h3>
                </div>

                {/* Apps grid */}
                <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {apps.map((app, index) => (
                        <div key={index} className="bg-white rounded-xl h-36 flex items-center justify-center shadow">
                            <a href={app.link} target="_blank" rel="noopener noreferrer">
                                <img src={app.src} alt={app.alt} className="max-h-28 object-contain px-2 bhashini-skip-translation" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ResourcesAndApps;



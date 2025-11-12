import { useState } from "react";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";

const Footer = () => {
    const [isContactVisible, setIsContactVisible] = useState(false);

    const toggleContact = () => {
        setIsContactVisible((prev) => !prev);
    };

    return (
        <footer className="bg-black text-gray-200">
            <div className="max-w-[1400px] mx-auto px-6 py-8 space-y-6">
                <div className="flex items-center gap-5 justify-center">
                    <p className="text-lg">Privacy Policy</p>
                    <button
                        type="button"
                        onClick={toggleContact}
                        className="text-lg underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition"
                        aria-expanded={isContactVisible}
                    >
                        Contact Us
                    </button>
                </div>

                {isContactVisible && (
                    <div
                        className="rounded-3xl bg-gradient-to-br from-gray-900 via-gray-900/80 to-black/70 border border-gray-700/70 px-6 py-6 md:px-10 md:py-8 space-y-6 shadow-xl"
                        role="region"
                        aria-label="Contact information"
                    >
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div>
                                <p className="text-3xl font-semibold text-white tracking-wide">Get in Touch</p>
                                <p className="text-gray-400 text-base md:text-lg mt-1">
                                    Reach the PANCHAM team for questions, partnerships, or support.
                                </p>
                            </div>
                        </div>

                        <div className="grid gap-5 lg:gap-8 md:grid-cols-2">
                            <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-5 shadow-lg">
                                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/10 text-green-400">
                                    <HiOutlineMail className="h-6 w-6" aria-hidden="true" />
                                </span>
                                <div>
                                    <p className="text-sm uppercase tracking-widest text-gray-400">Email</p>
                                    <a
                                        href="mailto:pancham.mopr@nic.in"
                                        className="mt-1 inline-flex text-lg font-semibold text-green-400 underline underline-offset-4 bhashini-skip-translation"
                                    >
                                        pancham.mopr@nic.in
                                    </a>
                                    <p className="mt-2 text-gray-400 text-sm">
                                        We aim to respond within 2 working days.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-5 shadow-lg">
                                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/10 text-green-400">
                                    <HiOutlineLocationMarker className="h-6 w-6" aria-hidden="true" />
                                </span>
                                <div>
                                    <p className="text-sm uppercase tracking-widest text-gray-400">Where We Are</p>
                                    <p className="mt-1 text-lg font-semibold text-white">Ministry of Panchayati Raj</p>
                                    <p className="text-white">Government of India</p>
                                    <p className="text-white">Eleventh Floor, J.P. Building</p>
                                    <p className="text-white">Kasturba Gandhi Marg, Connaught Place</p>
                                    <p className="text-white">New Delhi - 110001</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <hr className="border-gray-700" />
                <p className="text-center text-sm text-gray-300">Content owned and Powered by Ministry of Panchayati Raj in partnership with UNICEF.</p>
            </div>
        </footer>
    );
};

export default Footer;
import dashboardBg from "../assets/dashboard-bg.png";

const ComingSoon = () => {
    const backgroundImageUrl = dashboardBg;
    return (
        <section
            className="relative lg:h-[750px] h-[249px] flex items-center justify-center text-white overflow-hidden"
            style={{ backgroundImage: `url('${backgroundImageUrl}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            {/* subtle dark overlay with blur */}
            <div className="absolute inset-0 lg:bg-black/80 bg-black/60 backdrop-blur-md"></div>

            <div className="relative z-10 text-center">
                <h2 className="lg:text-6xl text-4xl font-extrabold drop-shadow">Dashboard</h2>
                <p className="mt-6 lg:text-2xl text-xl tracking-wide opacity-90">COMING SOON...</p>
            </div>
        </section>
    );
};

export default ComingSoon;



const ComingSoon = () => {
    const backgroundImageUrl = '/src/assets/dashboard-bg.png';
    return (
        <section
            className="relative h-[750px] flex items-center justify-center text-white overflow-hidden"
            style={{ backgroundImage: `url('${backgroundImageUrl}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            {/* subtle dark overlay with blur */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md"></div>

            <div className="relative z-10 text-center">
                <h2 className="text-6xl font-extrabold drop-shadow">Dashboard</h2>
                <p className="mt-6 text-2xl tracking-wide opacity-90">COMING SOON...</p>
            </div>
        </section>
    );
};

export default ComingSoon;



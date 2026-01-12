import dashboardBg from "../assets/dashboard-bg.png";
import dashImage from "../assets/dash.jpeg";

const ComingSoon = () => {
  return (
    <section
      id="dashboard"
      className="relative lg:h-[750px] min-h-[55vh] flex items-center justify-center text-white overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${dashboardBg}')` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 lg:bg-black/80 bg-black/60 backdrop-blur-md" />

      {/* Content */}
      <div className="relative z-10 w-full h-full flex items-center justify-center px-4">

        {/* Outer flex to horizontally center inner content */}
        <div className="flex justify-center w-full">
          
          {/* Layout core */}
          <div className="flex flex-col lg:flex-row items-start gap-6">

            {/* Dashboard title */}
            <h2 className="lg:text-5xl pt-2 lg:p-0 text-4xl font-bold drop-shadow">
              Dashboard
            </h2>

            {/* Image + Know More */}
            <div className="flex flex-col lg:flex-row gap-4 items-center lg:items-end">

              <img
                src={dashImage}
                alt="dashboard preview"
                className="w-[90%] lg:w-[70%] rounded-2xl"
              />

              <p className="lg:text-2xl text-xl whitespace-nowrap shrink-0 border border-white px-5 py-2 rounded-2xl">
                Know more
              </p>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ComingSoon;

const About = () => {
  return (
    <div id="about" className="bg-[#2f2418] pb-10 pt-8 lg:pt-0">
      <div className="flex flex-col mx-0 lg:mx-50 items-center lg:items-start gap-2 lg:gap-0">
        <div
          className="relative z-10 flex items-center bg-[#2f2418] rounded-xl
                        px-8 md:px-10 lg:px-16 py-2
                        w-fit
                        translate-y-0 lg:-translate-y-[80%]"
        >
          <span className="text-3xl xl:text-4xl text-white font-bold pb-2 lg:pb-0">
            About
          </span>
        </div>

        <div className="relative flex flex-wrap xl:flex-nowrap items-stretch xl:items-center px-4 md:px-0 pr-3 transition-all duration-300 ease-in-out">
          <p className="text-white text-center lg:text-left text-base lg:text-lg md:pl-10 lg:pl-16 leading-relaxed lg:leading-normal w-full">
            <span className="text-xl xl:text-3xl font-bold text-white mr-1 lg:mr-0 inline-block lg:inline">
              PANCHAM
            </span>
            <span className="lg:hidden inline">—</span>
            <span className="hidden lg:inline"> —</span> Panchayat Assistance &
            Messaging Chatbot, a WhatsApp-based communication and
            decision-support platform built on UNICEF&rsquo;s RapidPro, an open-source
            and globally recognized Digital Public Good (DPG)....
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

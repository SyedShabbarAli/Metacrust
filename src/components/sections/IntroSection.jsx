import dataImg from "../../assets/data-security.webp";
import AnimateButton from "../layouts/AnimateButton";

export default function IntroSection() {
  return (
    <div className="relative bg-gradient-to-br from-white via-cyan-50/40 to-blue-50/60 h-fit w-full rounded-2xl lg:rounded-[2rem] flex flex-col lg:flex-row items-center gap-6 lg:gap-12 py-6 md:py-10 lg:py-20 px-5 md:px-8 lg:px-16 shadow-lg lg:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] border border-cyan-100/40 overflow-hidden">
      {/* Static background gradients */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] bg-gradient-to-br from-cyan-400/10 to-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 lg:-bottom-32 lg:-left-32 w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] bg-gradient-to-tr from-blue-400/10 to-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      
      {/* Content Section */}
      <div className="flex-1 relative z-10 w-full text-center lg:text-left">
        <div className="mb-4 md:mb-6 lg:mb-10 w-full">
          <div className="inline-block mb-2 md:mb-3 px-3 py-1.5 md:px-4 md:py-2 bg-cyan-500/10 rounded-full border border-cyan-500/20">
            <span className="text-[0.6rem] md:text-xs lg:text-sm font-semibold text-cyan-600 tracking-wider uppercase">
              Next-Gen IoT Platform
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black font-sans tracking-tight leading-[1.1] sm:leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-cyan-700 to-blue-900 bg-clip-text text-transparent drop-shadow-sm">
              METACRUST
            </span>
          </h1>
        </div>

        <div className="space-y-4 md:space-y-6 lg:space-y-10 w-full">
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-1.5 sm:gap-2 md:gap-3 lg:gap-4 leading-tight">
            <span className="py-0.5 md:py-1 lg:py-2 text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-black bg-gradient-to-r from-cyan-500 to-cyan-600 bg-clip-text text-transparent leading-none">
              Secure
            </span>
            
            <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-cyan-300/50 leading-none">•</span>
            
            <span className="py-0.5 md:py-1 lg:py-2 text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-black bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent leading-none">
              Scalable
            </span>
            
            <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-cyan-300/50 leading-none">•</span>
            
            <span className="py-0.5 md:py-1 lg:py-2 text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-black bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent leading-none">
              Energy-Efficient
            </span>
          </div>

          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold text-gray-700 leading-relaxed max-w-3xl mx-auto lg:mx-0">
            Device Communication & Monitoring Platform
          </p>

          <div className="pt-3 md:pt-5 lg:pt-6 flex justify-center lg:justify-start w-full">
            <AnimateButton />
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative z-10 w-full lg:w-auto flex justify-center mt-4 lg:mt-0">
        <img
          src={dataImg}
          className=""
          loading="lazy"
          alt="MetaCrust Platform"
        />
      </div>
    </div>
  );
}

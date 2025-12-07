import { useState } from "react";
import image from "../../assets/videoImg.jpg";

export default function YouTubeStylePlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative w-full max-w-2xl h-full mx-auto rounded-lg md:rounded-xl overflow-hidden shadow-md md:shadow-lg">
      {isPlaying ? (
        <div className="aspect-video">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/N2DkftT1sog?autoplay=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : (
        <div
          className="relative cursor-pointer group "
          onClick={() => setIsPlaying(true)}
        >
          <h2 className="absolute text-gray-200 z-10 text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl pl-2 sm:pl-3 md:pl-3.5 pt-2 sm:pt-2.5 md:pt-3 bg-gradient-to-b from-black to-transparent w-full">
            Get to Know MetaCrust
          </h2>
          <img
            src={image}
            alt="Video thumbnail"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/70 transition-colors duration-300">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/80 rounded-full flex items-center justify-center transition">
              <svg
                className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-red-600 group-hover:animate-pulse"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

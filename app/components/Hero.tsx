import React from "react";
import LottieAnimation from "./VisualizerAnimation";
import animationData from "../../public/visualizer.json";

const Hero: React.FC = () => {
  return (
    <div className="hero min-h-screen flex flex-col md:flex-row items-center justify-between relative">
      <div className="hero-content w-full md:w-1/2 pl-4 md:pl-40 z-10 relative">
        <div className="max-w-full">
          <h1 className="text-3xl md:text-8xl text-slate-50 font-bold animate-fade-in">
            unwrapped
          </h1>
          <p className="text-sm md:text-base py-2 md:py-6 animate-fade-in">
            See your Spotify statistics in a new and simple way.
          </p>
          <button className="bg-green-600 text-slate-50 btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mt-4 animate-fade-in">
            Login
          </button>
        </div>
      </div>
      <div className="hero-content w-full md:w-1/2 pr-4 md:pr-40 z-0 relative">
        <div className="max-w-full">
          <LottieAnimation animationData={animationData} />
        </div>
      </div>
    </div>
  );
};



export default Hero;

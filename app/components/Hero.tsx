import React from "react";
import LottieAnimation from "./VisualizerAnimation";
import animationData from "../../public/visualizer.json";

const Hero: React.FC = () => {
  return (
    <div className="hero min-h-screen flex items-center justify-between">
      <div className="hero-content pl-40">
        <div className="max-w-md">
          <h1 className="text-8xl text-slate-50 font-bold animate-fade-in">
            unwrapped
          </h1>
          <p className="py-6 animate-fade-in">
            See your Spotify statistics in a new and simple way.
          </p>
          <button className="bg-green-600 text-slate-50 btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mt-4 animate-fade-in">
            Login
          </button>
        </div>
      </div>
      <div className="pr-40">
        <LottieAnimation animationData={animationData} />
      </div>
    </div>
  );
};

export default Hero;

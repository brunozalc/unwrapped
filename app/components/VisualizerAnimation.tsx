"use client";

import React, { useEffect, useRef } from "react";
import lottie, { AnimationConfigWithData } from "lottie-web";

interface LottieAnimationProps {
  animationData: any;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({ animationData }) => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const config: AnimationConfigWithData = {
      container: container.current as Element,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData,
    };

    const anim = lottie.loadAnimation(config);

    return () => {
      anim.destroy();
    };
  }, [animationData]);

  return <div ref={container} className="w-full h-full" />;
};

export default LottieAnimation;

"use client";

import Lottie from "lottie-react";
import animationData from "@/animations/soccerBall.json";

export function SoccerBallLottie() {
  return (
    <Lottie
      animationData={animationData}
      loop
      autoplay
      style={{ width: 60, height: 60 }}
    />
  );
}
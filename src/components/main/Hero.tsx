import React from "react";

function Hero() {
  return (
    <div className="relative flex flex-col h-full w-full">
      <video
        src="/assets/blackhole.webm"
        autoPlay
        loop
        muted
        className="rotate-180 absolute top-[-340px] left-0 z-[1] w-full object-cover "
      >
        <source src="/assets/blackhole.webm" type="video/webm" />
      </video>
    </div>
  );
}

export default Hero;

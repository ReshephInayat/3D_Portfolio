import Hero from "@/components/main/Hero";
import React from "react";

function page() {
  return (
    <main className="w-full h-full">
      <div className="flex flex-col h-[850px] gap-20">
        <Hero />
      </div>
    </main>
  );
}

export default page;

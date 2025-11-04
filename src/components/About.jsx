import React from "react";

function About() {
  return (
    <section id="about" className="second-section h-screen bg-black relative">
      <div className="h-[500px] w-full bg-yellow-800 animate-pulse rotate-[10deg] skew-x-12"></div>
      <div className="absolute top-[15%] sm:right-20 md:right-[300px] text-white">
        <h1 className="text-5xl font-bold font-rubix">Enlighten Me</h1>
        <p className="w-[500px] font-semibold pt-10">
          Did you know these sneakers are crafted to look just like the real
          deal? From afar, no one could tell the difference! The secret lies in
          their construction — made with premium materials like rubber, fabric,
          and plastic, just like authentic Jordans. The best part? You don’t
          have to spend a fortune to own them! So, wear your replica Jordans
          confidently and show off your smart style. Who knows — someday you
          might grab the originals, but until then, keep rocking those Air
          Almost-Jordans like a pro.
        </p>
        <div className="grid md:grid-cols-2 gap-2 text-black font-rubix font-bold mt-4">
          <span className="bg-orange-500 rounded-full px-3">
            #Almost as good as the real thing
          </span>
          <span className="bg-yellow-500 rounded-full px-3">
            #Fake it till you make it
          </span>
        </div>
      </div>
    </section>
  );
}

export default About;

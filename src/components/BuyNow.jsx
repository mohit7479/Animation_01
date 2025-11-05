import React from "react";

function BuyNow() {
  return (
    <section className="third-section h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] relative flex items-center justify-center px-6">
      <div className="z-20 absolute top-[25%] left-[10%] md:left-[20%] lg:left-[25%] flex flex-col justify-center bg-white/10 backdrop-blur-xl border border-indigo-400 shadow-2xl p-8 rounded-2xl max-w-lg w-full text-center text-white">
        <h1 className="font-extrabold text-4xl md:text-5xl text-indigo-300 mb-3">
          Step Into Your Dream Sneakers
        </h1>
        <p className="text-indigo-200 text-sm md:text-base mb-6">
          Join the sneaker community and get exclusive access to limited drops
          and cool deals.
        </p>

        <div className="flex flex-col md:flex-row gap-3 mb-4">
          <input
            type="text"
            className="bg-transparent border border-indigo-400 rounded-lg text-white placeholder:text-indigo-300 p-3 flex-1 focus:outline-none focus:border-indigo-500"
            placeholder="Your name"
          />
          <input
            type="email"
            className="bg-transparent border border-indigo-400 rounded-lg text-white placeholder:text-indigo-300 p-3 flex-1 focus:outline-none focus:border-indigo-500"
            placeholder="Your email"
          />
        </div>

        <select className="w-full bg-transparent border border-indigo-400 rounded-lg p-3 mb-5 text-indigo-200 focus:outline-none focus:border-indigo-500">
          <option value="">Choose your sneaker style</option>
          <option value="">Retro Streetwear</option>
          <option value="">Minimal & Modern</option>
          <option value="">Performance Series</option>
          <option value="">Limited Edition Drops</option>
          <option value="">Everyday Classics</option>
        </select>

        <button
          onClick={() =>
            alert(
              "You're all set! Stay tuned for exclusive sneaker drops and early deals — your dream kicks are just a step away!"
            )
          }
          className="border border-indigo-400 bg-indigo-500/80 hover:bg-indigo-400 text-white font-semibold py-3 rounded-lg shadow-md transition-all duration-300 hover:scale-105"
        >
          Grab Yours Now
        </button>
      </div>
    </section>
  );
}

export default BuyNow;

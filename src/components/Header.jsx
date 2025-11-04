import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import ShinyButton from "../button/ShinyButton";

gsap.registerPlugin(SplitText);

export default function Header() {
  const imgRef = useRef(null);
  const textRef = useRef(null);
  const glitchInterval = useRef(null);

  useEffect(() => {
    const lowercaseAsciiStart = 65;
    let copy = [];

    // Split text into characters
    const split = new SplitText(textRef.current, { type: "chars" });
    split.chars.forEach((char) => copy.push(char.textContent));

    // Function that performs glitching + color flicker
    const glitchText = () => {
      split.chars.forEach((char, i) => {
        if (Math.random() > 0.7) {
          const randomChar = String.fromCharCode(
            lowercaseAsciiStart + Math.floor(Math.random() * 26)
          );

          char.textContent = randomChar;

          // RGB color split effect using text shadow
          char.style.textShadow = `
            2px 0px #ff004c,
            -2px 0px #00fff9
          `;

          // Random color flashing
          char.style.color = ["#ff004c", "#00fff9", "#fff", "#ffea00"][
            Math.floor(Math.random() * 4)
          ];

          gsap.to(char, {
            y: gsap.utils.random(-5, 5),
            x: gsap.utils.random(-2, 2),
            duration: 0.1,
            ease: "power1.inOut",
          });
        } else {
          // Reset back to normal
          char.textContent = copy[i];
          char.style.textShadow = "none";
          char.style.color = "#facc15"; // yellow-800 from Tailwind
          gsap.to(char, {
            opacity: 1,
            y: 0,
            x: 0,
            duration: 0.2,
            ease: "power2.out",
          });
        }
      });
    };

    // Hover start
    const startGlitch = () => {
      if (!glitchInterval.current) {
        glitchInterval.current = setInterval(glitchText, 200);
      }
    };

    // Hover end
    const stopGlitch = () => {
      clearInterval(glitchInterval.current);
      glitchInterval.current = null;
      split.chars.forEach((char, i) => {
        char.textContent = copy[i];
        char.style.textShadow = "none";
        char.style.color = "#facc15";
        gsap.to(char, { opacity: 1, y: 0, x: 0, duration: 0.2 });
      });
    };

    const el = textRef.current;
    el.addEventListener("mouseenter", startGlitch);
    el.addEventListener("mouseleave", stopGlitch);

    return () => {
      stopGlitch();
      el.removeEventListener("mouseenter", startGlitch);
      el.removeEventListener("mouseleave", stopGlitch);
      split.revert();
    };
  }, []);

  return (
    <header className="z-50 absolute top-0 text-black py-2 px-16 font-extrabold tracking-widest uppercase flex justify-between items-center w-full">
      <div className="flex items-center text-5xl">
        <h1
          ref={textRef}
          className="font-rubix text-yellow-800 split cursor-pointer select-none transition-all"
        >
          Mates
        </h1>
        <img
          ref={imgRef}
          className="h-24 w-24"
          src="https://freesvg.org/img/high-tops.png"
          alt="hightop"
        />
      </div>
      <ShinyButton />
    </header>
  );
}

// import { useEffect, useRef } from "react";
// import ShinyButton from "../button/ShinyButton";
// import gsap from "gsap";

// export default function Header() {
//   const imgRef = useRef(null);

//   // useEffect(() => {
//   //   gsap.to(imgRef.current, {
//   //     rotationY: 360,
//   //     duration: 4,
//   //     repeat: -1,
//   //     ease: "linear",
//   //     transformOrigin: "center center",
//   //     transformPerspective: 600,
//   //   });
//   // }, []);

//   return (
//     <header className="z-50 absolute top-0 text-black py-2 px-16 font-extrabold tracking-widest uppercase flex justify-between items-center w-full">
//       <div className="flex items-center text-5xl">
//         <h1 className="font-rubix text-yellow-800 split">Mates</h1>
//         <img
//           ref={imgRef}
//           className="h-24 w-24"
//           src="https://freesvg.org/img/high-tops.png"
//           alt="hightop"
//         />
//       </div>
//       <ShinyButton />
//     </header>
//   );
// }

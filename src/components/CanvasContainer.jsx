import { Canvas } from "@react-three/fiber";
import Jordan from "./Jordan";
import { OrbitControls } from "@react-three/drei";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Suspense } from "react";
import Loading from "./Loading";

gsap.registerPlugin(ScrollTrigger);

export default function CanvasContainer() {
  return (
    <Canvas
      camera={{
        position: [4.7429, 2.2387, 1.2218],
      }}
      shadows
    >
      <OrbitControls
        enablePan={false}
        enableRotate={false}
        enableZoom={false}
      />
      <Suspense fallback={<Loading />}>
        <Jordan />
      </Suspense>
    </Canvas>
  );
}

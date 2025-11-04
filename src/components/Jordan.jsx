import { useGLTF } from "@react-three/drei";

import React, { useLayoutEffect, useRef } from "react";

import { useThree } from "@react-three/fiber";

import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Jordan(props) {
  const { nodes, materials } = useGLTF("/air_jordan_1.glb");

  const jordans = useRef();

  const { scene, camera } = useThree();

  const tl = gsap.timeline();

  useLayoutEffect(() => {
    new ScrollTrigger({});

    tl.to(camera.position, {
      x: 5,

      y: 4.0,

      z: 2.8,

      scrollTrigger: {
        trigger: ".second-section",

        start: "top bottom",

        end: "top top",

        scrub: true,
      },
    })

      .to(scene.position, {
        x: 3.01,

        y: 0.76,

        z: 3.7,

        scrollTrigger: {
          trigger: ".second-section",

          start: "top bottom",

          end: "top top",

          scrub: true,
        },
      })

      .to(scene.rotation, {
        x: -0.53,

        y: -3.48,

        z: -0.21,

        scrollTrigger: {
          trigger: ".second-section",

          start: "top bottom",

          end: "top top",

          scrub: true,
        },
      })

      .to(camera.position, {
        x: 5,

        y: 3.8,

        z: 2.8,

        scrollTrigger: {
          trigger: ".third-section",

          start: "top bottom",

          end: "top top",

          scrub: true,
        },
      })

      .to(scene.position, {
        x: 2.31,

        y: 0.01,

        z: -0.7,

        scrollTrigger: {
          trigger: ".third-section",

          start: "top bottom",

          end: "top top",

          scrub: true,
        },
      })

      .to(scene.rotation, {
        x: 0.67,

        y: -12.9,

        z: 0.79,

        scrollTrigger: {
          trigger: ".third-section",

          start: "top bottom",

          end: "top top",

          scrub: true,
        },
      });
  }, [camera, scene]);

  return (
    <>
      <directionalLight
        castShadow
        position={[-2.38, 1.32, 0.74]}
        intensity={5}
      />

      <ambientLight intensity={1.5} color="orange" />

      <group
        ref={jordans}
        position={[2, 1, -1]}
        castShadow
        scale={10}
        rotation-x={-Math.PI * 0.5}
        {...props}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.shoe_shoe_0.geometry}
          material={materials.shoe}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.shoelace_shoelace_0.geometry}
          material={materials.shoelace}
        />
      </group>
    </>
  );
}

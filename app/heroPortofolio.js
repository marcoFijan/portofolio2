"use client";

import Box from "./box.js";
import Projects from "./projects.js";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useScroll } from "@react-three/drei";
import gsap from "gsap";
import { useLayoutEffect, seEffect, useRef, useState } from "react";

export default function HeroPortofolio() {
  return (
    <article className="bg-bgColorDark">
      <div className="py-10 px-8 w-full max-w-wrapper mx-auto">
        <h1 className="text-white">Portofolio</h1>
        <h2>Mijn projecten</h2>
        <div className="w-full h-screen">
          <Canvas
            shadows
            className="h-full w-full"
            camera={{ position: [0, 0, 7] }}
          >
            <ambientLight color={"white"} intensity={0.3} />
            <gridHelper args={[20, 20, 0xff0000, "teal"]} />
            <OrbitControls enableZoom={false} />
            <Projects />
          </Canvas>
        </div>
      </div>
    </article>
  );
}

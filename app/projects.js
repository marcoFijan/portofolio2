"use client";

import Image from "next/image";
import styles from "./NameAnimation.module.css";
import marcoPointingAtText from "../public/images/marcoPointing.png";
import Splitter from "./splitter.js";
import Box from "./box.js";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useScroll, ScrollControls } from "@react-three/drei";
import gsap from "gsap";
import { useEffect, seEffect, useRef, useState } from "react";

export default function HeroPortofolio({}) {
  const phone = useRef();
  const tl = useRef();
  const scroll = useScroll();
  // console.log("scroll is ", scroll);

  useFrame(() => {
    // tl.current.seek(scroll.offset * tl.current.duration());
  });

  useEffect(() => {
    console.log("run useeffect");
    tl.current = gsap.timeline({
      defaults: { ease: "power4.inOut", duration: 2 },
    });

    console.log(tl.current);

    tl.current.to(phone.current.position, { duration: 2, x: -4 }, 0);
  }, [scroll]);

  return (
    <group ref={phone}>
      <ScrollControls pages={3} damping={0.25}>
        <Box pos={[0, 0, 0]} rot={[0, 3, 0]} />
      </ScrollControls>
    </group>
  );
}

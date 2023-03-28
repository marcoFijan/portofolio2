import Image from "next/image";
import styles from "./NameAnimation.module.css";
import marcoPointingAtText from "../public/images/marcoPointing.png";
import HeroIntroduction from "./heroIntroduction.js";
import HeroAbout from "./heroAbout.js";
import HeroPortofolio from "./heroPortofolio";
import HeroExperience from "./heroExperience.js";
import HeroContact from "./heroContact.js";
import Splitter from "./splitter.js";

export default function Home() {
  return (
    <main className="">
      <HeroIntroduction />
      <Splitter />
      <HeroAbout />
      <HeroPortofolio />
      <HeroExperience />
      <HeroContact />
    </main>
  );
}

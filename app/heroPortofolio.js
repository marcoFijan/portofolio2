import Image from "next/image";
import styles from "./NameAnimation.module.css";
import marcoPointingAtText from "../public/images/marcoPointing.png";
import Splitter from "./splitter.js";

export default function HeroPortofolio() {
  return (
    <article className="bg-bgColorDark">
      <div className="py-10 px-8">
        <h1 className="text-white">Portofolio</h1>
        <h2>Mijn projecten</h2>
      </div>
    </article>
  );
}

import Image from "next/image";
import styles from "./NameAnimation.module.css";
import marcoPointingAtText from "../public/images/marcoPointing.png";

export default function Home() {
  return (
    <main className="">
      <div className=" w-full min-h-screen bg-bgColorDark flex  justify-center items-center flex-col box-border">
        <div className="max-w-wrapper mx-auto flex justify-center items-center flex-col">
          {/* Marco SVG */}
          <div className="flex flex-wrap gap-x-16 gap-y-4 justify-center max-w-fit max-h-fit mx-8 animate-[lines_3s_ease-in-out_forwards]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 287.71 52.7"
              className={styles.marco}
            >
              <title>MARCO</title>
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <path
                    className="stoke"
                    d="M45,51.55l-.14-23L33.91,47H26.42L15.48,29.38V51.55H0V1.15H14L30.38,28l16-26.86h14l.14,50.4Z"
                  />
                  <path d="M103,42.77H83.88L80.5,51.55H63.22l22-50.4H102l22,50.4H106.42ZM98.35,30.53,93.46,17.86l-4.9,12.67Z" />
                  <path d="M148.32,38.88h-4.61V51.55h-17V1.15H151a29.66,29.66,0,0,1,12.17,2.31A17.43,17.43,0,0,1,174,20.16a17.83,17.83,0,0,1-2.45,9.43A17.23,17.23,0,0,1,164.45,36L175,51.55H156.89Zm6.77-23.08a7.57,7.57,0,0,0-5.19-1.54h-6.19v11.8h6.19a7.57,7.57,0,0,0,5.19-1.54,5.58,5.58,0,0,0,1.73-4.36A5.58,5.58,0,0,0,155.09,15.8Z" />
                  <path d="M192,49.36A25.12,25.12,0,0,1,182,40a25.9,25.9,0,0,1-3.64-13.65A25.87,25.87,0,0,1,182,12.71a25,25,0,0,1,10-9.36A30.67,30.67,0,0,1,206.42,0a31.6,31.6,0,0,1,13.11,2.59,24.33,24.33,0,0,1,9.5,7.49L218.3,19.66q-4.68-5.91-11-5.91a11.25,11.25,0,0,0-8.57,3.42q-3.24,3.42-3.24,9.18t3.24,9.18A11.25,11.25,0,0,0,207.29,39q6.33,0,11-5.9L229,42.62a24.24,24.24,0,0,1-9.5,7.49,31.6,31.6,0,0,1-13.11,2.59A30.66,30.66,0,0,1,192,49.36Z" />
                  <path d="M244.65,49.32a25.25,25.25,0,0,1-13.82-23,25.25,25.25,0,0,1,13.82-23,33.31,33.31,0,0,1,29.24,0,25.25,25.25,0,0,1,13.82,23,25.25,25.25,0,0,1-13.82,23,33.31,33.31,0,0,1-29.24,0ZM265,37.4A11,11,0,0,0,269.06,33a13.93,13.93,0,0,0,1.51-6.66,14,14,0,0,0-1.51-6.66A11.08,11.08,0,0,0,265,15.3a11.33,11.33,0,0,0-11.44,0,11.08,11.08,0,0,0-4.07,4.39A14,14,0,0,0,248,26.35,13.93,13.93,0,0,0,249.48,33a11,11,0,0,0,4.07,4.39,11.33,11.33,0,0,0,11.44,0Z" />
                </g>
              </g>
            </svg>
            {/* Fijan SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 219.53 51.55"
              className={styles.fijan}
            >
              <title>FIJAN</title>
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <path d="M17,12.82v8.64H38V34.27H17V50.4H0V0H41V12.82Z" />
                  <path d="M46.37,0h17V50.4h-17Z" />
                  <path d="M73.62,49.64a19.63,19.63,0,0,1-7.89-5.58l9.15-10.8a16.6,16.6,0,0,0,4,3.75,7.49,7.49,0,0,0,4,1.22,5.17,5.17,0,0,0,4.07-1.58A6.85,6.85,0,0,0,88.34,32V12.82H71.21V0h33.91V31q0,10.29-5.29,15.44T84.31,51.55A28.47,28.47,0,0,1,73.62,49.64Z" />
                  <path d="M146.16,41.62H127l-3.39,8.78H106.34l22-50.4h16.71l22,50.4H149.54Zm-4.68-12.24-4.9-12.68-4.89,12.68Z" />
                  <path d="M219.53,0V50.4h-14L186.41,27.5V50.4H169.85V0h14L203,22.9V0Z" />
                </g>
              </g>
            </svg>
          </div>
          <section className="flex gap-x-8 justify-between w-full px-8">
            <p className="uppercase text-4xl text-white opacity-0 font-black animate-[becomeVisible_1s_ease-in-out_5s_normal_forwards]">
              #User Experience
            </p>
            <p className="uppercase text-4xl text-white opacity-0 font-black animate-[becomeVisible_1s_ease-in-out_5.5s_normal_forwards]">
              #User Interface
            </p>
            <p className="uppercase text-4xl text-white opacity-0 font-black animate-[becomeVisible_1s_ease-in-out_6s_normal_forwards]">
              #Frontend
            </p>
          </section>
        </div>
      </div>
      <svg
        id="visual"
        viewBox="0 0 1920 1080"
        className="w-full -mt-64 bg-bgColorDark"
      >
        <path
          d="M0 131L64 180.8C128 230.7 256 330.3 384 332.2C512 334 640 238 768 184.7C896 131.3 1024 120.7 1152 173.7C1280 226.7 1408 343.3 1536 337.7C1664 332 1792 204 1856 140L1920 76L1920 1081L1856 1081C1792 1081 1664 1081 1536 1081C1408 1081 1280 1081 1152 1081C1024 1081 896 1081 768 1081C640 1081 512 1081 384 1081C256 1081 128 1081 64 1081L0 1081Z"
          fill="#fd5825"
          className="-translate-y-10"
        ></path>
        <path
          d="M0 420L64 411.5C128 403 256 386 384 405.2C512 424.3 640 479.7 768 443.2C896 406.7 1024 278.3 1152 270.2C1280 262 1408 374 1536 406.8C1664 439.7 1792 393.3 1856 370.2L1920 347L1920 1081L1856 1081C1792 1081 1664 1081 1536 1081C1408 1081 1280 1081 1152 1081C1024 1081 896 1081 768 1081C640 1081 512 1081 384 1081C256 1081 128 1081 64 1081L0 1081Z"
          fill="#fc7235"
        ></path>
        <path
          d="M0 444L64 444.2C128 444.3 256 444.7 384 419.2C512 393.7 640 342.3 768 385.2C896 428 1024 565 1152 593C1280 621 1408 540 1536 516C1664 492 1792 525 1856 541.5L1920 558L1920 1081L1856 1081C1792 1081 1664 1081 1536 1081C1408 1081 1280 1081 1152 1081C1024 1081 896 1081 768 1081C640 1081 512 1081 384 1081C256 1081 128 1081 64 1081L0 1081Z"
          fill="#fb8948"
        ></path>
        <path
          d="M0 610L64 572.8C128 535.7 256 461.3 384 477.2C512 493 640 599 768 612.5C896 626 1024 547 1152 552.3C1280 557.7 1408 647.3 1536 627.7C1664 608 1792 479 1856 414.5L1920 350L1920 1081L1856 1081C1792 1081 1664 1081 1536 1081C1408 1081 1280 1081 1152 1081C1024 1081 896 1081 768 1081C640 1081 512 1081 384 1081C256 1081 128 1081 64 1081L0 1081Z"
          fill="#fa9d5d"
        ></path>
        <path
          d="M0 506L64 536.8C128 567.7 256 629.3 384 656.3C512 683.3 640 675.7 768 698.7C896 721.7 1024 775.3 1152 777.3C1280 779.3 1408 729.7 1536 688.7C1664 647.7 1792 615.3 1856 599.2L1920 583L1920 1081L1856 1081C1792 1081 1664 1081 1536 1081C1408 1081 1280 1081 1152 1081C1024 1081 896 1081 768 1081C640 1081 512 1081 384 1081C256 1081 128 1081 64 1081L0 1081Z"
          fill="#f9af75"
        ></path>
        <path
          d="M0 832L64 825.8C128 819.7 256 807.3 384 806.2C512 805 640 815 768 787.7C896 760.3 1024 695.7 1152 684.3C1280 673 1408 715 1536 706.2C1664 697.3 1792 637.7 1856 607.8L1920 578L1920 1081L1856 1081C1792 1081 1664 1081 1536 1081C1408 1081 1280 1081 1152 1081C1024 1081 896 1081 768 1081C640 1081 512 1081 384 1081C256 1081 128 1081 64 1081L0 1081Z"
          fill="#f8c08f"
        ></path>
        <path
          d="M0 828L64 833.3C128 838.7 256 849.3 384 839.5C512 829.7 640 799.3 768 803.7C896 808 1024 847 1152 845.2C1280 843.3 1408 800.7 1536 799.8C1664 799 1792 840 1856 860.5L1920 881L1920 1081L1856 1081C1792 1081 1664 1081 1536 1081C1408 1081 1280 1081 1152 1081C1024 1081 896 1081 768 1081C640 1081 512 1081 384 1081C256 1081 128 1081 64 1081L0 1081Z"
          fill="#f7d1aa"
        ></path>
        <path
          d="M0 850L64 846.3C128 842.7 256 835.3 384 826.8C512 818.3 640 808.7 768 809.2C896 809.7 1024 820.3 1152 828.7C1280 837 1408 843 1536 839.8C1664 836.7 1792 824.3 1856 818.2L1920 812L1920 1081L1856 1081C1792 1081 1664 1081 1536 1081C1408 1081 1280 1081 1152 1081C1024 1081 896 1081 768 1081C640 1081 512 1081 384 1081C256 1081 128 1081 64 1081L0 1081Z"
          fill="#f7e0c7"
        ></path>
        <path
          d="M0 910L64 905.7C128 901.3 256 892.7 384 898.2C512 903.7 640 923.3 768 937.2C896 951 1024 959 1152 963.2C1280 967.3 1408 967.7 1536 969.8C1664 972 1792 976 1856 978L1920 980L1920 1081L1856 1081C1792 1081 1664 1081 1536 1081C1408 1081 1280 1081 1152 1081C1024 1081 896 1081 768 1081C640 1081 512 1081 384 1081C256 1081 128 1081 64 1081L0 1081Z"
          fill="#f7efe5"
        ></path>
      </svg>
      <article className="w-full bg-bgColorLight">
        <div className="max-w-wrapper mx-auto w-full grid gap-8 grid-cols-fluid pt-10 px-8">
          <section className="self-center">
            <h1>Marco Fijan</h1>
            <h2 className="text-accentColor">Web Designer</h2>
            <p className="py-8">
              Welkom! Leuk dat je een kijkje komt nemen op mijn website. Ik ben
              Marco en ben in 2022 afgestudeerd in Communicatie en Multimedia
              design op de Hogeschool van Amsterdam. Het ontwerpen en
              ontwikkelen van gebruiksvriendelijke webapplicaties spreekt mij
              erg aan; Het bedenken van een idee, hierop itereren en deze
              iteraties toetsen met de doelgroep is dan ook iets wat ik graag
              doe. Ik zet altijd alles op alles om de beleving van de gebruiker
              voorop te zetten en deze te bevorderen.
            </p>
            <p>
              Naast mijn passie voor het ontwerpen en developen van websites,
              kan ik ook erg genieten van rust, natuur en dieren. Daarnaast
              spaar ik edelstenen en minarelen en besteed ik mijn vrije tijd ook
              graag aan videogames met goed verhaal. Hier kan ik helemaal in
              verdwalen.
            </p>
          </section>
          <Image
            className="w-auto h-auto  max-w-lg block self-end"
            src={marcoPointingAtText}
            alt="Picture of Marco Fijan pointing to text"
          />
          <section className="self-center h-96 py-96 bg-bgColorLight">
            placeholder
          </section>
        </div>
      </article>
      <article className="bg-bgColorDark">
        <div className="py-10 px-8">
          <h1 className="text-white">Portofolio</h1>
          <h2>Mijn projecten</h2>
        </div>
      </article>
      <article>
        <h1>Ervaring</h1>
        <h2>Mijn projecten</h2>
      </article>
      <article>
        <h1>Contact</h1>
        <h2>Neem contact met me op!</h2>
      </article>
    </main>
  );
}

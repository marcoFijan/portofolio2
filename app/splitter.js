"use client";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function Home() {
  return (
    <div>
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

      {/* <Parallax pages={4}>
        <ParallaxLayer>
          <svg
            id="visual1"
            viewBox="0 0 1920 1080"
            className="w-full -mt-64 bg-bgColorDark absolute"
          >
            <path
              d="M0 131L64 180.8C128 230.7 256 330.3 384 332.2C512 334 640 238 768 184.7C896 131.3 1024 120.7 1152 173.7C1280 226.7 1408 343.3 1536 337.7C1664 332 1792 204 1856 140L1920 76L1920 1081L1856 1081C1792 1081 1664 1081 1536 1081C1408 1081 1280 1081 1152 1081C1024 1081 896 1081 768 1081C640 1081 512 1081 384 1081C256 1081 128 1081 64 1081L0 1081Z"
              fill="#fd5825"
              className="-translate-y-10"
            ></path>
          </svg>
        </ParallaxLayer>
        <ParallaxLayer>
          <svg
            id="visual2"
            viewBox="0 0 1920 1080"
            className="w-full -mt-64 bg-bgColorDark absolute"
          >
            <path
              d="M0 420L64 411.5C128 403 256 386 384 405.2C512 424.3 640 479.7 768 443.2C896 406.7 1024 278.3 1152 270.2C1280 262 1408 374 1536 406.8C1664 439.7 1792 393.3 1856 370.2L1920 347L1920 1081L1856 1081C1792 1081 1664 1081 1536 1081C1408 1081 1280 1081 1152 1081C1024 1081 896 1081 768 1081C640 1081 512 1081 384 1081C256 1081 128 1081 64 1081L0 1081Z"
              fill="#fc7235"
            ></path>
          </svg>
        </ParallaxLayer>
        <ParallaxLayer>
          <svg
            id="visual3"
            viewBox="0 0 1920 1080"
            className="w-full -mt-64 bg-bgColorDark absolute"
          >
            <path
              d="M0 444L64 444.2C128 444.3 256 444.7 384 419.2C512 393.7 640 342.3 768 385.2C896 428 1024 565 1152 593C1280 621 1408 540 1536 516C1664 492 1792 525 1856 541.5L1920 558L1920 1081L1856 1081C1792 1081 1664 1081 1536 1081C1408 1081 1280 1081 1152 1081C1024 1081 896 1081 768 1081C640 1081 512 1081 384 1081C256 1081 128 1081 64 1081L0 1081Z"
              fill="#fb8948"
            ></path>
          </svg>
        </ParallaxLayer>
        <ParallaxLayer>
          <svg
            id="visual4"
            viewBox="0 0 1920 1080"
            className="w-full -mt-64 bg-bgColorDark absolute"
          >
            <path
              d="M0 610L64 572.8C128 535.7 256 461.3 384 477.2C512 493 640 599 768 612.5C896 626 1024 547 1152 552.3C1280 557.7 1408 647.3 1536 627.7C1664 608 1792 479 1856 414.5L1920 350L1920 1081L1856 1081C1792 1081 1664 1081 1536 1081C1408 1081 1280 1081 1152 1081C1024 1081 896 1081 768 1081C640 1081 512 1081 384 1081C256 1081 128 1081 64 1081L0 1081Z"
              fill="#fa9d5d"
            ></path>
          </svg>
        </ParallaxLayer>
        <ParallaxLayer>
          <svg
            id="visual5"
            viewBox="0 0 1920 1080"
            className="w-full -mt-64 bg-bgColorDark absolute"
          >
            <path
              d="M0 506L64 536.8C128 567.7 256 629.3 384 656.3C512 683.3 640 675.7 768 698.7C896 721.7 1024 775.3 1152 777.3C1280 779.3 1408 729.7 1536 688.7C1664 647.7 1792 615.3 1856 599.2L1920 583L1920 1081L1856 1081C1792 1081 1664 1081 1536 1081C1408 1081 1280 1081 1152 1081C1024 1081 896 1081 768 1081C640 1081 512 1081 384 1081C256 1081 128 1081 64 1081L0 1081Z"
              fill="#f9af75"
            ></path>
          </svg>
        </ParallaxLayer>
        <ParallaxLayer>
          <svg
            id="visual6"
            viewBox="0 0 1920 1080"
            className="w-full -mt-64 bg-bgColorDark absolute"
          >
            <path
              d="M0 832L64 825.8C128 819.7 256 807.3 384 806.2C512 805 640 815 768 787.7C896 760.3 1024 695.7 1152 684.3C1280 673 1408 715 1536 706.2C1664 697.3 1792 637.7 1856 607.8L1920 578L1920 1081L1856 1081C1792 1081 1664 1081 1536 1081C1408 1081 1280 1081 1152 1081C1024 1081 896 1081 768 1081C640 1081 512 1081 384 1081C256 1081 128 1081 64 1081L0 1081Z"
              fill="#f8c08f"
            ></path>
          </svg>
        </ParallaxLayer>
        <ParallaxLayer>
          <svg
            id="visual7"
            viewBox="0 0 1920 1080"
            className="w-full -mt-64 bg-bgColorDark absolute"
          >
            <path
              d="M0 828L64 833.3C128 838.7 256 849.3 384 839.5C512 829.7 640 799.3 768 803.7C896 808 1024 847 1152 845.2C1280 843.3 1408 800.7 1536 799.8C1664 799 1792 840 1856 860.5L1920 881L1920 1081L1856 1081C1792 1081 1664 1081 1536 1081C1408 1081 1280 1081 1152 1081C1024 1081 896 1081 768 1081C640 1081 512 1081 384 1081C256 1081 128 1081 64 1081L0 1081Z"
              fill="#f7d1aa"
            ></path>
          </svg>
        </ParallaxLayer>
        <ParallaxLayer>
          <svg
            id="visual8"
            viewBox="0 0 1920 1080"
            className="w-full -mt-64 bg-bgColorDark absolute"
          >
            <path
              d="M0 850L64 846.3C128 842.7 256 835.3 384 826.8C512 818.3 640 808.7 768 809.2C896 809.7 1024 820.3 1152 828.7C1280 837 1408 843 1536 839.8C1664 836.7 1792 824.3 1856 818.2L1920 812L1920 1081L1856 1081C1792 1081 1664 1081 1536 1081C1408 1081 1280 1081 1152 1081C1024 1081 896 1081 768 1081C640 1081 512 1081 384 1081C256 1081 128 1081 64 1081L0 1081Z"
              fill="#f7e0c7"
            ></path>
          </svg>
        </ParallaxLayer>
        <ParallaxLayer>
          <svg
            id="visual9"
            viewBox="0 0 1920 1080"
            className="w-full -mt-64 bg-bgColorDark absolute"
          >
            <path
              d="M0 910L64 905.7C128 901.3 256 892.7 384 898.2C512 903.7 640 923.3 768 937.2C896 951 1024 959 1152 963.2C1280 967.3 1408 967.7 1536 969.8C1664 972 1792 976 1856 978L1920 980L1920 1081L1856 1081C1792 1081 1664 1081 1536 1081C1408 1081 1280 1081 1152 1081C1024 1081 896 1081 768 1081C640 1081 512 1081 384 1081C256 1081 128 1081 64 1081L0 1081Z"
              fill="#f7efe5"
            ></path>
          </svg>
        </ParallaxLayer>
      </Parallax> */}
    </div>
  );
}

import Header from "@/components/Header";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen w-auto relative overflow-hidden">
      <Header />
      <div
        className="absolute top-0 left-0 right-0 h-screen z-0"
        style={{
          background:
            "linear-gradient(225deg, rgb(255, 255, 255) 0%, rgb(219, 219, 219) 100%)",
          WebkitMaskImage:
            "radial-gradient(125% 100% at 0% 0%, #000 0%, rgba(0, 0, 0, 0.22) 88%, rgba(0, 0, 0, 0) 100%)",
          maskImage:
            "radial-gradient(125% 100% at 0% 0%, #000 0%, rgba(0, 0, 0, 0.22) 88%, rgba(0, 0, 0, 0) 100%)",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskSize: "cover",
          maskSize: "cover",
        }}
      >
        {[
          {
            width: 591,
            left: "calc(33.6111% - min(960px, 591px) / 2)",
            mask:
              "linear-gradient(90deg, rgba(0,0,0,0) 0%, #000 20%, rgba(0,0,0,0) 36%, #000 55%, rgba(0,0,0,0.13) 67%, #000 78%, rgba(0,0,0,0) 97%)",
          },
          {
            width: 582,
            left: "calc(-1.52% - min(960px, 582px) / 2)",
            mask:
              "linear-gradient(90deg, rgba(0,0,0,0) 11%, #000 25%, rgba(0,0,0,0.55) 41%, rgba(0,0,0,0.13) 67%, #000 78%, rgba(0,0,0,0) 97%)",
          },
          {
            width: 441,
            left: "calc(33.68% - min(960px, 441px) / 2)",
            mask:
              "linear-gradient(90deg, rgba(0,0,0,0) 9%, #000 20%, rgba(0,0,0,0.55) 28%, rgba(0,0,0,0.42) 40%, #000 48%, rgba(0,0,0,0.26) 54%, rgba(0,0,0,0.13) 78%, #000 88%, rgba(0,0,0,0) 97%)",
          },
          {
            width: 684,
            left: "calc(50.13% - min(960px, 684px) / 2)",
            mask:
              "linear-gradient(90deg, rgba(0,0,0,0) 0%, #000 17%, rgba(0,0,0,0.55) 26%, #000 35%, rgba(0,0,0,0) 47%, rgba(0,0,0,0.13) 69%, #000 79%, rgba(0,0,0,0) 97%)",
          },
          {
            width: 426,
            left: "calc(49.09% - min(960px, 426px) / 2)",
            mask:
              "linear-gradient(90deg, rgba(0,0,0,0) 0%, #000 20%, rgba(0,0,0,0.55) 27%, #000 42%, rgba(0,0,0,0) 48%, rgba(0,0,0,0.13) 67%, #000 74%, #000 82%, rgba(0,0,0,0.47) 88%, rgba(0,0,0,0) 97%)",
          },
        ].map((shape, index) => (
          <div
            key={index}
            className="absolute h-[1269px] overflow-hidden skew-x-[45deg]"
            style={{
              background:
                "linear-gradient(180deg, #fff 0% 83%, rgba(255,255,255,0) 100%)",
              WebkitMaskImage: shape.mask,
              maskImage: shape.mask,
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              width: `${shape.width}px`,
              left: shape.left,
              top: "-209px",
            }}
          />
        ))}
      </div>
      <div className="relative z-10">{children}</div>
    </main>
  );
};

export default Layout;

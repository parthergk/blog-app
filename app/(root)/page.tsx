import BlogType from "@/components/BlogType";
import FeatureBlog from "@/components/FeatureBlog";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LatestBlog from "@/components/LatestBlog";
import React from "react";

const page = () => {
  return (
    <div className="relative z-10">
      <Header />
      <div
        className=" dark:hidden h-screen overflow-hidden absolute top-0 left-0 right-0 z-0 bg-gradient-to-bl from-[#FFFFFF] from-0% to-[#DBDBDB] to-100% "
        style={{
          WebkitMask:
            "radial-gradient(125% 100% at 0% 0%, #000000 0%, rgba(0, 0, 0, 0.22449) 88.29%, rgba(0, 0, 0, 0) 100%)",
          mask: "radial-gradient(125% 100% at 0% 0%, #000000 0%, rgba(0, 0, 0, 0.22449) 88.29%, rgba(0, 0, 0, 0) 100%)",
        }}
      >
        <div
          className=" skew-x-[45deg] maz-w-[960] h-[1269px] overflow-hidden absolute w-[591px] -top-[209px] bg-[linear-gradient(180deg,_#fff_0%_83.93%,_#fff0)]"
          style={{
            WebkitMask:
              "linear-gradient(90deg,rgba(0,0,0,0) 0%,rgb(0,0,0) 20.036247184684683%,rgba(0,0,0,0) 36.17504222972973%,rgb(0,0,0) 55.4054054054054%,rgba(0,0,0,.13) 67.11711711711712%,rgba(0,0,0,1) 78.23057432432432%,rgba(0,0,0,0) 97.2972972972973%) add",
            mask: "linear-gradient(90deg,rgba(0,0,0,0) 0%,rgb(0,0,0) 20.036247184684683%,rgba(0,0,0,0) 36.17504222972973%,rgb(0,0,0) 55.4054054054054%,rgba(0,0,0,.13) 67.11711711711712%,rgba(0,0,0,1) 78.23057432432432%,rgba(0,0,0,0) 97.2972972972973%) add",
            left: "calc(33.611111111111136% - min(960px,591.04338305692px) / 2)",
          }}
        ></div>
        <div
          className=" skew-x-[45deg] maz-w-[960] h-[1269px] overflow-hidden absolute w-[582px] -top-[209px] bg-[linear-gradient(180deg,_#fff_0%_83.93442622950819%,_#fff0)]"
          style={{
            WebkitMask:
              "linear-gradient(90deg,rgba(0,0,0,0) 11.398507882882884%,rgb(0,0,0) 25.557784346846844%,rgba(0,0,0,.55) 41.696579391891895%,rgba(0,0,0,.13) 67.11711711711712%,rgba(0,0,0,1) 78.23057432432432%,rgba(0,0,0,0) 97.2972972972973%) add",
            mask: "linear-gradient(90deg,rgba(0,0,0,0) 11.398507882882884%,rgb(0,0,0) 25.557784346846844%,rgba(0,0,0,.55) 41.696579391891895%,rgba(0,0,0,.13) 67.11711711711712%,rgba(0,0,0,1) 78.23057432432432%,rgba(0,0,0,0) 97.2972972972973%) add",
            left: "calc(-1.5277777777777555% - min(960px,582.0033895797204px) / 2)",
          }}
        ></div>
        <div
          className=" skew-x-[45deg] maz-w-[960] h-[1269px] overflow-hidden absolute w-[441px] -top-[209px] bg-[linear-gradient(180deg,_#fff_0%_67%,_#fff0)]"
          style={{
            WebkitMask:
              "linear-gradient(90deg,rgba(0,0,0,0) 9.814893018018019%,rgb(0,0,0) 20.036247184684683%,rgba(0,0,0,.55) 28.58776745495496%,rgba(0,0,0,.42462) 40.090090090090094%,rgb(0,0,0) 48.64864864864865%,rgba(0,0,0,.26749) 54.5045045045045%,rgba(0,0,0,.13) 78.5789695945946%,rgba(0,0,0,1) 88.55398367117117%,rgba(0,0,0,0) 97.2972972972973%) add",
            mask: "linear-gradient(90deg,rgba(0,0,0,0) 9.814893018018019%,rgb(0,0,0) 20.036247184684683%,rgba(0,0,0,.55) 28.58776745495496%,rgba(0,0,0,.42462) 40.090090090090094%,rgb(0,0,0) 48.64864864864865%,rgba(0,0,0,.26749) 54.5045045045045%,rgba(0,0,0,.13) 78.5789695945946%,rgba(0,0,0,1) 88.55398367117117%,rgba(0,0,0,0) 97.2972972972973%) add",
            left: "calc(33.68055555555558% - min(960px,441.23777686332323px) / 2)",
          }}
        ></div>
        <div
          className=" skew-x-[45deg] maz-w-[960] h-[1269px] overflow-hidden absolute w-[684px] -top-[209px] bg-[linear-gradient(180deg,_#fff_0%_83.93442622950819%,_#fff0)]"
          style={{
            WebkitMask:
              "linear-gradient(90deg,rgba(0,0,0,0) 0%,rgb(0,0,0) 17.659065315315313%,rgba(0,0,0,.55) 26.641680743243246%,rgb(0,0,0) 35.230152027027025%,rgba(0,0,0,0) 47.69847972972973%,rgba(0,0,0,.13) 69.17757601351352%,rgba(0,0,0,1) 79.1455518018018%,rgba(0,0,0,0) 97.2972972972973%) add",
            mask: "linear-gradient(90deg,rgba(0,0,0,0) 0%,rgb(0,0,0) 17.659065315315313%,rgba(0,0,0,.55) 26.641680743243246%,rgb(0,0,0) 35.230152027027025%,rgba(0,0,0,0) 47.69847972972973%,rgba(0,0,0,.13) 69.17757601351352%,rgba(0,0,0,1) 79.1455518018018%,rgba(0,0,0,0) 97.2972972972973%) add",
            left: "calc(50.138888888888914% - min(960px,683.5956972282517px) / 2)",
          }}
        ></div>
        <div
          className=" skew-x-[45deg] maz-w-[960] h-[1269px] overflow-hidden absolute w-[426px] -top-[209px] bg-[linear-gradient(180deg,_#fff_0%_83.93442622950819%,_#fff0)]"
          style={{
            WebkitMask:
              "linear-gradient(90deg,rgba(0,0,0,0) 0%,rgb(0,0,0) 20.036247184684683%,rgba(0,0,0,.55) 27.577773085585587%,rgb(0,0,0) 42.34234234234234%,rgba(0,0,0,0) 48.60465934684685%,rgba(0,0,0,.13) 67.11711711711712%,rgba(0,0,0,1) 74.95249155405406%,rgb(0,0,0) 82.43243243243244%,rgba(0,0,0,.4725) 88.671875%,rgba(0,0,0,0) 97.2972972972973%) add",
            mask: "linear-gradient(90deg,rgba(0,0,0,0) 0%,rgb(0,0,0) 20.036247184684683%,rgba(0,0,0,.55) 27.577773085585587%,rgb(0,0,0) 42.34234234234234%,rgba(0,0,0,0) 48.60465934684685%,rgba(0,0,0,.13) 67.11711711711712%,rgba(0,0,0,1) 74.95249155405406%,rgb(0,0,0) 82.43243243243244%,rgba(0,0,0,.4725) 88.671875%,rgba(0,0,0,0) 97.2972972972973%) add",
            left: "calc(49.09722222222224% - min(960px,426.1711210679905px) / 2)",
          }}
        ></div>
      </div>

      <div
        className=" hidden dark:block h-full min-h-screen overflow-hidden absolute top-0 left-0 right-0 z-0 pointer-events-none flex-none order-[1008]"
        style={{
          WebkitMask:
            "linear-gradient(0deg, rgba(0, 0, 0, 0) 7.5%, rgba(0, 0, 0, 1) 86%)",
          mask: "linear-gradient(0deg, rgba(0, 0, 0, 0) 7.5%, rgba(0, 0, 0, 1) 86%)",
        }}
      >
        <div
          className=" w-full h-full opacity-5"
          style={{
            backgroundImage:
              "url('https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png')",
            backgroundSize: "128px",
            backgroundRepeat: "repeat",
          }}
        ></div>
      </div>
      <Hero />
      <FeatureBlog />
      <div className=" w-full h-60 mt-20 bg-neutral-700"> </div>
      <LatestBlog />
      <BlogType />
      <div className=" w-full h-60 mt-20 bg-neutral-700 flex justify-center items-center text-white px-5 md:px-7">
        <div className=" flex flex-col justify-center items-center gap-5">
          <div className=" rounded-2xl py-1 px-2 border border-neutral-500 text-base">
            <input
              type="text"
              placeholder="Enter  your email here "
              className=" outline-none mr-2.5 max-w-48"
            />
            <button className=" bg-neutral-400 rounded-2xl px-2 cursor-pointer hover:scale-105">
              Subscribe
            </button>
          </div>
          <h1 className=" text-2xl">No Spam</h1>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default page;

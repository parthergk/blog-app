import Header from "@/components/Header";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className=" min-h-screen w-auto">
      <Header />
      <div
        className=" h-screen overflow-hidden absolute top-0 left-0 right-0 z-0 bg"
        style={{
          background: "linear-gradient(225deg, rgb(255, 255, 255) 0%, rgb(219, 219, 219) 100%)",
          WebkitMask: "radial-gradient(125% 100% at 0% 0%, #000000 0%, rgba(0, 0, 0, 0.22449) 88.29%, rgba(0, 0, 0, 0) 100%)",
          mask: "radial-gradient(125% 100% at 0% 0%, #000000 0%, rgba(0, 0, 0, 0.22449) 88.29%, rgba(0, 0, 0, 0) 100%)",
        }}
      >
        <div className=" skew-x-[45deg] maz-w-[960] h-[1269px] overflow-hidden absolute w-[591px] -top-[209px]" style={{background: "linear-gradient(180deg,#fff 0% 83.93442622950819%,#fff0)", mask: "linear-gradient(90deg,rgba(0,0,0,0) 0%,rgb(0,0,0) 20.036247184684683%,rgba(0,0,0,0) 36.17504222972973%,rgb(0,0,0) 55.4054054054054%,rgba(0,0,0,.13) 67.11711711711712%,rgba(0,0,0,1) 78.23057432432432%,rgba(0,0,0,0) 97.2972972972973%) add", left: "calc(33.611111111111136% - min(960px,591.04338305692px) / 2)"}}></div>
        <div className=" skew-x-[45deg] maz-w-[960] h-[1269px] overflow-hidden absolute w-[582px] -top-[209px]" style={{background: "linear-gradient(180deg,#fff 0% 83.93442622950819%,#fff0)", mask: "linear-gradient(90deg,rgba(0,0,0,0) 11.398507882882884%,rgb(0,0,0) 25.557784346846844%,rgba(0,0,0,.55) 41.696579391891895%,rgba(0,0,0,.13) 67.11711711711712%,rgba(0,0,0,1) 78.23057432432432%,rgba(0,0,0,0) 97.2972972972973%) add", left: "calc(-1.5277777777777555% - min(960px,582.0033895797204px) / 2)"}}></div>
        <div className=" skew-x-[45deg] maz-w-[960] h-[1269px] overflow-hidden absolute w-[441px] -top-[209px]" style={{background: "linear-gradient(180deg,#fff 0% 67%,#fff0)", mask: "linear-gradient(90deg,rgba(0,0,0,0) 9.814893018018019%,rgb(0,0,0) 20.036247184684683%,rgba(0,0,0,.55) 28.58776745495496%,rgba(0,0,0,.42462) 40.090090090090094%,rgb(0,0,0) 48.64864864864865%,rgba(0,0,0,.26749) 54.5045045045045%,rgba(0,0,0,.13) 78.5789695945946%,rgba(0,0,0,1) 88.55398367117117%,rgba(0,0,0,0) 97.2972972972973%) add", left:"calc(33.68055555555558% - min(960px,441.23777686332323px) / 2)"}}></div>
        <div className=" skew-x-[45deg] maz-w-[960] h-[1269px] overflow-hidden absolute w-[684px] -top-[209px]" style={{background: "linear-gradient(180deg,#fff 0% 83.93442622950819%,#fff0)", mask: "linear-gradient(90deg,rgba(0,0,0,0) 0%,rgb(0,0,0) 17.659065315315313%,rgba(0,0,0,.55) 26.641680743243246%,rgb(0,0,0) 35.230152027027025%,rgba(0,0,0,0) 47.69847972972973%,rgba(0,0,0,.13) 69.17757601351352%,rgba(0,0,0,1) 79.1455518018018%,rgba(0,0,0,0) 97.2972972972973%) add", left: "calc(50.138888888888914% - min(960px,683.5956972282517px) / 2)"}}></div>
        <div className=" skew-x-[45deg] maz-w-[960] h-[1269px] overflow-hidden absolute w-[426px] -top-[209px]" style={{background: "linear-gradient(180deg,#fff 0% 83.93442622950819%,#fff0)", mask: "linear-gradient(90deg,rgba(0,0,0,0) 0%,rgb(0,0,0) 20.036247184684683%,rgba(0,0,0,.55) 27.577773085585587%,rgb(0,0,0) 42.34234234234234%,rgba(0,0,0,0) 48.60465934684685%,rgba(0,0,0,.13) 67.11711711711712%,rgba(0,0,0,1) 74.95249155405406%,rgb(0,0,0) 82.43243243243244%,rgba(0,0,0,.4725) 88.671875%,rgba(0,0,0,0) 97.2972972972973%) add", left: "calc(49.09722222222224% - min(960px,426.1711210679905px) / 2)"}}></div>
      </div>
      {children}
    </main>
  );
};

export default Layout;

import { Outlet } from "react-router-dom";
import TopBar from "../Sections/Header/TopBar";
import Footer from "../Sections/Footer/Footer";

const Root = () => {
  return (
    <>
      <header className="bg-slate-100">
        <TopBar></TopBar>
      </header>
      <main >
        <Outlet></Outlet>
      </main>
     <Footer></Footer>
    </>
  );
};

export default Root;

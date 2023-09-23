import { Outlet } from "react-router-dom";
import TopBar from "../Sections/Header/TopBar";
import Footer from "../Sections/Footer/Footer";

const Root = () => {
  return (
    <>
      <header className="container mx-auto">
        <TopBar></TopBar>
      </header>
      <main className="container mx-auto">
        <Outlet></Outlet>
      </main>
     <Footer></Footer>
    </>
  );
};

export default Root;

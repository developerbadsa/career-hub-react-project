import { Outlet } from "react-router-dom";
import TopBar from "../Sections/Header/TopBar";

const Root = () => {
  return (
    <>
      <header className="container mx-auto">
        <TopBar></TopBar>
      </header>
      <main className="container mx-auto">
        <Outlet></Outlet>
      </main>
      <footer>
            this is foter
      </footer>
    </>
  );
};

export default Root;

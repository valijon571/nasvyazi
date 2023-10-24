import { Route, Routes } from "react-router-dom";
import Hedr from "../nasvyazi/Hedr";
import About from "../nasvyazi/About";
import Career from "../nasvyazi/Career";
import Service from "../nasvyazi/Service";
import Main from "../nasvyazi/Main";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/hedr" element={<Hedr />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Career />} />
        <Route path="/service" element={<Service />} />
      </Routes>
    </>
  );
};
export default Router;

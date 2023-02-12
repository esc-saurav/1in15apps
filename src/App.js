// import Birthday from "./components/birthdayReminder/Birthday";
// import Tours from "./components/tours/Tours";
// import Review from "./components/reviewsinfo/Review";
// import Qna from "./components/question&answer/Qna";
// import Menu from "./components/menu/Menu";
// import Tabs from "./components/tabs/Tabs";
// import Slider from "./components/slider/Slider";
// import Lorem from "./components/lorem/Lorem";
// import Color from "./components/color-generator/Color";
// import Grocery from "./components/grocery/Grocery";
import Mobilenavbar from "./components/navbar/MobileNavbar";
import Navbar from "./components/navbar/Navbar";
import { useState } from "react";

function App() {
  const [openNavbar, setOpenNavbar] = useState(false);
  return (
    <>
      {/* <Birthday /> */}
      {/* <Tours/> */}
      {/* <Review /> */}
      {/* <Qna/> */}
      {/* <Menu/> */}
      {/* <Tabs/> */}
      {/* <Slider/> */}
      {/* <Lorem/> */}
      {/* <Color/> */}
      {/* <Grocery/> */}
      <Navbar
        opennavbar={openNavbar}
        openSidebar={() => setOpenNavbar((prev) => !prev)}
      />
      <Mobilenavbar open={openNavbar} />
    </>
  );
}

export default App;

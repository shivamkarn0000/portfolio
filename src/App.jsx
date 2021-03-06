import "./app.css";
import Topbar from "./component/topbar/Topbar";
import Intro from "./component/intro/Intro";
import Portfolio from "./component/portfolio/Portfolio";
import Testimonials from "./component/testimonials/Testimonials";
import Works from "./component/works/Works";
import Contact from "./component/contact/Contact";
import Menu from "./component/menu/Menu";
import { useState } from "react";



function App() {
  const [hemOpen, setHemOpen] = useState(false)
  

  return (
    <>
      <div className="app scrollbar-hidden">

        <Topbar hemOpen={hemOpen} setHemOpen={setHemOpen} />
        <Menu hemOpen={hemOpen} setHemOpen={setHemOpen} />

        <div className="sections scrollbar-hidden">
          <Intro />
          <Portfolio />
          <Works />
          <Testimonials />
          <Contact />         
        </div>

      </div>
    </>
  );
}

export default App;

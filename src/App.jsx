import { BrowserRouter } from "react-router-dom";

import { About, Contact,Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas,Experience } from "./components";

const App = () => {
  return (
    <>
        <h1 className="text-white">Hello</h1>
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience/>
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
    </>

  );
}

export default App;
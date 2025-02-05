import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
 return (
  <BrowserRouter>
       <div className='relative z-0 bg-black'>
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <StarsCanvas />
            <Navbar />
            <Hero />
          </div>
          <About />
          <Tech />
          <Experience />
          <Works />
          <div className='relative z-0'>
           <Contact />
           <StarsCanvas />    
          </div>
       </div>
  </BrowserRouter>

  )
}

export default App



import './App.css';

import Hero from './components/2-hero/Hero';
import Skills from './components/3-skills/Skills';
import Projects from './components/4-projects/Projects';
import Contact from './components/5-contact/Contact';
import Footer from './components/6-footer/Footer';


function App() {

  return (
    <div>
      <div className='mainContainer'>
        <Hero />
        <Skills />

        <Projects />

      </div>

      <div className='footerContainer'>
        <Contact />
        <Footer />


        <p className='credits'>Design idea from <a href='https://www.frontendmentor.io/'>frontendmentor</a>
        &nbsp; Coded by <a href='#Hero'>Isra Lamrani</a></p>

      </div>

    </div>
  )

}

export default App

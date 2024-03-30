

import './App.css';
import Header from './components/1-header/Header';
import Hero from './components/2-hero/Hero';
import Skills from './components/3-skills/Skills';
import Projects from './components/4-projects/Projects';
import Contact from './components/5-contact/Contact';
import Footer from './components/6-footer/Footer';


function App() {

  return (
    <div className='container border'>
      <Header/>
      <Hero/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
      
      
    </div>
  )

}

export default App

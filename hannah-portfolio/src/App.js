import Nav from './components/nav/nav'
import Resume from './components/resume/resume'
import Projects from './components/projects/projects'
import Footer from './components/Footer/footer'
import Skills from './components/skills/skills'

import './App.css';

function App() {
  return (
    <div className="App">
     <Nav />
     <Projects />
     <Skills />
     <Resume />
     <Footer />
    </div>
  );
}

export default App;

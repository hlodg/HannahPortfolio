import Nav from './components/nav/nav'
import Resume from './components/resume/resume'
import Projects from './components/projects/projects'
import Footer from './components/Footer/footer'

import './App.css';

function App() {
  return (
    <div className="App">
     <Nav />
     <Projects />
     <Resume />
     <Footer />
    </div>
  );
}

export default App;

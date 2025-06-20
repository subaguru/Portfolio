import './App.css';
import About from './components/About';
import Experience from './components/Experience';
import Heroine from './components/Avatar';
import NavBar from './components/NavBar';
import "@fontsource/outfit";
import "@fontsource/roboto";
import Project from './components/Project';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Heroine/>
      <About/>
      <Experience/>
      <Project/>
      <Contact/>
    </div>
  );
}

export default App;

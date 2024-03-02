import Profile from './Compenent/Profile';
import './App.css';
import NavBar from './Compenent/NavBar' ;
import Experiences from './Compenent/Experiences';
import Skills from './Compenent/Skills';
import Projects from './Compenent/Projects';
import About from './Compenent/About';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Profile/>
      <Skills/>
      <Experiences/>
      <Projects/>
      <About/>
    </div>
  );
}

export default App;

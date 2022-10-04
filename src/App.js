import React, {useState} from "react";
import "./styles/App.css"
import Navbar from "./components/Navbar";
import Resume from "./components/Resume";
// import About from "./components/About";


//Import Components

function Header (){
  return (
    <header>
        <h1></h1>
    </header>
  )
}

function Main (){
  return(
    <main>
      <h2></h2>
    </main>
  )
}

function Footer (){
  return(
    <footer>
      <h3></h3>
    </footer>
  )
}

function App () {
  const [resume, setResume] = useState(false);
  const [about, setAbout] = useState(false);

  return(
    <div className="app">
      <div>
        <Navbar setResume={setResume} setAbout={setAbout} about={about} />
        <Resume resume={resume}/>
        {/* <About about={about}/> */}
        <Header/>
        <Main />
        <Footer/>
      </div>
      
    </div>
  )
};

export default App;

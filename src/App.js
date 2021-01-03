import React from "react";
// import img1 from "./Images/backg3.jpg";
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './Header';
import Myintro from './Myintro';
import MySkills from './MySkills';
// import Container from "react-bootstrap/Container";
// import ProjectCard from './ProjectCard';
// import Projects from './Projects';
import MyProjects from './MyProjects';
import Foot from './Foot';
import Particles from "react-particles-js";
import { ParticlesOptions } from "./ParticlesOptions";
import Allcertificates from './Allcertificates'
import "./App.css";
function App() {
 
    const object ={
       // backgroundImage: 'url('+img1+')',
       backgroundColor:' rgb(38, 97, 116)',
        backgroundSize: "cover",
        backgroundRepeat: 'no-repeat',
       // backgroundAttachment:'fixed',
        overflow: 'hidden',
        position: 'relative',
        
          // width: '100vw',
          // height: "160vh",
       // color: "#f5f7f5"
      }; 
     
   
  return (<>
      <div
        class="bg_image"
        style={object}
      >
       
        <CssBaseline/>
        <Particles
        className="particles particles-box"
        params={ParticlesOptions}
      />
        <Header />
       
        <Myintro />
       
        <MySkills />    
        <Allcertificates/>
        <MyProjects/>
        <Foot/>
      </div>
      </>
  );
}

export default App;
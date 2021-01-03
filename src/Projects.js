import React, { useEffect , useState} from 'react';
import mob from "./Images/bck.jpg";
import tab from "./Images/tablet.jpg";
import { makeStyles } from '@material-ui/core/styles';
import Aos from 'aos';
import 'aos/dist/aos.css'; 
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import ProjectData from './ProjectData';
import ProjectCard from './ProjectCard';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const useStyles = makeStyles((theme)=>({ 
    skill:{
        textAlign:'center',
       // backgroundImage: 'url('+bck+')',
        width: '100vw',
         // height: "160vh",
        padding:'2%',
        fontFamily: 'Nunito',
        height: 'max-content',
        color:'white',
     },
     cardbox:{
         alignItems:'center',
//height: 'max-content',
       
       display: 'inline-block',
      // display: 'table',
       backgroundColor:'transparent',
      backgroundSize: "cover",
      backgroundRepeat: 'no-repeat',
       '& > *': {
        margin: theme.spacing(1),
      },
        
     }
 }));

const Projects = () =>{


    const classes = useStyles();

  
    useEffect(() => {
       Aos.init({duration:3000});
    }, []);

    return(
        <>  
            <div className={classes.skill} >
         
         <h1 >My Projects</h1>
        
         
         <Toolbar className={classes.cardbox}>
          {ProjectData.map((project)=>(
              <ProjectCard
                  title={project.title}
                  desc={project.desc}
                  link={project.link}
                  techuse={project.techuse}
              ><br/></ProjectCard>
          ))}
          
       </Toolbar>
      
       </div>
        </>
    );
}
export default Projects;
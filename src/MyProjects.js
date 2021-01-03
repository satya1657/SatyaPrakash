import React, { useEffect } from 'react';
// import mob from "./Images/bck.jpg";
// import tab from "./Images/tablet.jpg";
import { makeStyles } from '@material-ui/core/styles';
import Aos from 'aos';
import 'aos/dist/aos.css'; 
// import Box from '@material-ui/core/Box';
// import Toolbar from '@material-ui/core/Toolbar';
// import Button from '@material-ui/core/Button';
import ProjectData from './ProjectData';
 //import ProjectCard from './ProjectCard';
import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import BoxPro from './BoxPro';


const useStyles = makeStyles((theme)=>({ 
    skill:{
        textAlign:'center',
       // backgroundImage: 'url('+bck+')',
        width: '100vw',
         // height: "160vh",
        padding:'2%',
        fontFamily: 'Nunito',
        height: 'max-content',
        justifyContent:'center',
        color:'black',
     },
     cardbox:{
         alignItems:'center',
         height: 'max-content',
       // float:'left',
      // display: 'flex',
       display: 'table',
      
       backgroundColor:'transparent',
      backgroundSize: "cover",
      backgroundRepeat: 'no-repeat',
      justifyContent:'center',
       '& > *': {
        margin: theme.spacing(5),
      },
        
     }
 }));

const MyProjects = () =>{


    const classes = useStyles();

  
    useEffect(() => {
       Aos.init({duration:3000});
    }, []);

    return(
        <>  
            <div id="projects" className={classes.skill} >
         
         <h1 style={{color:'white'}} > Projects</h1>
        
         <Row className="d-flex justify-content-around">
         {/* <Toolbar  className={classes.cardbox}> */}
        
         <BoxPro 
            pic={ProjectData[0].pic}
             title={ProjectData[0].title}
             desc={ProjectData[0].desc}
             link={ProjectData[0].link}
             techuse={ProjectData[0].techuse}
         />
        
       

        {/* <Toolbar style={{display: 'flex'}} className={classes.cardbox}> */}
         <BoxPro
         
         pic={ProjectData[2].pic}
             title={ProjectData[2].title}
             desc={ProjectData[2].desc}
             link={ProjectData[2].link}
             techuse={ProjectData[2].techuse}
         />
       {/* </Toolbar> */}

       {/* <Toolbar style={{display: 'flex'}} className={classes.cardbox}> */}
       <BoxPro
         pic={ProjectData[1].pic}
             title={ProjectData[1].title}
             desc={ProjectData[1].desc}
             link={ProjectData[1].link}
             techuse={ProjectData[1].techuse}
         />
          {/* </Toolbar> */}

        {/* <Toolbar  className={classes.cardbox}> */}
              <BoxPro 
              pic={ProjectData[3].pic}
            title={ProjectData[3].title}
             desc={ProjectData[3].desc}
             link={ProjectData[3].link}
             techuse={ProjectData[3].techuse}
              />
            
         {/* </Toolbar> */}

         {/* <Toolbar className={classes.cardbox}> */}
       <BoxPro
         pic={ProjectData[4].pic}
             title={ProjectData[4].title}
             desc={ProjectData[4].desc}
             link={ProjectData[4].link}
             techuse={ProjectData[4].techuse}
         />

           
            
         {/* </Toolbar> */}
        
        
       </Row>
      
       </div>
        </>
    );
}
export default MyProjects;
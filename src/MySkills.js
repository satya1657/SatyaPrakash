import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import 'aos/dist/aos.css'; 
import SkillCard from './SkillCard';
// import { skills } from "./SkillData";
// import bck from "./Images/backg1.jpg";

const useStyles = makeStyles((theme)=>({ 
     skill:{
        textAlign:'center',
       // backgroundImage: 'url('+bck+')',
       // width: '100vw',
         // height: "160vh",
       
        fontFamily: 'Nunito',
        height: 'max-content',
        color:'white',
        marginTop:'3%',
      
     },
     cardbox:{
        height: 'max-content',
        display: 'flex',
        backgroundColor:'transparent',
        backgroundSize: "cover",
        backgroundRepeat: 'no-repeat',
        marginBottom:'5.0rem',
     }
 }));


const MySkills = () =>{

      const classes = useStyles();

    return(
        <>
        <div id="skills" className={classes.skill} >
         
          <h1 >Tech  Skills</h1>
          <Toolbar className={classes.cardbox}>
           <SkillCard/>   
        </Toolbar>
       
        </div>
        </>
    );
}
export default MySkills;
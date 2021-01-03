import React, { useEffect , useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import 'aos/dist/aos.css'; 
import SkillCard from './SkillCard';

// const useStyles = makeStyles((theme)=>({ 
//      skill:{
//          textAlign:'center',
//         backgroundColor:'green',
//         margin:'5%',
//         padding:'5%',
//         display: 'flex',
//         fontFamily: 'Nunito',
//      },
//  }));

const skill={
    textAlign:'center',
    backgroundColor:'green',
    margin:'5%',
    padding:'5%',
    display: 'flex',
    fontFamily: 'Nunito',
};

const Skills = () =>{

    //  const classes = useStyles();

    return(
        <>
        <div style={skill} >
          <h1 >TECH SKILLS</h1>
           <SkillCard/>
           <SkillCard/>

        </div>
        </>
    );
}
export default Skills;
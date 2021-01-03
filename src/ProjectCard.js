import React, { useEffect , useState} from 'react';
import tab from "./Images/tablet.jpg";
import { makeStyles } from '@material-ui/core/styles';
import Aos from 'aos';
import 'aos/dist/aos.css'; 
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme)=>({ 
    projcard:{ 
        backgroundColor:'transparent',
       // backgroundImage:'url('+mob+')',
        backgroundSize: 'cover',
        height: '85vh',
        width:'90%',
        textAlign: 'center',
        fontFamily: 'Nunito',
        borderRadius:'20px',
        //padding:'1%',
    },
    image:{
        height:'700px',
        width:'1000px',
        borderColor: 'black',
        borderWidth: 'thick',
    },
   btnwrap:{
       display:'flex',
       alignItems:'center',
       '& :hover':{
        transform: 'scale(1.05)',
     },
       '& > *': {
        margin: theme.spacing(1),
      },
   },
   content:{
       backgroundColor:'transparent',
      // margin:'2%',
       color:'black',
       '& :hover':{
        transform: 'scale(1.007)',
     },
   }  ,
   title:{
    fontFamily: 'Nunito',
    color:'white',    
   },
   col:{
         color:'black',
         backgroundColor:'transparent',      
   },
    screen:{
        backgroundImage:'url('+tab+')',
        backgroundSize: 'cover',
        borderRadius:'20px',
        padding:'8%',
        color:'green',
        height: '60vh',
        width:'100vh',
        borderStyle: 'groove',
    }

 }));

const ProjectCard = (props) =>{


    const classes = useStyles();

   const [string, setstring] = useState("Welcome to My project");
   const showDesc =() =>{
       setstring(props.desc);
   }
  
const showCode =() =>{
    setstring(props.link);
}  
const showTech =() =>{
    setstring(props.techuse);
}

    useEffect(() => {
       Aos.init({duration:3000});
    }, []);

    return(
        <>  
             <div  className={classes.projcard}>
              <div className={classes.col}>  <span className={classes.title}>  <h3>{props.title}</h3></span></div>
                  <Toolbar className={classes.btnwrap}>
                        <Button onClick={showDesc} variant="contained" size="small" color="primary" className={classes.margin}>Description </Button> 
                        <Button onClick={showCode} variant="contained" size="small" color="primary" className={classes.margin}>Source Code </Button> 
                        <Button onClick={showTech} variant="contained" size="small" color="primary" className={classes.margin}>Technology Used</Button> 
                       
                  </Toolbar>
                  <Toolbar className={classes.content}>
                        <div  className={classes.screen} >
                               <p> {string} </p>
                              
                        </div>
                  </Toolbar>

             </div>
        </>
    );
}
export default ProjectCard;
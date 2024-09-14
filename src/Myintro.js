import React, { useEffect , useState} from 'react';
import my from "./Images/myphoto.jpg";
import { makeStyles } from '@material-ui/core/styles';
import Aos from 'aos';
import 'aos/dist/aos.css'; 
// import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme)=>({ 
     introdiv:{
        backgroundColor: 'yellow',
        justifyContent:'center',
        textAlign:'center',
        padding: '2.0rem',
        width:'100%',
       // display: 'flex',

        fontFamily: 'Nunito',
        height: 'auto',
        color:'white',
     },
     introtext:{
         backgroundColor:'white',
         flex: '0 0 65%',
        // opacity: '0.9',
         fontSize:'1.7rem',
         textAlign:'center',
         color:"black",
         width: '100vh',
         height: "auto",
         float: 'left',
         padding: '2.0rem',
         //border: '.2rem solid red',
         fontFamily: 'Nunito',
         borderRadius:'2.0rem', 
         margin:'.0rem',
         marginBottom:'8.0rem',

     },
head:{
    //width:'fit-content',
   // backgroundColor:'yellow',
    fontFamily: 'Nunito',
    textAlign:'center',
    color:'white',
},
     tool:{ // width:'100%',
           //  backgroundColor:'blue',
             color:'black',
             textAlign:'center',
             justifyContent:'center',
             
        '& :hover':{
         
        },
    }  ,  

    myphoto:{
        //backgroundColor:'',
        flex:'1',
       
        float: 'left',
        padding: '2.0rem',
        //border: '.2rem solid red',
        backgroundImage: 'url('+my+')',
        backgroundSize: "cover",
        backgroundRepeat: 'no-repeat',
        borderRadius:'4.0rem',
        width: '40vh',
        height: "60vh",
       // margin:'4.0rem',
       
    },
 }));



 
const Myintro = () =>{
    const classes = useStyles();
    useEffect(() => {
       Aos.init({duration:3000});
    }, []);

    return(
        <>
            <div    className={classes.itrodiv}>
            <div id="about" className={classes.head}><h1 >About me</h1></div>
            <Toolbar className={classes.tool}>
            
           
                <div   className={classes.introtext}>
               
                <div  data-aos="zoom-in" className={classes.myphoto}> </div>
                  
            <p >Hello! I'm <span style={{color:' rgb(245, 6, 117)'}}>Satyaprakash</span>, a dedicated Software Developer 
            with 3 years of experience in data engineering, DevOps, and UI development.
            I specialize in building scalable, high-performance systems using technologies like Java, Python, Scala, MATLAB, 
            Spring Boot, ReactJS, Spark, AWS, Docker, Kubernetes, and more. 
            My career has been marked by a strong commitment to optimizing system 
            efficiency and enhancing performance, exemplified by my contributions to projects 
            that have handled thousands of requests per minute and processed billions of data points.
</p>            
            
                </div>
               
             </Toolbar>   
             </div>
        </>
    );
}
export default Myintro;

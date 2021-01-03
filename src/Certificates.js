import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Aos from 'aos';
import 'aos/dist/aos.css'; 
const useStyles = makeStyles((theme)=>({ 
     root:{
            backgroundColor:'aquamarine',
            //opacity:'0.4',
            fontFamily: 'Nunito', 
           color:'white',
           justifyContent:'center',
           alignItems:'center',
           textAlign:'center',
     },
     box:{
         //opacity:'0.7',
        // margin:'20%',
         marginTop:'2.0rem',
         backgroundColor:'white',
         textAlign:'center',
         alignItems:'center',
        overflow:'hidden',
         height:'5%',
         width:'50%',
         boxShadow: '1.0rem 1.5rem 1.8rem -.6rem black',
         borderRadius:'1.0rem',
         color:'black',
         paddingTop:'1.0rem',
        // display:'flex',
        //float:'right',
        // justiftContent:'space-between',
        
        box:{
            '& > *': {
                margin: theme.spacing(3),
              },
          },
         
     },
     boxwrap:{
        // dispaly:'flex',
        opacity:'0.8',
        justifyContent:'center',
        //display:'block',
        flexDirection: 'column',
        '& > *': {
          margin: theme.spacing(1),
        },
        '& :hover':{
            transform: 'scale(1.02)',
            backgroundColor:' rgb(181, 224, 238)',
            cursor:'pointer',
         },
        
     },
 
   margin:{
    
       alignSelf:'right',
   },
    
 }));

const Certificates = (props) =>{


    const classes = useStyles();


    useEffect(() => {
       Aos.init({duration:3000});
    }, []);

    return(
        <>  
                  <a data-aos="fade-right" style={{textDecoration: 'none' ,}} className={classes.box}
                   href={props.link}
                   target='_blank'
                   ><h3 style={{color:'black',backgroundColor:'transparent','& :hover':{cursor:'pointer', 
                   }, }}>{props.title}</h3><h6 style={{color:'black',backgroundColor:'transparent','& :hover':{cursor:'pointer', 
                   }, }}>{props.desc}</h6></a> 
        </>
    );
}
export default Certificates;
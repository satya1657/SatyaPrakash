import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Aos from 'aos';
import 'aos/dist/aos.css'; 
import Toolbar from '@material-ui/core/Toolbar';
import Certificates from './Certificates';
import CertData from './CertData';

const useStyles = makeStyles((theme)=>({ 
    root:{
        backgroundColor:'transparent',
        //opacity:'0.4',
        fontFamily: 'Nunito', 
       color:'white',
       textAlign:'center',
 },
 boxwrap:{
    // dispaly:'flex',
    //opacity:'0.8',
    justifyContent:'center',
    //display:'block',
    flexDirection: 'column',
    marginBottom:'5.0rem',
    '& > *': {
      margin: theme.spacing(1),
    },
    '& :hover':{
        transform: 'scale(1.03)',
        backgroundColor:' rgb(181, 224, 238)',
        cursor:'pointer',
     },
    
 },
 }));

const Allcertificates = () =>{


    const classes = useStyles();


    useEffect(() => {
       Aos.init({duration:3000});
    }, []);

    return(
        <>  
              <div id="certificates" className={classes.root}>
                  <h1>Certifications</h1>
                  <Toolbar className={classes.boxwrap}>      
                  {CertData.map((certificates, index) => (
               <Certificates
                  title={certificates.title}
                  desc={certificates.desc}
                 link= {certificates.link}
               />
    ))}
                     
                     
                  </Toolbar>
              </div>
              
      
        </>
    );
}
export default Allcertificates;
import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Aos from 'aos';
import 'aos/dist/aos.css'; 
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import MailIcon from '@material-ui/icons/Mail';
import InstagramIcon from '@material-ui/icons/Instagram';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const useStyles = makeStyles((theme)=>({ 
    root:{
        backgroundColor:' rgb(33, 48, 54)',
        textAlign:'center',
       paddingTop:'1%',
       color:'white',
    },
    iconwrap:{
        justifyContent:'center',
        paddingBottom:'0.5%',  
       // backgroundColor:'yellow',   
    },
    address:{
        paddingTop:'1%',
        backgroundColor:'black',
       justifyContent:'center',  
       color:'white',
       fontSize:'1rem',
    },
    button:{
        margin:'2%',
        
    },
 }));

const Foot = () =>{


    const classes = useStyles();

  
    useEffect(() => {
       Aos.init({duration:3000});
    }, []);

    

    return(
        <>  
            <div id="contacts" className={classes.root}>
                <h4>Social Media Contacts</h4><hr/>
                <Toolbar className={classes.iconwrap}>
                <Row className="d-flex justify-content-around">
                <Col md={8}>
                <Button  variant="contained"
                        color="default"
                        className={classes.button}
                         href="https://github.com/satya1657"
                        target='_blank'
                        endIcon={<GitHubIcon/>}
                        >
                         {/* Github */}
                </Button>
                <Button variant="contained"
                        color="default"
                        className={classes.button}
                        href='https://www.linkedin.com/in/satyaprakash-rajput/' 
                         target='_blank'
                        endIcon={<LinkedInIcon/>}
                        >
                         {/* LinkedIn */}
                </Button>
                <Button variant="contained"
                        color="default"
                        className={classes.button}
                        href='https://www.facebook.com/profile.php?id=100054384287859'
                        target='_blank'
                        endIcon={<FacebookIcon/>}
                        >
                         {/* Facebook */}
                </Button>
                <Button variant="contained"
                        color="default"
                        className={classes.button}
                         href='https://twitter.com/satyapr77589975'
                         target='_blank'
                        endIcon={<TwitterIcon/>}
                        >
                        {/* Twitter */}
                </Button>
                <Button variant="contained"
                        color="default"
                        className={classes.button}
                         href='https://mail.google.com/mail/u/5/#inbox' 
                         target='_blank'
                        endIcon={<MailIcon/>}
                        >
                        {/* Mail */}
                </Button>
                <Button variant="contained"
                        color="default"
                        className={classes.button}
                         href='https://www.instagram.com/satyaprakash1196/'
                         target='_blank'
                        endIcon={<InstagramIcon/>}
                        >
                </Button>
                </Col>
                </Row>
                </Toolbar>
                 <Toolbar className={classes.address}>
                     <p>Website is designed by<br/> @Satyaprakash(IIIT Vadodara)<br/> 201851112@iiitvadodara.ac.in</p>
                 </Toolbar>
            </div>

           
        </>
    );
}
export default Foot;
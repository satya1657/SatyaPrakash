import React, { useEffect , useState} from 'react';
import mob from "./Images/bck.jpg";
import tab from "./Images/tablet.jpg";
import { makeStyles } from '@material-ui/core/styles';
import Aos from 'aos';
import 'aos/dist/aos.css'; 
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import GitHubIcon from '@material-ui/icons/GitHub';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

const useStyles = makeStyles((theme)=>({ 
      root:{
          backgroundColor:'white',
          height:'50%',
          width:'33rem',
          borderRadius:'.5rem',
          margin:'2%',
          marginTop:'3%',
          marginBottom:'3%',
          
      },
      title:{
          width:'100%',
          textAlign:'center',
          paddingTop:'.7rem',
         
      },
      image:{
          justifyContent:'center',
         
      },
      photo:{
          height:'20.0rem',
          width:'100%',
          borderStyle: 'solid',
          borderWidth: '0.05rem',
          borderRadius:'.5rem',
          
      },
      link:{
          justifyContent:'center',
          backgroundColor:' rgb(171, 196, 206)',
          borderBottomLeftRadius:'.5rem',
          borderBottomRightRadius:'.5rem',
      },
    
    
 }));

const BoxPro = (props) =>{


    const classes = useStyles();


    useEffect(() => {
       Aos.init({duration:3000});
    }, []);

    return(
        <>
            <div data-aos="fade-up"
       className={classes.root}>   
                 <div className={classes.title}> <h4>{props.title}</h4> </div>
                 <Toolbar className={classes.image}><img className={classes.photo} src={props.pic} /> </Toolbar>
        <Accordion>     
             <Card>
                 <Accordion.Toggle
                     
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 h5 text-center  accordian-main  "
                    >
                     PROJECT DETAILS
                 </Accordion.Toggle>

         <Accordion.Collapse eventKey="0" className="text-left">

                
                 <CardContent>
                        <Typography gutterBottom variant="h6" >
                            Description
                        </Typography>
                        <Typography variant="body1" color="textSecondary" component="p">
                           {props.desc }
                        </Typography>
                        <hr/>
                        <Typography gutterBottom variant="h6" component="h6">
                        Technology Used
                        </Typography>
                        <Typography variant="body1" color="textSecondary" component="p">
                            {props.techuse}
                        </Typography>
                </CardContent>

           </Accordion.Collapse> 
           </Card>
    </Accordion>      
                        <Toolbar className={classes.link}>
                        <Button

                            
                                     variant="contained"
                                    color="default"
                                    className={classes.button}
                                    href={props.link} 
                             target='_blank'
                                    endIcon={<GitHubIcon/>}
                                >
                                    Github
                       </Button>
    
                         </Toolbar>
                 
            </div>     
        </>
    );
}
export default BoxPro;
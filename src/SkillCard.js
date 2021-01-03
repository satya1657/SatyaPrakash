import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import  skills  from "./SkillData";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Aos from 'aos';
import 'aos/dist/aos.css'; 
// import Divider from '@material-ui/core/Divider';



const useStyles = makeStyles((theme)=>({ 
    root:{
      
        fontFamily: 'Nunito',
        //backgroundColor:'yellow',
        color:'black',
        width:'30vh', 
        opacity:'0.3',
        margin:'1%',
        float:'left',
       
    },
    hov:{
       // float:'left',
       margin:'15%',
        '& :hover':{
            transform: 'scale(1.02)',
         },
    },
    maindiv:{
        display:'flex',
    },
    card:{
           width : '35vh', 
           margin:'4%',
          paddingLeft:'10%',
          paddingRight:'10%',
    },
    cardbody:{
        textAlign:'center',
        color:'black',
        height: 'max-content',
        
       
    },
    cardtitle:{
        textAlign:'center',
        fontSize: '2.0rem',
        fontWeight: '700',
        fontFamily: 'Nunito',
    },
    cardtext:{
        fontFamily: 'Nunito',
          
    },
    imgsize:{
        height:'8%',
        width:'8%',
        
    }
 }));


const SkillCard =() =>{


    const classes = useStyles();

    useEffect(() => {
        Aos.init({duration:3000});
     }, []);

    return(  
        <>  
         <CardDeck>
        <Row className="d-flex justify-content-around">   
        <Col md={2}>
        <div data-aos="zoom-in"  className={classes.hov}>
         <div classname={classes.root}>
                    <Card className={classes.card}>
                        {/* <Card.Img variant="top" src="holder.js/10.0rem160" /> */}
                            <Card.Body className={classes.cardbody}>
                                <Card.Title className={classes.cardtitle}>Frontend</Card.Title>
                                <hr/>
                                    <Card.Text className={classes.cardtext}>
                                    {skills.frontend.map((skill, index) => (
                    <span className="p-2" key={index}>
                      <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                      
                        <Image style={{height:'12%',width:'12%',}} src={skill.imgSrc} alt={skill.imgAltText} ></Image> {skill.skillName}<hr/>
                        
                      </a>
                    </span>
                  ))}
                                    </Card.Text>
                            </Card.Body>
                    </Card>
                </div> 
            </div>       
                </Col>


             <Col md={2}> 
             <div data-aos="zoom-in" className={classes.hov}>   
                <div classname={classes.root}>
                    <Card className={classes.card}>
                        {/* <Card.Img variant="top" src="holder.js/10.0rem160" /> */}
                            <Card.Body className={classes.cardbody}>
                                <Card.Title className={classes.cardtitle}>Backend</Card.Title>
                                <hr/>
                                    <Card.Text className={classes.cardtext}>
                                    {skills.backend.map((skill, index) => (
                    <span className="p-2" key={index}>
                      <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                      
                        <Image style={{height:'12%',width:'12%',}} src={skill.imgSrc} alt={skill.imgAltText} ></Image> {skill.skillName}<hr/>
                        
                      </a>
                    </span>
                  ))}
                                    </Card.Text>
                            </Card.Body>
                    </Card>
                </div>   
            </div> 


            <div data-aos="zoom-in" className={classes.hov}> 
                <div classname={classes.root}>
                    <Card className={classes.card}>
                        {/* <Card.Img variant="top" src="holder.js/10.0rem160" /> */}
                            <Card.Body className={classes.cardbody}>
                                <Card.Title className={classes.cardtitle}>Hosting Platforms</Card.Title>
                                <hr/>
                                    <Card.Text className={classes.cardtext}>
                                    {skills.hostingPlatforms.map((skill, index) => (
                    <span className="p-2" key={index}>
                      <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                      
                        <Image style={{height:'12%',width:'12%',}} src={skill.imgSrc} alt={skill.imgAltText} ></Image> {skill.skillName}<hr/>
                        
                      </a>
                    </span>
                  ))}
                                    </Card.Text>
                            </Card.Body>
                    </Card>
                </div> 
            </div>        
                </Col>


        <Col md={2}> 
            <div data-aos="zoom-in" className={classes.hov}>
                <div classname={classes.root}>
                    <Card className={classes.card}>
                        {/* <Card.Img variant="top" src="holder.js/10.0rem160" /> */}
                            <Card.Body className={classes.cardbody}>
                                <Card.Title className={classes.cardtitle}>Databases</Card.Title>
                                <hr/>
                                    <Card.Text className={classes.cardtext}>
                                    {skills.databases.map((skill, index) => (
                    <span className="p-2" key={index}>
                      <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                      
                        <Image style={{height:'12%',width:'12%',}} src={skill.imgSrc} alt={skill.imgAltText} ></Image> {skill.skillName}<hr/>
                        
                      </a>
                    </span>
                  ))}
                                    </Card.Text>
                            </Card.Body>
                    </Card>
                </div>    
            </div>

            <div data-aos="zoom-in" className={classes.hov}>
                <div classname={classes.root}>
                    <Card className={classes.card}>
                        {/* <Card.Img variant="top" src="holder.js/10.0rem160" /> */}
                            <Card.Body className={classes.cardbody}>
                                <Card.Title className={classes.cardtitle}>Version Control</Card.Title>
                                <hr/>
                                    <Card.Text className={classes.cardtext}>
                                    {skills.versionControl.map((skill, index) => (
                    <span className="p-2" key={index}>
                      <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                      
                        <Image style={{height:'15%',width:'15%',}} src={skill.imgSrc} alt={skill.imgAltText} ></Image> {skill.skillName}<br/>
                        
                      </a>
                    </span>
                  ))}
                                    </Card.Text>
                            </Card.Body>
                    </Card>
                </div>
            </div>     
        </Col> 

        <Col md={2}>
        <div data-aos="zoom-in"  className={classes.hov}>
         <div classname={classes.root}>
                    <Card className={classes.card}>
                        {/* <Card.Img variant="top" src="holder.js/10.0rem160" /> */}
                            <Card.Body className={classes.cardbody}>
                                <Card.Title className={classes.cardtitle}>Programming Languages</Card.Title>
                                <hr/>
                                    <Card.Text className={classes.cardtext}>
                                    {skills.programmingLanguages.map((skill, index) => (
                    <span className="p-2" key={index}>
                      <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                      
                        <Image style={{height:'15%',width:'15%',}} src={skill.imgSrc} alt={skill.imgAltText} ></Image> {skill.skillName}<hr/>
                        
                      </a>
                    </span>
                  ))}
                                    </Card.Text>
                            </Card.Body>
                    </Card>
                </div> 
            </div>       
         </Col>


         </Row>
      </CardDeck>
        </>
    );
}
export default SkillCard;
import React,{useEffect , useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import logo from "./Images/logo.jpg";
// import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
// import Particles from "react-particles-js";
// import { ParticlesOptions } from "./ParticlesOptions";
import { Link} from 'react-scroll';

const useStyles = makeStyles((theme)=>({

  headdiv:{
       display:'flex',
       justifyContent:'center',
       alignItems:'center',
       height:'70rem',
     //  position: 'relative',
  },
  
  appbar: {
    fontFamily: 'Nunito', 
    backgroundColor: 'transparent',
    justifyContent:'right',
    backgroundColor:'rgb(33, 48, 54)',
    opacity:'0.8',
    display:'flex',
  },

  wrapper:{
     fontFamily: 'Nunito', 
     justifyContent:'right',
     //width:'100rem',
    // marginLeft: '45%',
     float:'right',
     backgroundColor:'yellow',
    // flexGrow:'1',
     //float:'right',
     //alignContent:'right',
    //alignItems:'right',
     backgroundColor:'transparent',
     // width: '100%',
      opacity:'0.8',
      '& > *': {
        margin: theme.spacing(1),
      },
     // margin:'0 auto',
      
    },
    title:{
             marginRight:'10.0rem', 
             
         
    },
    dark:{
      fontFamily: 'Nunito', 
           color:'white',
           fontSize:'3.5rem',
              },
    margin:{
              
             // width :'5.0rem',
             fontFamily: 'Nunito', 
             // margingLeft : '80%',
              backgroundColor : 'rgb(241, 246, 247)',
              borderRadius:'.5rem',
              color: "aquarine", 
              //margingLeft:'1.0rem',
              alignSelf:'right',
              '& :hover':{
                  
                  //color: "#A2FFA1",
                 // backgroundColor : 'rgb(0, 246, 247)',
               },
    },
    giveColor:{
      color:' rgb(223, 209, 12)',
      textAlign:'center',

    },
   greet:{
          textAlign:'center',
   } ,
   godown:{
            color:'white',
            fontSize:'4rem',
            '& :hover':{
              //display : 'block',
              color: ' darkorange',
              //backgroundColor : 'bisque',
           }, 
   },
   downhover:{
     
      '& :hover':{
      //display : 'block',
      borderRadius:'3.5rem',
      color: " rgb(63, 121, 10)",
      backgroundColor : 'rgb(0, 246, 247)',
      }, 
   },
   equal:{
     float:'left',
   },
  links:{
         fontSize:'1.6rem',
          display: 'inline-block',
         listStyle: 'none',
        // backgroundColor:'green',
        // width:'auto',
         //textTransform: 'uppercase',
         justifyContent: 'space-around',
         '& > *': {
          margin: theme.spacing(1),
        },  
        '& :hover':{
          cursor:'pointer',
          textDecoration:'underline', 
  color: "aquamarine",
  // backgroundColor : 'rgb(0, 246, 247)',
}, 
   },
   anch:{
        float:'right',
   },
      
}));



const Header = () =>{
    const classes = useStyles();

     const [check, setcheck] = useState(false);
     useEffect(() => {
      setcheck(true);
     }, []);

   return(<>
             <div id="home" className={classes.headdiv}>
                  <AppBar className={classes.appbar} elevation={0}>
                  <div className={classes.equal}>
                      {/* <h1 classNam={classes.title}>SP<span className={classes.giveColor}>World</span></h1> */}
                      <img style={{height:'5rem',width:'7rem',marginLeft:'1%',borderRadius:'5.0rem'}}src={logo}/>
                  <Toolbar className = {classes.wrapper}>
                  <ul className={classes.links}>
          <li className={classes.anch}><Link  to="contacts" spy={true} smooth={true}>Contact</Link></li>
          <li className={classes.anch}><Link  to="projects" spy={true} smooth={true}>Projects</Link></li>
          <li className={classes.anch}><Link  to="certificates" spy={true} smooth={true}>Certificates</Link></li>
          <li className={classes.anch}><Link  to="skills" spy={true} smooth={true}>Skills</Link></li>
          <li className={classes.anch}><Link  to="about" spy={true} smooth={true}>About</Link></li>
          <li  className={classes.anch}><Link  activeClass="active" to="home" spy={true} smooth={true}>Home</Link></li>
            </ul>
                   </Toolbar>  
                   </div>
                  </AppBar>
                <Collapse in={check} {...(check ? { timeout: 5000 } : {})} collapsedHeight={50}>  
                  <div className={classes.greet}>
                    <h1 className={classes.dark}>Welcome To <br/>Satya's <span className={classes.giveColor}>World</span></h1>
                    <br/><br/><br/><br/><br/><br/><br/>
                    <Link  to="about" spy={true} smooth={true}>
                    <IconButton >
                      <ExpandMoreIcon variant="outlined" className={classes.godown}/>
                    </IconButton></Link>
                  </div>
                </Collapse>  
             </div>
   </>);

}
export default Header;
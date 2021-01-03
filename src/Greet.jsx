import React from 'react';

const st={};

function Greet(){
    const today=new Date();
    const time=today.getHours();
    let greet="";
    if(time>=1 && time<=12){
        greet="Good Morninng";
        st.color="blue";
    }else if(time>12 && time<=7){
        greet="Good AfterNoon";
        st.color="green";
    }else{
        greet="Good Night";
        st.color="red";
    }
    return <h1 style={st}>{greet}</h1> ;
}

export default Greet;
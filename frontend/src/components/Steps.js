import React from 'react'

export default function Steps(props) {
  return (
    <div style={{borderWidth:'2px', borderStyle:'solid', textAlign:'center',width:'400px', height:'250px'}}>
        <img src={props.img} alt='...' style={{paddingTop:'10px'}}></img>
        <span><h5>{props.stepnumber}: </h5><h6>{props.heading}</h6></span>
        <p>{props.text}</p>
    </div>
  )
}

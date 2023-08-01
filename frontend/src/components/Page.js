import React, { useEffect, useState } from 'react'
import Steps from './Steps'
//import axios from 'axios'

export default function Page(props) {

  // const [image,setImage]=useState('')
  // useEffect(()=>{
  //   async function fetch(){
  //     const responce=await axios.get('http://127.0.0.1:8000/companies');

  //     console.log(responce.data);
  //     setImage(responce.data)
  //   }
  //   fetch();
  // },[])
  return (
    <div>
    <h2 style={{color: 'black', textAlign:'center', fontFamily:'fantasy'}}>WAITING FOR A JOB <strong>?</strong></h2>
    <h5 style={{color: 'white', textAlign:'center', backgroundColor:'black',fontFamily:'cursive'}}>GET YOUR DREAM JOB HERE</h5>
    <p style={{color:'red', textAlign:'center', fontSize:'19px'}}>
        Companies in India and worldwide uses this portal to hire for different job roles like:<strong>Software Engineers, Product Manager, Data Scientist </strong>  and many more..
    </p>
    {/* <img src={image} alt='..'></img> */}
    <p style={{backgroundImage: 'linear-gradient(180deg, red,orange)', textAlign:'center',fontFamily:'monospace'}}>
        Therefore you are just few clicks ahead of landing yourself successful.
        Here are few steps to follow:
    </p>
    <div className='row' style={{justifyContent:'center'}}>
    <div className='col-auto'><Steps img='https://d383au3bye3rv1.cloudfront.net/static/images/optimized/feature_icon_2.png' stepnumber='Step 1' heading='Complete Your Profile' text='Once you are approved, we showcase ypu to leading Indian Technological Companies'/></div>
    <div className='col-auto'><Steps img='https://d383au3bye3rv1.cloudfront.net/static/images/optimized/icon1.png' stepnumber='Step 2' heading='Apply For Jobs' text='Companies start sending interview requests. Talk to only the one you would like.'/></div>
    <div className='col-auto'><Steps img='https://d383au3bye3rv1.cloudfront.net/static/images/optimized/icon2.png' stepnumber='Step 3' heading='Receive Job Offers' text='Compair yout offers and accept the best one you like.'/></div>
    </div>
    {props.saved===false?<h4 style={{backgroundColor:'yellow', textAlign:'center',fontFamily:'monospace',marginTop:'5px'}}><strong>So what are you waiting for... Complete your Profile Now &darr;</strong></h4>:''}
    </div>
  )
}

import React from 'react'

export default function Footer() {
  return (
    <div style={{backgroundImage: 'linear-gradient(180deg,cyan,violet)',height:'100px',textAlign:'center', marginTop:'10px'}}>
        <div style={{paddingTop:'4px', fontFamily:'cursive', fontSize:'20px', textDecoration:'underline'}}>
            <b>Our Details</b>
        </div>
        <div style={{paddingTop:'4px', fontFamily:'cursive', fontSize:'17px'}}>
            We connect Job Seekers with the Job Recruiters
        </div>
    </div>
  )
}

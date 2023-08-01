import React, { useState } from 'react'
import Navbar from './Navbar'
import Page from './Page'
import Footer from './Footer'
import Form from './Form'

export default function Home() {
  const [saved,setSaved]=useState(false)
  return (
    
    <div style={{width:'100%'}}>
    <div className='row'><Navbar /></div>
    <div className='row' style={{paddingTop:'5%'}}><Page saved={saved}/></div>
    <div className="row" style={{width:'70%',marginLeft:'15%', justifyItems:'center'}}>
    <Form saved={saved} setSaved={setSaved}/>
    </div>
    <div className='row'>
    <div className='row'><Footer /></div>
    </div>
    </div>
  )
}

import React, { useState } from 'react'
import Footer from './Footer'
import axios from 'axios';

export default function (props) {
    const [name,setName]=useState(null);
    const [email,setEmail]=useState(null);
    const [password,setPassword]=useState(null);
    const [college,setCollege]=useState(null);
    const [cgp,setCgp]=useState(null);
    const [domain,setDomain]=useState(null);
    
    async function submit(e){
        e.preventDefault();
        console.log(email,password,college)
        try {
            await axios.post('http://127.0.0.1:8000/',{
                name,email,password,college,cgp,domain
            })
            .then(
                props.setSaved(true)
            )
        } catch (error) {
            console.log(error)
        }
    }


    return (
        props.saved===false?<form style={{fontFamily:'serif',fontSize:'20px', backgroundImage: 'linear-gradient(to right, yellow,#8df00c)'}}>
            
            <div class="mb-2 mt-3">
                <div className="col-auto">
                    <label for="exampleInputName" class="form-label">Full Name</label>
                </div>
                <div className="col-auto">
                    <input type="text" class="form-control" id="exampleInputName" onChange={(e)=>setName(e.target.value)} required/>
                </div>
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>setEmail(e.target.value)} required />
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" onChange={(e)=>setPassword(e.target.value)} required />
            </div>
            <div class="mb-3">
                <label for="exampleInputcollege" class="form-label">College/University Name</label>
                <input type="text" class="form-control" id="exampleInputcollege" required onChange={(e)=>setCollege(e.target.value)} />
            </div>
            <div class="mb-3">
                <label for="exampleInputcgp" class="form-label">CGP</label>
                <input type="text" class="form-control" id="exampleInputcgp" onChange={(e)=>setCgp(e.target.value)} required />
            </div>
            <div class="mb-3">
                <label for="exampleInputdomain" class="form-label">Interested in?</label>
                <select name='exampleInputdomain' id='exampleInputdomain'class="form-control"  onChange={(e)=>setDomain(e.target.value)} required>
                    <option value='' selected disabled hidden>Click Here To Select Domain</option>
                    <option value="software engineer">software engineer</option>
                    <option value="product manager">product manager</option>
                    <option value="data scientist">data scientist</option>
                </select>
            </div>
            <div class="mb-2">
            <button type="submit" class="btn btn-success" style={{marginLeft:'46%'}} onClick={submit}>Submit</button>
            </div>
        </form>:<h4 style={{fontFamily:'serif',fontSize:'20px', backgroundImage: 'linear-gradient(to right, yellow,#8df00c)',textAlign:'center', marginTop:'15px'}}>Well You have successfully sumbitted your form...Further updates will be send to your Email.</h4>
    )
}

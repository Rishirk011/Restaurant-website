import './signup.css'
import { useState } from 'react'
export default function Signup(){
    const [form,setForm]=useState(
    {
        name:"",
        email:"",
        password:"",
        phone:0
    }
    );
    return<>
     <div className="container-fluid min-vh-100
        d-flex justify-content-center align-items-center formBar">
            <div className="card p-4 shadow-sm"
            style={{width:'100%', maxWidth:'450px'}}>
                <p className="display-5 text-center">
                    Sign-Up
                </p>
                <form action="">
                    <div className='mb-2'>
                        <label htmlFor="name" 
                        className="form-label">Name</label>
                        <input type="text" name="" id="" className="form-control"/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="mail" 
                        className="form-label">E-mail</label>
                        <input type="email" name="mail" id="mail" className="form-control"/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="phone" 
                        className="form-label">phone-no</label>
                        <input type="phone" name="phone" id="phone" className="form-control"/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" name="password" id="password" className="form-control"/>
                    </div>
                </form>
                <div className='text-center'>
                    <button className="btn btn-primary">Submit</button>
                </div>
            </div>
        </div>
    </>
}
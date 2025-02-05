import Card from "../components/Card";
import React,{useRef} from "react";
import {Link, useNavigate } from "react-router"

export default function Signup() {
    const navigate=useNavigate();
    const firstName=useRef(null);
    const lastName=useRef(null);
    const email=useRef(null);
    const password=useRef(null);
    function SaveData(){
        const payload={
            firstName:firstName.current.value,
            lastName:lastName.current.value,
            email:email.current.value,
            password:password.current.value
        }
        console.log(payload)
        fetch('http://localhost:4000/user/api/signup',{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        }).then((result)=>{
            console.log(result)
            if(result.ok){
                alert("Registration successful")
                setInterval(()=>{
                    navigate("/login")
                },2000)
            }else{
                console.log("Registration failed")
            }
            
        }).catch((error)=>{
            console.log(error)
        })
    }
    return (
        <div className="container">
            <Card>
                <div className="mb-3">
                    <label htmlFor="firstname" className="form-label">FirstName:</label>
                    <input ref={firstName}   type="text" className="form-control" id="firstname" placeholder="Enter FirstName Here" />
                </div>
                <div className="mb-3">
                    <label htmlFor="lastname" className="form-label">LastName:</label>
                    <input ref={lastName}   type="text" className="form-control" id="lastname" placeholder="Enter LastName Here" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input ref={email}  type="email" className="form-control" id="email" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input ref={password} type="password" className="form-control" id="password" placeholder="********" />
                </div>
                <div className="d-grid gap-2">
                    <button className="btn btn-primary" onClick={()=>SaveData()} type="button">Register</button>
                </div>
                <p>Already have an account?</p>
                <Link to={"/signin"}>Login</Link>
            </Card>
        </div>
    )
}/* import { Link, useNavigate } from "react-router-dom";
import Card from "../components/Card";
import { useRef } from "react";

export default function Signup(){
    const navigate=useNavigate();
    const firstName=useRef(null);
    const lastName=useRef(null);
    const email=useRef(null);
    const password=useRef(null);
    function SaveData(){
        const payload={
            firstName:firstName.current.value,
            lastName:lastName.current.value,
            email:email.current.value,
            password:password.current.value
        }
        console.log(payload)
        fetch('http://localhost:4000/user/api/signup',{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify(payload)
        }
        ).then((response)=>{
          console.log(response)
          if(response.ok){
            alert("Registration successful");
            setInterval(()=>{
                navigate("/signin")
            })
          }
        }).catch((error)=>{
            console.log(error)
        })
    }
    return (
        <Card>
            <div className="mb-3">
                    <label htmlFor="firstname" className="form-label">FirstName:</label>
                    <input ref={firstName}   type="text" className="form-control" id="firstname" placeholder="Enter FirstName Here" />
                </div>
                <div className="mb-3">
                    <label htmlFor="lastname" className="form-label">LastName:</label>
                    <input ref={lastName}   type="text" className="form-control" id="lastname" placeholder="Enter LastName Here" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input ref={email}  type="email" className="form-control" id="email" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input ref={password} type="password" className="form-control" id="password" placeholder="********" />
                </div>
                <div className="d-grid gap-2">
                    <button className="btn btn-primary" onClick={()=>SaveData()} type="button">Register</button>
                </div>
                <p>Already have an account?</p>
                <Link to={"/signin"}>Login</Link>
        </Card>
    )
} */
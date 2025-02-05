import Card from "../components/Card";
import React, { useRef } from "react";
import { useNavigate } from "react-router"
import { useData } from "../context/data";

export default function Signin() {
    const navigate=useNavigate();
    const EMAIL = useRef(null);
    const PASSWORD = useRef(null);
    const {setLoggedIn}=useData();

    function handleLogin() {
    /*     e.preventDefault(); */
        const payload = {
            email: EMAIL.current.value,
            password: PASSWORD.current.value
        }
        if (!payload.email || !payload.password) {
            return;
        }
        fetch("http://localhost:4000/user/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)

        }).then((result) => {
            console.log(result)
            //go to home page
            if(result && result.status===200){
                setInterval(()=>{
                    navigate("/urlshort")
                },2000)  
               return result.json();
            }
         
        }).then((data)=>{
            if(data && data.token){
                setLoggedIn(true)
                window.sessionStorage.setItem("_token",JSON.stringify(data.token))
            }
        }).catch((error) => {
            console.log(error)
        })

    }
    function handleforgot(){
            setInterval(()=>{
                navigate('/EmailVerify')
            },1000)
        }
    

    return (
        <div className="container">
            <Card>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input ref={EMAIL} type="email" className="form-control" id="email" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input ref={PASSWORD} type="password" className="form-control" id="password" placeholder="********" />
                </div>
                <div className="d-grid gap-2">
                    <button className="btn btn-primary" onClick={()=>handleLogin()} type="button">Login</button>
                </div>
                <div className="mb-2">
                    <h6>Forgot password?</h6>
                    <button onClick={()=>handleforgot()}>Click Here</button>
                </div>
            </Card>
        </div>
    )
}/* import Card from "../components/Card";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Signin(){
    const email=useRef(null);
    const password=useRef(null);
    const navigate=useNavigate();
    function handleLogin(){
        const payload={
            email:email.current.value,
            password:password.current.value
        }
        fetch("http://localhost:4000/user/signin",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(payload)
        }).then((result)=>{
            if(result.ok){
                navigate("/home")
                return result.json();
            }
        }).then((data)=>{
            if(data && data.token){
                window.sessionStorage.setItem("_token",JSON.stringify(data.token))
                setTimeout(()=>{
                    navigate("/urlshort")
                })
            }
        })
    }
    function handleforget(){
        setInterval(()=>{
            navigate("/emailverify")
        })
    }
    return (
        <Card>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input ref={email}  type="email" className="form-control" id="email" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input ref={password} type="password" className="form-control" id="password" placeholder="********" />
                </div>
                <div className="d-grid gap-2">
                    <button className="btn btn-primary" onClick={()=>handleLogin()} type="button">Login</button>
                </div>
                <div className="mb-2">
                    <h6>Forgot password?</h6>
                    <button onClick={()=>handleforget()}>Click Here</button>
                </div>
        </Card>
    )
} */
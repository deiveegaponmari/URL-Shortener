import React,{useRef} from "react";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";
export default function EmailVerify(){
    const navigate=useNavigate();
    const EMAIL=useRef(null);
    function handleVerifyEmail(){
        const payload={
            email:EMAIL.current.value
        }
        fetch("http://localhost:4000/user/request-reset", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)

        }).then((result) => {
            console.log(result)
            if(result && result.status===200){
                alert("Email verified successfully")
            }
         }).catch((error) => {
            console.log(error)
        })
    }
    return(
        <div className="container">
        <Card>
            <h3>Forget Password</h3>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input ref={EMAIL} type="email" className="form-control" id="email" placeholder="name@example.com" />
            </div>
            <div className="d-grid gap-2">
                    <button className="btn btn-primary" onClick={handleVerifyEmail}  type="button">Verify Email</button>
                </div>
            </Card>
            </div>
    )
}/* import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import { useRef } from "react";

export default function EmailVerify(){
    const navigate=useNavigate();
    const email=useRef(null)
    function handleVerify(){
        const payload={
            Email:email.current.value
        }
        fetch("http://localhost:4000/user/request-reset",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(payload)
        }).then((result)=>{
            if(result && result.status ===200){
                navigate("/forgetpassword")
            }
        })
    }
    return (
        <Card>
            <h6>Forgot password?</h6>
            <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input ref={email}  type="email" className="form-control" id="email" placeholder="name@example.com" />
                </div>
                <div className="mb-2">
                    <button onClick={handleVerify}>Verify Email</button>
                </div>
        </Card>
    )
} */
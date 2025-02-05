import { useRef } from "react";
import Card from "../components/Card";
import { useNavigate,useParams } from "react-router";

export default function ForgetPassword_Form(){
    const navigate=useNavigate();
    const { token }=useParams();
    console.log(token)
    const newPassword=useRef(null);
    function handleUpdatePassword(){
        console.log(token)
       // const token=params.token;
        const payload={
            password:newPassword.current.value,
        }
        fetch(`http://localhost:4000/user/reset-password/${token}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)

        }).then((result) => {
            console.log(result)
            //go to home page
            if(result && result.status===200){
                setInterval(()=>{
                    navigate("/login")
                },2000)
            }
         
        }).catch((error) => {
            console.log(error)
        })
    }
    return (
        <div className="container">
            <Card>
                <h3>FORGET PASSWORD</h3>
                <form>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">New Password</label>
                    <input ref={newPassword} type="password" className="form-control" id="password" placeholder="********" />
                </div>
                <div className="d-grid gap-2">
                    <button className="btn btn-primary" onClick={handleUpdatePassword}  type="button">Update Password</button>
                </div>
                </form>
            </Card>
        </div>
    )
}
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import { useRef } from "react";

export default function UrlShort(){
    const navigate=useNavigate()
    const category=useRef(null);
    const bigurl=useRef(null);
    function handleUrl(){
        const payload={
            category:category.current.value,
            bigurl:bigurl.current.value
        }
        console.log(payload)
        fetch('http://localhost:4000/urlshort/shorten',{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify(payload)
        }
        ).then((response)=>{
          console.log(response)
          if(response.ok){
            alert("short Url created successfully");
            setInterval(()=>{
                navigate("/showshorturl/:shortId")
            })
          }
        }).catch((error)=>{
            console.log(error)
        })
    }
    return(
        <Card>
            <div className="mb-3">
                    <label htmlFor="category" className="form-label">Category</label>
                    <input ref={category}   type="text" className="form-control" id="category" placeholder="Enter category Here" />
                </div>
                <div className="mb-3">
                    <label htmlFor="bigurl" className="form-label">BigURL</label>
                    <input ref={bigurl}   type="text" className="form-control" id="bigurl" placeholder="Enter BIGURL Here" />
                </div>
                <div className="d-grid gap-2">
                    <button className="btn btn-primary" onClick={()=>handleUrl()} type="button">Generate</button>
                </div>
        </Card>
    )
}
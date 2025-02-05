import { useParams,useNavigate } from "react-router-dom"
export default function ShowUrl(){
    const navigate=useNavigate();
const {shortId}=useParams();
function showSite(){
const shortURL=params.shortId;
console.log(shortURL)
fetch(`http://localhost:4000/urlshort/${shortId}`,{
    method:"POST",
    headers:{
        "Content-Type": "application/json"
    }
}).then((response)=>{
    console.log(response)
}).catch((error)=>{
    console.log(error)
})
 .then((response)=>response.json())
 .catch((error)=>console.log(error))
}
function showAllUrl(){
setInterval(()=>{
    navigate("/showUrlTable")
})
}
    return(
        <div className="container">
            <p>`${params.shortId}`</p>
            <button onClick={showSite}>View site</button>
            <button onClick={showAllUrl}>All URL's</button>
        </div>
    )
}
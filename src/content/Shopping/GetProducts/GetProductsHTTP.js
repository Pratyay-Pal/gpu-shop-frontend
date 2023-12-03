import axios from "axios"
import { useEffect,useState } from "react"

export default function GetProductsHTTP(){
    const [post, setPost] = useState(null);
    useEffect(() => {
        axios.get("http://localhost:8080/shop/getAllGpus").then((response) => {
            setPost(response.data)
        })
    }, [])   
    
    if (!post) return null;

  return (post);
}
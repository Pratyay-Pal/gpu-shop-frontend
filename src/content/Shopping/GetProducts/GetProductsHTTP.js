import axios from "axios"

export async function GetProductsHTTP(){
    const response = await axios.get("http://localhost:8080/shop/getAllGpus").catch((error) => {
        throw new Error(error.message)
    })
    if(response.status === 200)
        return(response.data.gpulist)
    else
        throw new Error(response.status)
}
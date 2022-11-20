import axios from "axios"
import { useEffect } from "react"

const endpoint = "/api/discussion/v1/threads/"
const curso = "course-v1:AIEP+GPTI+C9GPTI"
const raiz = "https://elearning.avanxa.com"


const Api = () => {
    useEffect(() => {
        axios({
            method: 'get',
            url: raiz+endpoint+curso,                
        }) 
            .then(function (response) {
                if (response.status === 200){
                    const data = response.data
                    console.log("data:",data)
                }})
            .catch(function(error){
                console.log("Error Const API:", error)
            }) 
    },[])
}

export {Api};
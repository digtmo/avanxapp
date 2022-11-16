import { useEffect } from "react";
import axios from 'axios'


const endpoint = "/api/discussion/v1/threads/"
const curso = "course-v1:AIEP+GPTI+C9GPTI"
/* const email = "david.torres@avanxa.com"
const password = "Tricahueb11$" */
const raiz = "https://elearning.avanxa.com"
/* const authe = '/user_api/v1/account/login_session/' */


const GetToken = () => {
        axios({
            method:'get',
            url: raiz+'/csrf/api/v1/token', 
        })
        .then(function (response) {
        if (response.status === 200){
            const token = response.data
            console.log("OK GetToken",token)
            token2.push(token)
        }})
        .catch(function(error){
            console.log("Error Const GetToken:", error)
        }) 
    const token2 = []
    console.log("token2",token2)
}

GetToken();

const auth = () => {
    axios({
        method:'post',
        url:'https://elearning.avanxa.com/user_api/v1/account/login_session',
       headers:{
            'Referer': raiz,
            'x-csrftoken' : "crsfToken"  
        }, 
        params:{        
            email: 'david.torres@avanxa.com',
            password: 'Tricahueb11$'
        }
    })
    .then(function (response) {
        if (response.status === 200){
            const data = response.data
            console.log("OK Const auth",data)
        }})
    .catch(function(error){
        console.log("Error auth", error)
        }) 
}

const prueba = () => {
    setTimeout(auth,5000)
}

prueba();



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




export default Api; 







import axios from "axios";
import React from "react";

function GetToken ({token, setToken}) {

    React.useEffect(() =>{
        axios({
            method:'get',
            url: 'https://elearning.avanxa.com/csrf/api/v1/token', 
        })
        .then(function (response) {
        if (response.status === 200){
            const data = response.data.csrfToken
            console.log("OK GetToken",data)
            setToken(data) 
        }})
        .catch(function(error){
            console.log("Error Const GetToken:", error) 
        }) 
    },[])
}

export {GetToken};
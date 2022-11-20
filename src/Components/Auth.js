
import axios from 'axios'


const endpoint = "/api/discussion/v1/threads/"
const curso = "course-v1:AIEP+GPTI+C9GPTI"
/* const email = "david.torres@avanxa.com"
const password = "Tricahueb11$" */
const raiz = "https://elearning.avanxa.com"
/* const authe = '/user_api/v1/account/login_session/' */


function Auth({token}) {
    axios({
        method: 'get',
        url: 'https://elearning.avanxa.com/user_api/v1/account/login_session',
        headers:{
            'Referer': raiz,
            'x-csrftoken' : token
        },  
        params: {
            email: 'david.torres@avanxa.com',
            password: 'Tricahueb11$'
        }
    })
        .then(function (response) {
            if (response.status === 200) {
                const data = response.data;
                console.log("OK Const auth", data);
            }
        })
        .catch(function (error) {
            console.log("Error auth", error);
        });
}



export {Auth};







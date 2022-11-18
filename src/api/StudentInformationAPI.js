import axios from 'axios';



export const StudentInformationAPI=(userId)=>{
   
let url=`https://jsonplaceholder.typicode.com/users/${userId}`

    return axios.get(url, {
        method: 'GET',
        Headers: {'Content-Types': 'application/json'}
    });



};









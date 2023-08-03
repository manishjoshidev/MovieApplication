import axios from 'axios';



export default axios.create({  //axios is used to call end point
    baseURL:'https://9c96-103-106-239-104.ap.ngrok.io/api/v1/movies' ,
    headers:{"ngrok-skip-browser-warning":"true"}
    
})




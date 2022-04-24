import axios from "axios";

const instance=axios.create({
    baseURL: 'https://library-api-181134.herokuapp.com/api',
    headers: {
        'Access-Control-Allow-Origin' : '*',

    }
})
export default instance;
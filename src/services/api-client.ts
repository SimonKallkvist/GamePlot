import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
       key: 'c02fa51ee8e840d6a22525f24cf4c2a1' 
    }
})
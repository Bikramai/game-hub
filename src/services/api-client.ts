import axios from "axios";


export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key:'3770516f39384a9397445de08f0832f6'
    }
})
import axios from 'axios'

const instance = axios.create({
    baseURL: "https://tiktok-clone-es.herokuapp.com/"
});

export default instance;
import axios from './axiosCustomize';

const postSignup = (username, email, password) => {
    const URL_API = "/register";
    const data = {
        username, email, password
    }

    return axios.post(URL_API, data)
}

const postLogin = (email, password) => {
    const URL_API = "/login";
    const data = {
        email, password
    }

    return axios.post(URL_API, data)
}

export { postSignup, postLogin }
import axios from "axios";

const authFetch = axios.create({
    baseURL: 'https://course-api.com', headers: {
        Accept: 'application/json'
    }
});

authFetch.interceptors.request.use((request) => {

    request.headers.common['Accept'] = 'application/json';

    console.log('request sent')
    return request;
}, (error) => {
    return Promise.reject(error)
})

authFetch.interceptors.response.use((response) => {
    console.log('got response')
    return response;
}, (error) => {
    // if (error.response.status === 404) {
    //     console.log('not found')
    // }
    console.log(error.response)
    return Promise.reject(error)
})

export default authFetch;
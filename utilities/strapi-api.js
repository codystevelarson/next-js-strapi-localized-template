import axios from 'axios';

const strapi = axios.create({
    baseURL: 'http://localhost:1337/api/',
});

// Run logic before sending the resquest to strapi 
strapi.interceptors.request.use((config) => {
    /// Append user auth, add query params, log requests, etc.
    console.log(config.url);
    return config;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // TODO: ADD SENTRY
    return Promise.reject(error);
});


// Run logic after the response is returned from strapi 
// and before sending back to the page
strapi.interceptors.response.use((response) => {
    /// Example of conditioning data to be easier to manipulate in the react components
    if (response.data.data) {
        response.data = response.data.data;
    }
    return response;
});

export default strapi;

import axios from 'axios';
import { AsyncStorage } from 'react-native'
const key = '26f7099e82e748468f78a303e2619069';
const url = `https://newsapi.org/v2/everything?apiKey=${key}`;

let getAPIBaseURL = () => {
    return url;
};

let fetchArticles =  (params)=>  {
    let q = '';
    if (params.hasOwnProperty("q"))
        q += '&q=' + params.q;
    if (params.limit)
        q += '&limit=' + params.limit;
    if (params.hasOwnProperty('dateSort'))
        q += '&dateSort=' + params.dateSort;
    console.log("GOT Q = ", q);
    return axios.get(`${url}&q=${q}` );

};
let getWeatherByCity = (q = 'bitcoin') =>{
    return axios.get(`${url}&q=${q}`);
}

let findArticle = (id) => {
    return axios.get(url + id);
};

export default {
    getAPIBaseURL,
    fetchArticles,
    getWeatherByCity,
    findArticle
};

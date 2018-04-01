import axios from 'axios';
var qs = require('qs');

export const getAll = (url, params)=>{return axios.get(url, {params: params})};

export const postAll = (url, params)=>{return axios.post(url, qs.stringify(params))};

import { message } from 'antd';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { ResponseError } from './errors';
import { MAIN_URL } from '../utils';

let instance = axios.create();

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
    const access_token = localStorage.getItem('access_token');
    if (!access_token && config.url !== '/auth/login') {
        message.error("You has not key to get data !")
    }
    config.baseURL = `${MAIN_URL}`;

    config.headers = {
        'Authorization': "Bearer " + access_token,
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
    }
    return config;
}

const onRequestError = async (error: AxiosError): Promise<AxiosError> => {
    new ResponseError(error);
    return Promise.reject(error);
}

const onResponse = (response: AxiosResponse): AxiosResponse => {
    return response;
}

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
    new ResponseError(error);
    return Promise.reject(error);
}

//@ts-ignore
instance.interceptors.request.use(onRequest, onRequestError)
instance.interceptors.response.use(onResponse, onResponseError)

export default instance;
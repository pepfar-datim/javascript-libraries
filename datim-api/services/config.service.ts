import {Config, Environment} from "../types/config.type";

export let config:Config={
    baseUrl:null,
    testUsername: null,
    environment: null,
    authorization: null
};

export function registerProd(baseUrl: string){
    config.baseUrl = baseUrl;
    config.environment = Environment.prod;
}

export function registerTest(baseUrl:string,testUsername:string,authorization:string){
    config = {baseUrl, testUsername, authorization, environment:Environment.test}
}

export function getFullUrl(endpointUrl:string){
    return `${config.baseUrl}api${endpointUrl}`;
}

export function setTestUsername(username:string,auth:string){
    config.testUsername = username;
    config.authorization = auth;
}

export function getAuthorization():string{
    return config.authorization;
}
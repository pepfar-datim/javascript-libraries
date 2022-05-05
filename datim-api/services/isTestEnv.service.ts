import {Environment} from "../types/config.type";
import {config} from "./config.service";

export function isTestEnv():boolean{
    return config.environment===Environment.test;
}

export function isTestEnv_lowLevel():boolean{
    return typeof process!=='undefined'&&process.env.NODE_ENV==='test';
}
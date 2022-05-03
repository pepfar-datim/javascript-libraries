import {Environment} from "../types/config.type";
import {config} from "./config.service";

export function isTestEnv():boolean{
    return config.environment===Environment.test;
}
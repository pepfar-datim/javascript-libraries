import {testCredentials} from "./testCredentials.const";
import fetch from "node-fetch"
import {Environment} from "../types/config.type";
import {register, setTestUsername, getJson} from "../index";
// @ts-ignore
global.fetch = fetch

test(`1 > getJson`,async ()=>{
    register(Environment.test, testCredentials.url);
    setTestUsername(testCredentials.username,testCredentials.auth);
    let response:{id:string} = await getJson(`/me`);
    expect(response.id.length).toBe(11);
})
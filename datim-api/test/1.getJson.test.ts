import {datimApi} from "../index";
import {testCredentials} from "./testCredentials.const";
import fetch from "node-fetch"
global.fetch = fetch

test(`1 > getJson`,async ()=>{
    datimApi.register(testCredentials.url,testCredentials.auth);
    let response:{id:string} = await datimApi.getJson(`/me`);
    expect(response.id.length).toBe(11);
})
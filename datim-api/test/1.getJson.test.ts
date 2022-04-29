import {api} from "../index";
import {testCredentials} from "./testCredentials.const";
import fetch from "node-fetch"
global.fetch = fetch

test(`1 > getJson`,async ()=>{
    api.register(testCredentials.url);
    let response:{id:string} = await api.getJson(`/me`,{headers:{Authorization: testCredentials.auth}});
    expect(response.id.length).toBe(11);
})
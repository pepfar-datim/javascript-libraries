import datimApi from "../index";
import {testCredentials} from "./testCredentials.const";

test(`3 > get cache`,async ()=>{
    datimApi.registerTest(testCredentials.url, testCredentials.username, testCredentials.auth);
})
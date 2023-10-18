import {register, setTestUsername, getJson, registerGetMock} from "../index";
import {Environment} from "../types/config.type";
import {testCredentials} from "./testCredentials.const";

test(`2 > Get Mock`, async ()=>{
    register(Environment.test, '');
    setTestUsername(testCredentials.username,testCredentials.auth);
    registerGetMock(`/users/test`,{name: 'test'});
    let response = await getJson(`/users/test`);
    expect(response).toStrictEqual({name: 'test'});
})
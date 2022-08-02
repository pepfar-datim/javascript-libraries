import {register, setTestUsername, postJson,registerSendMock} from "../index";
import {Environment} from "../types/config.type";
import {testCredentials} from "./testCredentials.const";

test(`3 > Send mock > mock invite`, async ()=>{
    register(Environment.test, '');
    setTestUsername(testCredentials.username,testCredentials.auth);
    let payloadPromise = registerSendMock(`/users/invite`,{response: 'success'});
    let response = await postJson(`/users/invite`,{request: 'user'});
    expect(response.responseBody).toStrictEqual({response: 'success'});
    expect(await payloadPromise).toStrictEqual({request: 'user'});
});

test(`3 > Send mock > error: not mocked in test`, async ()=>{
    register(Environment.test, '');
    setTestUsername(testCredentials.username,testCredentials.auth);
    await expect(async ()=>postJson(`/users/123`,{request: 'user'})).rejects.toThrow();
});
import {handleErrors} from "../../lib/services/httpRequest.service";

type MockedResponse = {
    ok:boolean,
    redirected: boolean,
    url?: string,
    statusText?:string,
    text:()=>Promise<string>
}

type TestCase = {
    name: string,
    response: MockedResponse,
    expectError: boolean,
}
const testCases:TestCase[] = [{
    name: 'correct login => status 200 & no redirect',
    response: {
        ok: true,
        redirected: false,
        text:()=>Promise.resolve('{}')
    },
    expectError: false,
},{
    name: 'invalid auth method => status 200 & redirect to login',
    response: {
        ok: true,
        redirected: true,
        url: 'https://datim.org/login',
        text:()=>Promise.resolve('{}')
    },
    expectError: true
},{
    name: 'wrong username/password => status 401',
    response: {
        ok: false,
        redirected: false,
        statusText: 'Not Authorized',
        text: ()=>Promise.resolve(`{}`)
    },
    expectError: true
},{
    name: 'user already exists => status 200 & response body contains error',
    response: {
        ok: true,
        redirected: false,
        text: ()=>Promise.resolve(`{"status":"ERROR"}`)
    },
    expectError: true
}]



testCases.forEach(({response,name,expectError}:TestCase)=>{
    test(`1 > Users > Handle Errors > ${name}`,async ()=> {
        const execute = async ()=>await handleErrors(response as any);
        if (expectError) await expect(execute)
            .rejects
            .toThrow();
        else await expect(execute).not.toThrow()
    });
})
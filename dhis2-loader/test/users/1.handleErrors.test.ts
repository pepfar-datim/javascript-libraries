import {handleErrors} from "../../lib/services/httpRequest.service";
import {error} from "../../lib/services/print";

type MockedResponse = {
    ok:boolean,
    redirected: boolean,
    url?: string,
    statusText?:string,
    text?:()=>Promise<string>
}

type TestCase = {
    name: string,
    response: MockedResponse,
    expectError: boolean,
    customValidation?: (fn) => void
}
const testCases:TestCase[] = [{
    name: 'redirect',
    response: {
        ok: true,
        redirected: false,
    },
    expectError: false,
},{
    name: 'redirect to login with 200',
    response: {
        ok: true,
        redirected: true,
        url: 'https://datim.org/login'
    },
    expectError: true,
    customValidation: (error)=>{
        // @ts-ignore
        expect(error.mock.calls[0][0]).toBe('ERROR: Login failed')
    }
},{
    name: 'not authorized',
    response: {
        ok: false,
        redirected: false,
        statusText: 'not authorized',
        text: ()=>Promise.resolve(`{"message":"not authorized"}`)
    },
    expectError: true,
    customValidation: (error)=>{
        console.log(error.mock.calls[0][4])
        // @ts-ignore
        expect(error.mock.calls[0][4].includes('not authorized')).toBeTruthy()
    }
}]

jest.mock('../../lib/services/print');

testCases.forEach(({response,name,expectError,customValidation}:TestCase)=>{
    test(`1 > Users > Handle Errors > ${name}`,async ()=> {
        // @ts-ignore
        error.mockClear();
        // @ts-ignore
        await handleErrors(response as Response);
        expect(error).toBeCalledTimes(expectError?1:0)
        if (customValidation) customValidation(error);
    });
})
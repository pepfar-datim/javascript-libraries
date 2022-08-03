import {ErrorType, getErrorMessage, inspectResponse} from "../index";

type TestCase = {
    input: any,
    success: boolean,
    name: string,
    errorType?: ErrorType,
    responseBody?:any
}

let alreadyExistsError = {
    status: 'ERROR',
    typeReports:[{
        objectReports: [{
            errorReports: [{
                message: 'found matching object with id xyz'
            }]
        }]
    }]
}

let ignoredWarning = {
    status: 'WARNING',
    importCount:{ignored:1}
}

let successResponse = {
    inserted: 1
}

const testCases:TestCase[] = [{
    name: 'fetch returns {ok:false}',
    input: {
        ok: false
    },
    success: false,
    errorType: ErrorType.httpError,
},{
    name: 'status 301, redirected to login',
    input: {
        ok: true,
        redirected: true,
        url: 'https://jakub.datim.org/dhis-web-commons/security/login.action'
    },
    success: false,
    errorType: ErrorType.silentRedirect,
},{
    name: 'status 204',
    input: {
        ok:true,
        status: 204
    },
    success: true,
    responseBody: undefined
},{
    name: 'DHIS2 error > object already exists',
    input: {
        ok:true,
        text: ()=>Promise.resolve(JSON.stringify(alreadyExistsError))
    },
    success: false,
    errorType: ErrorType.alreadyExists
},{
    name: 'DHIS2 warning > object ignored',
    input: {
        ok:true,
        text: ()=>Promise.resolve(JSON.stringify(ignoredWarning))
    },
    success: false,
    errorType: ErrorType.ignored
},{
    name: 'success with empty response body',
    input: {
        ok:true,
        text: ()=>Promise.resolve(undefined)
    },
    success: true,
    responseBody: undefined,
},{
    name: 'success with response body',
    input: {
        ok:true,
        text: ()=>Promise.resolve(JSON.stringify(successResponse))
    },
    success: true,
    responseBody: successResponse,
}];

testCases.forEach(({name, input, success, responseBody, errorType})=>{
    test(`4 > Inspect Response > ${name}`, async ()=>{
        if (success) expect((await inspectResponse(input)).responseBody).toStrictEqual(responseBody)
        else await expect(inspectResponse(input)).rejects.toThrow(Error(getErrorMessage(errorType)));
    })
})
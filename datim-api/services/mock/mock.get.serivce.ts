type GetMock = {
    url: string,
    response: any,
}

let registeredMocks:GetMock[] = [];

export function registerGetMock(url:string, response:any){
    registeredMocks = registeredMocks.filter(mock=>mock.url!==url);
    registeredMocks.push({url,response});
}

export function getMockedResponse(url:string){
    let foundMocks = registeredMocks.filter(m=>m.url===url);
    if (foundMocks.length===0) return null;
    if (foundMocks.length>1) throw new Error(`Found multiple get mocks matching ${url}`);
    if (typeof foundMocks[0].response!=='string') return {json: ()=>foundMocks[0].response};
}

export function isMocked(url:string):boolean{
    return registeredMocks.some(m=>m.url===url);
}
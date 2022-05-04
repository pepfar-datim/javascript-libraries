import datimApi from "../index";

test(`3 > Send mock > mock invite`, async ()=>{
    datimApi.registerTest(`test`,'test','test');
    let payloadPromise = datimApi.registerSendMock(`/users/invite`,{response: 'success'});
    let response = await datimApi.postJson(`/users/invite`,{request: 'user'});
    expect(response).toStrictEqual({response: 'success'});
    expect(await payloadPromise).toStrictEqual({request: 'user'});
});

test(`3 > Send mock > error: not mocked in test`, async ()=>{
    datimApi.registerTest(`test`,'test','test');
    await expect(async ()=>datimApi.postJson(`/users/123`,{request: 'user'})).rejects.toThrow();
});
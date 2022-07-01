import { getJson, getText, getBlob } from "./services/methods/get.service";
import { getBaseUrl, register, setTestUsername } from "./services/config.service";
import { registerGetMock } from "./services/mock/getMock.serivce";
import { initTestCache } from "./services/cache/getCache.service";
import { postJson, postText, putJson, postEmpty, patchJson } from "./services/methods/sendData.service";
import { registerSendMock } from "./services/mock/sendMock.service";
export * from "./services/methods/inspectResponse.service";
export * from "./types/http.types";
export default {
    getJson: getJson,
    getText: getText,
    getBlob: getBlob,
    postJson: postJson,
    putJson: putJson,
    patchJson: patchJson,
    postText: postText,
    postEmpty: postEmpty,
    registerGetMock: registerGetMock,
    registerSendMock: registerSendMock,
    initTestCache: initTestCache,
    setTestUsername: setTestUsername,
    register: register,
    getBaseUrl: getBaseUrl
};
//# sourceMappingURL=index.js.map
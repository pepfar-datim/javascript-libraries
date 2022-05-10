import {getJson,getText} from "./services/methods/get.service";
import {getFullUrl, registerProd, registerTest, setTestUsername} from "./services/config.service";
import {registerGetMock} from "./services/mock/getMock.serivce";
import {initTestCache} from "./services/cache/getCache.service";
import {postJson, postText, putJson, postEmpty, patchJson} from "./services/methods/sendData.service";
import {registerSendMock} from "./services/mock/sendMock.service";
import {getBaseUrl} from "./services/getBaseUrl.service";
export * from "./services/methods/inspectResponse.service";
export * from "./types/http.types";
export * from "./services/isTestEnv.service"

export default {
    getJson,
    getText,
    postJson,
    putJson,
    patchJson,
    postText,
    postEmpty,
    registerProd,
    registerTest,
    registerGetMock,
    registerSendMock,
    initTestCache,
    setTestUsername,
    getFullUrl,
    getBaseUrl
}
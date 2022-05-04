import {getJson,getText} from "./services/methods/get.service";
import {registerProd, registerTest, setTestUsername} from "./services/config.service";
import {registerGetMock} from "./services/mock/getMock.serivce";
import {initTestCache} from "./services/cache/getCache.service";
import {postJson, postText, putJson, postEmpty} from "./services/methods/sendData.service";
import {registerSendMock} from "./services/mock/sendMock.service";
export * from "./services/methods/inspectResponse.service";
export * from "./types/http.types";

export default {
    getJson,
    getText,
    postJson,
    putJson,
    postText,
    postEmpty,
    registerProd,
    registerTest,
    registerGetMock,
    registerSendMock,
    initTestCache,
    setTestUsername,
}
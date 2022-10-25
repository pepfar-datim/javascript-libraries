import {getJson,getText, getBlob} from "./services/methods/get.service";
import {getAuthorization, getBaseUrl, isTestEnv, register, setTestUsername} from "./services/config.service";
import {registerGetMock} from "./services/mock/getMock.serivce";
import {initTestCache} from "./services/cache/getCache.service";
import {postJson, postText, putJson, postEmpty, patchJson} from "./services/methods/sendData.service";
import {registerSendMock} from "./services/mock/sendMock.service";
import {deleteData} from "./services/methods/delete.service";
export * from "./services/methods/inspectResponse.service";
export * from "./types/http.types";

export {
    getJson,
    getText,
    getBlob,
    postJson,
    putJson,
    patchJson,
    postText,
    postEmpty,
    registerGetMock,
    registerSendMock,
    initTestCache,
    setTestUsername,
    register,
    getBaseUrl,
    deleteData,
    isTestEnv,
    getAuthorization
}
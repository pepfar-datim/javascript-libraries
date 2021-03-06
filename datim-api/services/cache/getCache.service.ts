import {urlToFilename} from "./urlToFilename.service";

let cachedResponseList:string[] = [];
let fs;
let cacheDir;

if (typeof process!=='undefined'&&process.env.NODE_ENV==='test') {
    import('fs').then(initTestCache);
    cacheDir = process.cwd() + '/cachedApiCalls'
}

function initTestCache(lib){
    fs=lib;
    if (!fs.existsSync(cacheDir)) fs.mkdirSync(cacheDir);
    cachedResponseList = fs.readdirSync(`${cacheDir}/`).map(fileName => fileName.replace('.json', ''));
}


function saveToFile(fileName:string, data:object){
    fs.writeFileSync(`${cacheDir}/${fileName}.json`, JSON.stringify(data));
}

function saveResponseToCache(username:string, url:string, response:object):void{
    let fileName = urlToFilename(username, url);
    cachedResponseList.push(fileName);
    saveToFile(fileName, response);
}

function isResponseCached(username: string, url:string):boolean{
    return cachedResponseList.includes(urlToFilename(username, url))
}

function getCachedResponse(username:string, url:string):object{
    let fileName = urlToFilename(username, url);
    let path = `${cacheDir}/${fileName}.json`;
    let data = JSON.parse(fs.readFileSync(path).toString());
    return {json:()=>data};
}

export {
    initTestCache,
    saveResponseToCache,
    isResponseCached,
    getCachedResponse
}
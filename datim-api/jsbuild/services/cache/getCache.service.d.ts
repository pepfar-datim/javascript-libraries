declare function initTestCache(lib: any): void;
declare function saveResponseToCache(username: string, url: string, response: object): void;
declare function isResponseCached(username: string, url: string): boolean;
declare function getCachedResponse(username: string, url: string): object;
export { initTestCache, saveResponseToCache, isResponseCached, getCachedResponse };

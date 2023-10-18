export type JsonObject = {
    [key:string]:string|number|JsonObject|JsonObject[]
} | string[]
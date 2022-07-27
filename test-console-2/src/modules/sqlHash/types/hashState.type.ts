export type HashState = {
    hash:string,
    status:HashStatus
}

export enum HashStatus {
    loading='loading',
    match='match',
    error='error'
}
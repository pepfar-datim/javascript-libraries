export type User = {
    id:string,
    userCredentials: {
        username: string;
        password?: string;
    }
}
export declare function registerGetMock(url: string, response: any): void;
export declare function getMockedResponse(url: string): {
    json: () => any;
};
export declare function isGetMocked(url: string): boolean;

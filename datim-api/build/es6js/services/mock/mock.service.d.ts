declare type MockRecord = {
    url: string;
    response: any;
};
export declare class MockService {
    registeredMocks: MockRecord[];
    registerMockedResponse(url: string, response: any): void;
    getMockedResponse(url: string): any;
    isMocked(url: string): boolean;
}
export {};

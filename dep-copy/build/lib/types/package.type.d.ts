export declare type PackageName = {
    nameSpace: string;
    localName: string;
};
export declare type Map = {
    [packageName: string]: string;
};
export declare type PackageJson = {
    name: string;
    dependencies: Map;
    peerDependencies: Map;
};
export declare type PackageMeta = {
    name: PackageName;
    path: string;
    peerDependencies: string[];
};

import { PackageName } from "../types/package.type";
export declare const getLocalPath: ({ nameSpace, localName }: PackageName) => string;
export declare const getRemotePath: (rootPath: string, packageName: PackageName) => string;

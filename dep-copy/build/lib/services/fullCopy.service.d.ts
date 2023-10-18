import { PackageMeta } from "../types/package.type";
export declare function fullCopy({ path, name, peerDependencies, devDependencies }: PackageMeta): Promise<any>;
export declare function srcCopy({ path, name }: PackageMeta): Promise<any>;

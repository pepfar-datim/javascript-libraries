export type PackageJson = {
    name: string;
    devDependencies: Record<string,string>;
    peerDependencies: Record<string,string>;
    import: string[];
}
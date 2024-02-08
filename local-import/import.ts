import cpy from 'cpy'
import {readFileSync} from "node:fs";

const modulePath = process.argv[2] || process.argv[1]

if (!modulePath.includes('/')) throw Error(`Cannot recognize module path`)

type Map = {
    [key:string]:string
}

type PackageJson = {
    name: string;
    devDependencies: Map
    peerDependecies: Map
}

const packageJson:PackageJson = JSON.parse(readFileSync(`${modulePath}/package.json`).toString())
const [namespace, name] = packageJson.name.split('/')
const peerAndDevDependencies:string[] = [...Object.keys(packageJson.devDependencies||[]), ...Object.keys(packageJson.peerDependecies||[])]

console.log(`Copying files from ${modulePath} to ./node_modules/${namespace}/${name}`)

cpy(`${modulePath}/**/*`,`./node_modules/${namespace}/${name}`,{
    filter: file => !peerAndDevDependencies.some(dependencyName=>file.relativePath.includes(`node_modules/${dependencyName}/`))
})


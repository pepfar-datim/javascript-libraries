#!/usr/bin/env node

// Imports

import cpy from 'cpy'
import {readFileSync, rmSync} from "node:fs";

// Types

type Map = {
    [key:string]:string
}

type PackageJson = {
    name: string;
    devDependencies: Map
    peerDependencies: Map
}

// Input

const modulePath = process.argv[2] || process.argv[1]
if (!modulePath.includes('/')) throw Error(`Cannot recognize module path`)

// package.json

const ignoredRegExp = [
    'jest-',
    'babel-',
    'vite-',
    'eslint-',
    'node_modules/\\.',
    '@types',
    '@vitejs',
    '@vitest',
    '@jest'
]

const packageJson:PackageJson = JSON.parse(readFileSync(`${modulePath}/package.json`).toString())
const [namespace, name] = packageJson.name.split('/')
const parse = (map:Map)=>Object.keys(map||[])

const devAndPeerDeps:string[] = [].concat(
    parse(packageJson.devDependencies),
    parse(packageJson.peerDependencies)
)

// Copy

rmSync(`./node_modules/${namespace}/${name}`, { recursive: true, force: true })

console.log(`Copying files from ${modulePath} to ./node_modules/${namespace}/${name}`)
console.log(`The following dependencies will be skipped`, devAndPeerDeps)

const isDevPeerDev = (filePath:string)=>devAndPeerDeps.some(dependencyName=>filePath.includes(`node_modules/${dependencyName}/`))
const isIgnored = (filePath:string)=>ignoredRegExp.some(regex=>new RegExp(regex).test(filePath))

cpy(`${modulePath}/**/*`,`./node_modules/${namespace}/${name}`,{
    filter: file => {
        const filePath:string = file.relativePath
        if (isIgnored(filePath)) return false
        if (isDevPeerDev(filePath)) return false
        return true
    }
})


#!/usr/bin/env node

// Imports

import cpy from 'cpy'
import {readFileSync, rmSync} from "node:fs";
import {PackageJson} from "./types/types.js";


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
const parse = (map:Record<string,string>)=>Object.keys(map||[])

const devAndPeerDeps:string[] = [].concat(
    parse(packageJson.devDependencies),
    parse(packageJson.peerDependencies)
)

// Copy

rmSync(`./node_modules/${namespace}/${name}`, { recursive: true, force: true })

console.log(`Importing ${modulePath.replace('../','')} to ${process.cwd().split('/').pop()}`)

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


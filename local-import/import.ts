#!/usr/bin/env node

// Imports

import cpy from 'cpy'
import {readFileSync} from "node:fs";

// Types

type Map = {
    [key:string]:string
}

type PackageJson = {
    name: string;
    devDependencies: Map
    peerDependecies: Map
}

// Input

const modulePath = process.argv[2] || process.argv[1]
if (!modulePath.includes('/')) throw Error(`Cannot recognize module path`)

// package.json

const defaultIgnore = ['node_modules/.']

const packageJson:PackageJson = JSON.parse(readFileSync(`${modulePath}/package.json`).toString())
const [namespace, name] = packageJson.name.split('/')
const parse = (map:Map)=>Object.keys(map||[])

const ignoredDependencies:string[] = [].concat(
    defaultIgnore,
    parse(packageJson.devDependencies),
    parse(packageJson.peerDependecies)
)

// Copy

console.log(`Copying files from ${modulePath} to ./node_modules/${namespace}/${name}`)
console.log(`The following dependencies will be skipped`, ignoredDependencies)

cpy(`${modulePath}/**/*`,`./node_modules/${namespace}/${name}`,{
    filter: file => !ignoredDependencies.some(dependencyName=>file.relativePath.includes(`node_modules/${dependencyName}/`))
})


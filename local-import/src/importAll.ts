import {readFileSync} from "node:fs";
import {PackageJson} from "./types/types.js";
import {fork} from "node:child_process";

const {import:importList}:PackageJson = JSON.parse(readFileSync(`package.json`).toString())

importList.forEach((module)=>{
    fork('node_modules/.bin/import',[`../${module}`])
})
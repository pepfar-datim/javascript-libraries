import {getLocalPath, getRemotePath} from "../lib/copyWatch";
import {PackageName} from "../lib/types/packageName.type";

const example:PackageName = {
    nameSpace: 'jakub-bao',
    localName: 'dev-copy'
}

test('Local Path',()=>{
    expect(getLocalPath(example)).toBe('node_modules/@jakub-bao/dev-copy')
})

test('Remote Path',()=>{
    expect(getRemotePath('../npm',example)).toBe('../npm/dev-copy')
})
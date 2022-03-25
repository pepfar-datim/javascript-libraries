import {getPackageName} from "../lib/services/getPackageName.service";
import {PackageName} from "../lib/types/packageName.type";

type TestCase = {
    input:string,
    output: PackageName
}

const testCases:TestCase[] = [{
    input:'@jakub-bao/dev-copy',
    output: {
        nameSpace: 'jakub-bao',
        localName: 'dev-copy'
    }
}]

function generateTest({input, output}) {
    test(`1 > getPackageName ${input}`, () => {
        expect(getPackageName(input)).toStrictEqual(output)
    })
}

testCases.forEach(generateTest);


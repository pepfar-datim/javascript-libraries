import {screen} from "@testing-library/react";

/**
 * Pause test execution by `sec` seconds
 *
 * @example
 * ```javascript
 * await pause(0.2)
 * ```
 * @category Pause
 * */
export function pause(ms:number):Promise<void>{
    return new Promise<void>((done)=>{
        setTimeout(done, ms);
    });
}

/**
 * Show current state of the test DOM enviroment
 *
 * @example
 * ```javascript
 * await debug()
 * ```
 * @category Render
 * */
export let debug = (elt?:Element)=>{
    screen.debug(elt,10000000);
}

export let debugText = ()=>{
    console.log(document.querySelector('body')?.textContent)
}
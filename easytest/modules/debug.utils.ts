import {screen} from "@testing-library/react";

/**
 * Show current state of the test DOM enviroment
 *
 * @example
 * ```javascript
 * await debug()
 * ```
 * @category Render
 * */
export let debug = ()=>{
    screen.debug(null as any,10000000);
}
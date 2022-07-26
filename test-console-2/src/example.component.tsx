import { register } from "@pepfar-react-lib/datim-api";
import React from "react";
import ReactDOM from 'react-dom/client';
import {TestConsole} from "./testConsole.component";
import {CustomMethod} from "./types/testConsole.types";

// @ts-ignore
register(process.env.NODE_ENV,process.env.REACT_APP_BASE_URL);

const testMethods:CustomMethod[] = [{
    name: 'Time',
    method: ()=>alert(`Current time is ${new Date()}`)
}]

export function Example({}:{}) {
    return <>
        Example app
        <TestConsole buildName={'Example use'} testMethods={testMethods}/>
    </>;
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<Example/>);
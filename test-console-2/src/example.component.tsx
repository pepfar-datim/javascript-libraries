import { register } from "@pepfar-react-lib/datim-api";
import React from "react";
import ReactDOM from 'react-dom/client';
import {TestConsole} from "./modules/testConsole/components/testConsole.component";
import {CustomMethod} from "./modules/testConsole/types/testConsole.types";
import {SqlHash} from "./modules/sqlHash/components/sqlHash.component";

// @ts-ignore
register(process.env.NODE_ENV,process.env.REACT_APP_BASE_URL);

const testMethods:CustomMethod[] = [{
    name: 'Time',
    method: ()=>alert(`Current time is ${new Date()}`)
}]

export function Example({}:{}) {
    return <>
        Example app
        <TestConsole
            buildDate={'Example use 1'}
            testMethods={testMethods}
            customComponents={<SqlHash functionName={'view_duplicates'} expectedHash={'123'}/>}
        />
    </>;
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<Example/>);
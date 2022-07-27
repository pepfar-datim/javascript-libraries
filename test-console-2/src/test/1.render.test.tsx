import {render} from "@testing-library/react";
import React from "react";
import {debug, pause, texts, textsWait, clickByText} from "@pepfar-react-lib/testwrap";
import {openViaTest, TestConsole} from "../modules/testConsole/components/testConsole.component";
import {CustomMethod} from "../modules/testConsole/types/testConsole.types";
import {registerGetMock} from "@pepfar-react-lib/datim-api";
import {screen} from "@testing-library/react";

function openConsole(){
    openViaTest({'key':'`', ctrlKey:true})
}

let testMethod = jest.fn();

const testMethods:CustomMethod[] = [{
    name: 'Test method',
    method: testMethod
}]

const superUserResponse = {
    "userCredentials": {
        "userRoles": [{
            "name": "Superuser ALL authorities"
        }]
    }
}
test(`1 > Render`, async ()=>{
    registerGetMock('/me?fields=userGroups[name],userCredentials[userRoles[name]]',superUserResponse)
    render(<TestConsole buildName={'Example use'} testMethods={testMethods}/>);
    await screen.findByTestId('root');
    openConsole();
    await textsWait(['Test Console','Build Name','Example use','Custom Functions','Test method'])
    clickByText(/Test method/)
    expect(testMethod.mock.calls.length).toBe(1);
});
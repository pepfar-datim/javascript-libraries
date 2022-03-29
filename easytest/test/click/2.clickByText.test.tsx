import React from "react";
import {clickByText} from "../../modules/click.utils";
import {generateClickTest} from "./click.testService";

function TestPage({onClick}){
    return <div><button onClick={onClick}>Text to find</button></div>
}

generateClickTest(clickByText, 'Text to find',TestPage);
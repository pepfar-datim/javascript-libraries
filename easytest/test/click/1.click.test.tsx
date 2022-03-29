import React from "react";
import {click} from "../../modules/click.utils";
import {generateClickTest} from "./click.testService";

function TestPage({onClick}){
    return <div><button data-testid={'testIdToFind'} onClick={onClick}>Button 1</button></div>
}

generateClickTest(click, 'testIdToFind',TestPage);
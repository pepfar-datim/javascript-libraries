import React from "react";
import {screen, render} from "@testing-library/react";
import {click} from "../modules/click.utils";

const onClick = jest.fn();

function TestPage(){
    return <div><button data-testid={'toclick'} onClick={onClick}>toclick</button></div>
}

test(`1 > Click`, async ()=>{
    render(<TestPage/>)
    click('toclick');
    expect(onClick).toBeCalledTimes(1);
})
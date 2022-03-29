import React from "react";
import {screen, render} from "@testing-library/react";
import {click, clickByText} from "../../modules/click.utils";

const onClick = jest.fn();

function TestPage(){
    return <div><button onClick={onClick}>toclick</button></div>
}

test(`2 > Click by text`, async ()=>{
    render(<TestPage/>)
    clickByText('toclick');
    expect(onClick).toBeCalledTimes(1);
})
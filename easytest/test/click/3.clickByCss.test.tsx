import React from "react";
import {screen, render} from "@testing-library/react";
import {click, clickByCss, clickByText} from "../../modules/click.utils";

const onClick = jest.fn();

function TestPage(){
    return <div id="parent">
        <div><button/></div>
        <div className="target"><button onClick={onClick}>toclick</button></div>
    </div>
}

test(`3 > Click by CSS`, async ()=>{
    render(<TestPage/>)
    clickByCss('#parent .target button');
    expect(onClick).toBeCalledTimes(1);
})
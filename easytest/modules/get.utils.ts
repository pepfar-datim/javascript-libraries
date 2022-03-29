import {screen} from "@testing-library/react";

export function get(testId:string):Element{
    return screen.getByTestId(testId);
}

export function getByText(text:string):Element{
    return screen.getByText(text);
}

export function getByCss(css:string):Element{
    return document.querySelector(css);
}

export function checkAttribute(element:Element, attr:string, value:string):void{
    expect(element.getAttribute(attr)).toBe(value);
}
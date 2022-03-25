import userEvent from "@testing-library/user-event";
import {screen} from "@testing-library/react";

export function click(testId:string){
    userEvent.click(screen.getByTestId(testId))
}
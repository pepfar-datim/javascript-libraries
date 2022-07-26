// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

import {register, setTestUsername} from "@pepfar-react-lib/datim-api";

// @ts-ignore
register(process.env.NODE_ENV, process.env.REACT_APP_BASE_URL)
setTestUsername(`test-de-superAdmin`,`Basic ${btoa(`test-de-superAdmin:Cypress1!`)}`);

jest.setTimeout(1e4);
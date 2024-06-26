# REACT Test Utils
**Repo Owner:** Ben Guaraldi [@benguaraldi](https://github.com/benguaraldi)

This super-light library will help you write your REACT tests much more effectively.

It is designed for developers using `REACT`, `Jest` & `Material-UI`

## Why this library?
Jest is awesome!  
But it can be a bit elaborate to do basic tasks.  
This library focuses on `REACT` + `Jest` used case and is inspired by super handy `Cypress` commands.

`@pepfar-react-lib/jest-tools` should help you write your tests much faster and make them much more readable. Disagree? Submit an issue in our repo!

### Example:

Instead of:
```javascript
// picks an option from select menu
fireEvent.mouseDown(screen.getByTestId(selectId).childNodes[0]);
screen.getByText(value);
fireEvent.click(screen.getByText(value));
checkSelectValue(selectId, value);
```

you can just write:
```javascript
// does the same as example above
select(selectId, value);
```

## Installation
```bash
npm i @pepfar-react-lib/jest-tools
```

## Usage
```javascript
import {select} from "@pepfar-react-lib/jest-tools";
// your code
select(selectId,value);
```

## API
Full list of all methods in [API docs](./docs/modules.md)
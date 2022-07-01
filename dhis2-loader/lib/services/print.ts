const colors = require('colors');

export const error = (message)=>{
    console.log(`ERROR ${colors.red(message)}`);
}

export const success = (message)=>console.log(colors.green(message));

export const info = (message)=>console.log(colors.blue(message));
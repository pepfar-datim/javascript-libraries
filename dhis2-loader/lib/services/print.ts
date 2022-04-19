import {green, red} from 'colors/safe';
import {blue} from "colors";

export const line = ()=>{
    let l = '_';
    for (let i=2;i<=process.stdout.columns;i++) l=l+'_';
    console.log(l)
}

export const linedInfo = (msg:string)=>{
    line();
    info(msg);
    line();
}

export const exception = (message:string, ...details:any)=>{
    details.forEach(console.log)
    throw new Error(red(message)+'\n\n');
}

// export const error = (message:string, ...details:string[])=>{
//     console.log(`ERROR: `+red(message));
//     details.forEach((d)=>console.log(red(d)));
// }

export const error = (message:string)=>{
    console.log(`ERROR ${red(message)}`);
    // console.log(message.map(red))
}

export const success = (message:string)=>console.log(green(message));

export const info = (message:string)=>console.log(blue(message));
import chalk from 'chalk';

export const error = (message)=>{
    console.log(`ERROR ${chalk.red(message)}`);
}

export const success = (message)=>console.log(chalk.green(message));

export const info = (message)=>console.log(chalk.blue(message));
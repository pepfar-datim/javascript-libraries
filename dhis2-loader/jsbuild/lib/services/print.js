import chalk from 'chalk';
export var error = function (message) {
    console.log("ERROR ".concat(chalk.red(message)));
};
export var success = function (message) { return console.log(chalk.green(message)); };
export var info = function (message) { return console.log(chalk.blue(message)); };
//# sourceMappingURL=print.js.map
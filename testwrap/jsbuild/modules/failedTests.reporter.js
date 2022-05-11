// @ts-ignore
module.exports = /** @class */ (function () {
    function CustomReporter() {
    }
    CustomReporter.prototype.onRunComplete = function (testContexts, results) {
        if (results.success)
            return;
        console.log("\nList of failed tests");
        results.testResults
            .filter(function (report) { return report.numFailingTests > 0; })
            .map(function (report) { return report.testFilePath; })
            .map(function (file) { return file.replace(/^.+src\//, ''); })
            .forEach(function (file) { return console.log(file); });
    };
    return CustomReporter;
}());
//# sourceMappingURL=failedTests.reporter.js.map
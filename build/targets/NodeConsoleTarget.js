"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = require("../");
var ConsoleTarget_1 = require("./ConsoleTarget");
var NodeConsoleTarget = (function (_super) {
    __extends(NodeConsoleTarget, _super);
    function NodeConsoleTarget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NodeConsoleTarget.prototype.output = function (logMessage) {
        if (!this.canOutput(logMessage)) {
            return;
        }
        var output;
        var message = "(" + this.getTimeStamp() + ")" + (__1.Log.resolveLevelName(logMessage.level) + __1.Log.formatCategory(logMessage.category)) + ": ";
        if (typeof logMessage.message[0] === "string" || typeof logMessage.message[0] === "number" || typeof logMessage.message[0] === "boolean") {
            message += logMessage.message;
            output = [this.getColor(logMessage.level) + message + NodeConsoleTarget.COLOR_RESET];
        }
        else {
            output = [this.getColor(logMessage.level) + message + JSON.stringify(logMessage.message[0], null, 2) + NodeConsoleTarget.COLOR_RESET];
        }
        this.write(logMessage.level, output);
    };
    NodeConsoleTarget.prototype.getColor = function (level) {
        switch (level) {
            case __1.Log.TRACE:
                return NodeConsoleTarget.COLOR_TRACE;
            case __1.Log.DEBUG:
                return NodeConsoleTarget.COLOR_DEBUG;
            case __1.Log.LOG:
                return NodeConsoleTarget.COLOR_LOG;
            case __1.Log.PRINT:
                return NodeConsoleTarget.COLOR_PRINT;
            case __1.Log.INFO:
                return NodeConsoleTarget.COLOR_INFO;
            case __1.Log.NOTICE:
                return NodeConsoleTarget.COLOR_NOTICE;
            case __1.Log.WARN:
                return NodeConsoleTarget.COLOR_WARN;
            case __1.Log.ERROR:
                return NodeConsoleTarget.COLOR_ERROR;
            case __1.Log.CRITICAL:
                return NodeConsoleTarget.COLOR_CRITICAL;
            case __1.Log.FATAL:
                return NodeConsoleTarget.COLOR_FATAL;
            case __1.Log.ASSERT:
                return NodeConsoleTarget.COLOR_ASSERT;
            case __1.Log.COMMAND:
                return NodeConsoleTarget.COLOR_COMMAND;
            default:
                return NodeConsoleTarget.COLOR_LOG;
        }
    };
    NodeConsoleTarget.COLOR_TRACE = "\x1b[1m\x1b[30m";
    NodeConsoleTarget.COLOR_DEBUG = "\x1b[2m\x1b[37m";
    NodeConsoleTarget.COLOR_LOG = "\x1b[2m\x1b[37m";
    NodeConsoleTarget.COLOR_INFO = "\x1b[1m\x1b[37m";
    NodeConsoleTarget.COLOR_PRINT = "\x1b[37m";
    NodeConsoleTarget.COLOR_NOTICE = "\x1b[1m\x1b[34m";
    NodeConsoleTarget.COLOR_WARN = "\x1b[1m\x1b[33m";
    NodeConsoleTarget.COLOR_CRITICAL = "\x1b[1m\x1b[31m";
    NodeConsoleTarget.COLOR_ERROR = "\x1b[31m";
    NodeConsoleTarget.COLOR_FATAL = "\x1b[41m";
    NodeConsoleTarget.COLOR_ASSERT = "\x1b[1m\x1b[33m";
    NodeConsoleTarget.COLOR_COMMAND = "\x1b[1m\x1b[36m";
    NodeConsoleTarget.COLOR_RESET = "\x1b[0m";
    return NodeConsoleTarget;
}(ConsoleTarget_1.ConsoleTarget));
exports.NodeConsoleTarget = NodeConsoleTarget;
//# sourceMappingURL=NodeConsoleTarget.js.map
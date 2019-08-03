"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("./");
var Log = (function () {
    function Log() {
    }
    Log.getLogger = function (category) {
        if (!Log.targets) {
            Log.targets = [];
        }
        return new _1.Logger(category);
    };
    Log.log = function (logMessage) {
        for (var i = 0; i < Log.targets.length; i++) {
            Log.targets[i].output(logMessage);
        }
        return logMessage;
    };
    Log.clear = function () {
        for (var i = 0; i < Log.targets.length; i++) {
            Log.targets[i].clear();
        }
    };
    Log.addTarget = function (target) {
        if (Log.targets.indexOf(target) === -1) {
            Log.targets.push(target);
        }
    };
    Log.removeTarget = function (target) {
        for (var i = 0; i < Log.targets.length; i++) {
            var logTarget = Log.targets.splice(Log.targets.indexOf(target), 1)[0];
            logTarget.destroy();
        }
    };
    Log.removeAllTargets = function () {
        for (var i = 0; i < Log.targets.length; i++) {
            var target = Log.targets[i];
            target.destroy();
        }
        Log.targets = [];
    };
    Log.getTargetByType = function (type) {
        var target;
        for (var key in Log.targets) {
            var targetType = Log.targets[key];
            if (targetType instanceof type) {
                target = targetType;
            }
        }
        return target;
    };
    Log.setLevel = function (level) {
        for (var i = 0; i < Log.targets.length; i++) {
            Log.targets[i].level = level;
        }
    };
    Log.setFilters = function (filters) {
        for (var i = 0; i < Log.targets.length; i++) {
            Log.targets[i].filters = filters;
        }
    };
    Log.formatCategory = function (category) {
        return "[" + category + "]";
    };
    Log.resolveLevelName = function (level) {
        switch (level) {
            default:
            case Log.ALL:
                return "|   ALL| ";
            case Log.TRACE:
                return "| TRACE| ";
            case Log.DEBUG:
                return "| DEBUG| ";
            case Log.LOG:
                return "|   LOG| ";
            case Log.PRINT:
                return "| PRINT| ";
            case Log.INFO:
                return "|  INFO| ";
            case Log.NOTICE:
                return "|NOTICE| ";
            case Log.WARN:
                return "|  WARN| ";
            case Log.ERROR:
                return "| ERROR| ";
            case Log.CRITICAL:
                return "|  CRIT| ";
            case Log.FATAL:
                return "| FATAL| ";
            case Log.COMMAND:
                return "|   CMD| ";
            case Log.ASSERT:
                return "|ASSERT| ";
        }
    };
    Log.destroy = function () {
        for (var i = 0; i < Log.targets.length; i++) {
            Log.targets[i].destroy();
            Log.targets[i] = null;
        }
        Log.targets = null;
    };
    Log.MARK = -1;
    Log.ALL = 0;
    Log.TRACE = 1;
    Log.DEBUG = 2;
    Log.LOG = 3;
    Log.INFO = 4;
    Log.PRINT = 5;
    Log.NOTICE = 6;
    Log.WARN = 7;
    Log.CRITICAL = 8;
    Log.ERROR = 9;
    Log.FATAL = 10;
    Log.ASSERT = 11;
    Log.COMMAND = 100;
    Log.targets = [];
    return Log;
}());
exports.Log = Log;
//# sourceMappingURL=Log.js.map
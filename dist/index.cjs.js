'use strict';

var postcss = require('postcss');
var fs = require('fs');
var path = require('path');
var shell = require('shelljs');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var repository = function () {
    var path = "https://github.com/Khandaker-Sadzzad/postcss-starzad-data.git";
    return path;
};

var init = function () { return __awaiter(void 0, void 0, void 0, function () {
    var dir, version, res, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                return [4 /*yield*/, fs.readFileSync(path.join(process.cwd() + ".cache/package.json"), "utf8")];
            case 1:
                dir = _a.sent();
                if (!dir) return [3 /*break*/, 4];
                version = JSON.parse(dir).version;
                return [4 /*yield*/, fetch("https://raw.githubusercontent.com/Khandaker-Sadzzad/postcss-starzad-data/main/package.json")];
            case 2:
                res = _a.sent();
                return [4 /*yield*/, res.json()];
            case 3:
                data = _a.sent();
                if (version !== data.version) {
                    shell.cd(process.cwd());
                    shell.rm("-rf", ".cache");
                    shell.exec("git clone ".concat(repository(), " .cache"));
                }
                _a.label = 4;
            case 4: return [3 /*break*/, 6];
            case 5:
                _a.sent();
                shell.cd(process.cwd());
                shell.rm("-rf", ".cache");
                shell.exec("git clone ".concat(repository(), " .cache"));
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };

var search = function (name) { return __awaiter(void 0, void 0, void 0, function () {
    var path$1, file;
    return __generator(this, function (_a) {
        path$1 = path.resolve(process.cwd(), "./.cache/" + name + ".json");
        try {
            file = fs.readFileSync(path$1, "utf-8");
            return [2 /*return*/, { err: null, data: JSON.parse(file) }];
        }
        catch (err) {
            return [2 /*return*/, { err: err, data: null }];
        }
        return [2 /*return*/];
    });
}); };

var getcss = (function (atRule) { return __awaiter(void 0, void 0, void 0, function () {
    var css, params, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                css = {};
                params = atRule.params.split(" ");
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, 5, 6]);
                return [4 /*yield*/, params.forEach(function (name) { return __awaiter(void 0, void 0, void 0, function () {
                        var res, data;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, search(name)];
                                case 1:
                                    res = _a.sent();
                                    if (res.err)
                                        return [2 /*return*/, console.log(name + " not found")];
                                    data = Object.entries(res.data.css);
                                    return [4 /*yield*/, data.forEach(function (decls) {
                                            css[decls[0]] = decls[1];
                                        })];
                                case 2:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            case 2:
                _a.sent();
                return [4 /*yield*/, atRule.walkDecls(function (decl) {
                        var prop = decl.prop;
                        var value = decl.value;
                        css[prop] = value;
                    })];
            case 3:
                _a.sent();
                return [3 /*break*/, 6];
            case 4:
                err_1 = _a.sent();
                console.log(err_1);
                return [3 /*break*/, 6];
            case 5: return [2 /*return*/, css];
            case 6: return [2 /*return*/];
        }
    });
}); });

var plugin = function (opts) {
    return {
        postcssPlugin: "starsquare",
        Once: function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, init()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        },
        AtRule: {
            apply: function (atRule) { return __awaiter(void 0, void 0, void 0, function () {
                var css, style_1, decls, err_1;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (((_a = atRule.parent) === null || _a === void 0 ? void 0 : _a.type) === "root")
                                return [2 /*return*/, console.error("apply can't be placed on root")];
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 4, 5, 6]);
                            return [4 /*yield*/, getcss(atRule)];
                        case 2:
                            css = _b.sent();
                            style_1 = [];
                            return [4 /*yield*/, Object.entries(css)];
                        case 3:
                            decls = _b.sent();
                            decls.forEach(function (decl) {
                                var _a, _b;
                                (_b = (_a = atRule.parent) === null || _a === void 0 ? void 0 : _a.nodes.find(function (node) { return node.type === "decl" && node.prop === decl[0]; })) === null || _b === void 0 ? void 0 : _b.remove();
                                style_1.push(new postcss.Declaration({ prop: decl[0], value: decl[1] }));
                            });
                            atRule.replaceWith(style_1);
                            return [3 /*break*/, 6];
                        case 4:
                            err_1 = _b.sent();
                            console.log(err_1);
                            return [3 /*break*/, 6];
                        case 5: return [7 /*endfinally*/];
                        case 6: return [2 /*return*/];
                    }
                });
            }); },
        },
        OnceExit: function (root) {
            console.log(root.toString());
        },
    };
};
plugin.postcss = true;
// export const postcss = true;

module.exports = plugin;

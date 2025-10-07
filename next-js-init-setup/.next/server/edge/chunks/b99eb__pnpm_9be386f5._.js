(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/b99eb__pnpm_9be386f5._.js",
"[project]/my files/new-product-application/next-js-projects/next-js-init-setup/node_modules/.pnpm/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

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
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol, Iterator */ __turbopack_context__.s([
    "__addDisposableResource",
    ()=>__addDisposableResource,
    "__assign",
    ()=>__assign,
    "__asyncDelegator",
    ()=>__asyncDelegator,
    "__asyncGenerator",
    ()=>__asyncGenerator,
    "__asyncValues",
    ()=>__asyncValues,
    "__await",
    ()=>__await,
    "__awaiter",
    ()=>__awaiter,
    "__classPrivateFieldGet",
    ()=>__classPrivateFieldGet,
    "__classPrivateFieldIn",
    ()=>__classPrivateFieldIn,
    "__classPrivateFieldSet",
    ()=>__classPrivateFieldSet,
    "__createBinding",
    ()=>__createBinding,
    "__decorate",
    ()=>__decorate,
    "__disposeResources",
    ()=>__disposeResources,
    "__esDecorate",
    ()=>__esDecorate,
    "__exportStar",
    ()=>__exportStar,
    "__extends",
    ()=>__extends,
    "__generator",
    ()=>__generator,
    "__importDefault",
    ()=>__importDefault,
    "__importStar",
    ()=>__importStar,
    "__makeTemplateObject",
    ()=>__makeTemplateObject,
    "__metadata",
    ()=>__metadata,
    "__param",
    ()=>__param,
    "__propKey",
    ()=>__propKey,
    "__read",
    ()=>__read,
    "__rest",
    ()=>__rest,
    "__rewriteRelativeImportExtension",
    ()=>__rewriteRelativeImportExtension,
    "__runInitializers",
    ()=>__runInitializers,
    "__setFunctionName",
    ()=>__setFunctionName,
    "__spread",
    ()=>__spread,
    "__spreadArray",
    ()=>__spreadArray,
    "__spreadArrays",
    ()=>__spreadArrays,
    "__values",
    ()=>__values,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for(var i = decorators.length - 1; i >= 0; i--){
        var context = {};
        for(var p in contextIn)context[p] = p === "access" ? {} : contextIn[p];
        for(var p in contextIn.access)context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
            if (done) throw new TypeError("Cannot add initializers after decoration has completed");
            extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? {
            get: descriptor.get,
            set: descriptor.set
        } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        } else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
}
;
function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++){
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
}
;
function __propKey(x) {
    return typeof x === "symbol" ? x : "".concat(x);
}
;
function __setFunctionName(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
}
;
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    //TURBOPACK unreachable
    ;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __createBinding = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function __exportStar(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for(var i = 0, l = from.length, ar; i < l; i++){
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    //TURBOPACK unreachable
    ;
    function awaitReturn(f) {
        return function(v) {
            return Promise.resolve(v).then(f, reject);
        };
    }
    function verb(n, f) {
        if (g[n]) {
            i[n] = function(v) {
                return new Promise(function(a, b) {
                    q.push([
                        n,
                        v,
                        a,
                        b
                    ]) > 1 || resume(n, v);
                });
            };
            if (f) i[n] = f(i[n]);
        }
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    //TURBOPACK unreachable
    ;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: false
            } : f ? f(v) : v;
        } : f;
    }
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    //TURBOPACK unreachable
    ;
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
            value: raw
        });
    } else {
        cooked.raw = raw;
    }
    return cooked;
}
;
var __setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
var ownKeys = function(o) {
    ownKeys = Object.getOwnPropertyNames || function(o) {
        var ar = [];
        for(var k in o)if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
        return ar;
    };
    return ownKeys(o);
};
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k = ownKeys(mod), i = 0; i < k.length; i++)if (k[i] !== "default") __createBinding(result, mod, k[i]);
    }
    __setModuleDefault(result, mod);
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() {
            try {
                inner.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        };
        env.stack.push({
            value: value,
            dispose: dispose,
            async: async
        });
    } else if (async) {
        env.stack.push({
            async: true
        });
    }
    return value;
}
var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function __disposeResources(env) {
    function fail(e) {
        env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
    }
    var r, s = 0;
    function next() {
        while(r = env.stack.pop()){
            try {
                if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
                if (r.dispose) {
                    var result = r.dispose.call(r.value);
                    if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
                        fail(e);
                        return next();
                    });
                } else s |= 1;
            } catch (e) {
                fail(e);
            }
        }
        if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
        if (env.hasError) throw env.error;
    }
    return next();
}
function __rewriteRelativeImportExtension(path, preserveJsx) {
    if (typeof path === "string" && /^\.\.?\//.test(path)) {
        return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
            return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
        });
    }
    return path;
}
const __TURBOPACK__default__export__ = {
    __extends,
    __assign,
    __rest,
    __decorate,
    __param,
    __esDecorate,
    __runInitializers,
    __propKey,
    __setFunctionName,
    __metadata,
    __awaiter,
    __generator,
    __createBinding,
    __exportStar,
    __values,
    __read,
    __spread,
    __spreadArrays,
    __spreadArray,
    __await,
    __asyncGenerator,
    __asyncDelegator,
    __asyncValues,
    __makeTemplateObject,
    __importStar,
    __importDefault,
    __classPrivateFieldGet,
    __classPrivateFieldSet,
    __classPrivateFieldIn,
    __addDisposableResource,
    __disposeResources,
    __rewriteRelativeImportExtension
};
}),
"[project]/my files/new-product-application/next-js-projects/next-js-init-setup/node_modules/.pnpm/negotiator@1.0.0/node_modules/negotiator/lib/charset.js [middleware-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * negotiator
 * Copyright(c) 2012 Isaac Z. Schlueter
 * Copyright(c) 2014 Federico Romero
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */ /**
 * Module exports.
 * @public
 */ module.exports = preferredCharsets;
module.exports.preferredCharsets = preferredCharsets;
/**
 * Module variables.
 * @private
 */ var simpleCharsetRegExp = /^\s*([^\s;]+)\s*(?:;(.*))?$/;
/**
 * Parse the Accept-Charset header.
 * @private
 */ function parseAcceptCharset(accept) {
    var accepts = accept.split(',');
    for(var i = 0, j = 0; i < accepts.length; i++){
        var charset = parseCharset(accepts[i].trim(), i);
        if (charset) {
            accepts[j++] = charset;
        }
    }
    // trim accepts
    accepts.length = j;
    return accepts;
}
/**
 * Parse a charset from the Accept-Charset header.
 * @private
 */ function parseCharset(str, i) {
    var match = simpleCharsetRegExp.exec(str);
    if (!match) return null;
    var charset = match[1];
    var q = 1;
    if (match[2]) {
        var params = match[2].split(';');
        for(var j = 0; j < params.length; j++){
            var p = params[j].trim().split('=');
            if (p[0] === 'q') {
                q = parseFloat(p[1]);
                break;
            }
        }
    }
    return {
        charset: charset,
        q: q,
        i: i
    };
}
/**
 * Get the priority of a charset.
 * @private
 */ function getCharsetPriority(charset, accepted, index) {
    var priority = {
        o: -1,
        q: 0,
        s: 0
    };
    for(var i = 0; i < accepted.length; i++){
        var spec = specify(charset, accepted[i], index);
        if (spec && (priority.s - spec.s || priority.q - spec.q || priority.o - spec.o) < 0) {
            priority = spec;
        }
    }
    return priority;
}
/**
 * Get the specificity of the charset.
 * @private
 */ function specify(charset, spec, index) {
    var s = 0;
    if (spec.charset.toLowerCase() === charset.toLowerCase()) {
        s |= 1;
    } else if (spec.charset !== '*') {
        return null;
    }
    return {
        i: index,
        o: spec.i,
        q: spec.q,
        s: s
    };
}
/**
 * Get the preferred charsets from an Accept-Charset header.
 * @public
 */ function preferredCharsets(accept, provided) {
    // RFC 2616 sec 14.2: no header = *
    var accepts = parseAcceptCharset(accept === undefined ? '*' : accept || '');
    if (!provided) {
        // sorted list of all charsets
        return accepts.filter(isQuality).sort(compareSpecs).map(getFullCharset);
    }
    var priorities = provided.map(function getPriority(type, index) {
        return getCharsetPriority(type, accepts, index);
    });
    // sorted list of accepted charsets
    return priorities.filter(isQuality).sort(compareSpecs).map(function getCharset(priority) {
        return provided[priorities.indexOf(priority)];
    });
}
/**
 * Compare two specs.
 * @private
 */ function compareSpecs(a, b) {
    return b.q - a.q || b.s - a.s || a.o - b.o || a.i - b.i || 0;
}
/**
 * Get full charset string.
 * @private
 */ function getFullCharset(spec) {
    return spec.charset;
}
/**
 * Check if a spec has any quality.
 * @private
 */ function isQuality(spec) {
    return spec.q > 0;
}
}),
"[project]/my files/new-product-application/next-js-projects/next-js-init-setup/node_modules/.pnpm/negotiator@1.0.0/node_modules/negotiator/lib/encoding.js [middleware-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * negotiator
 * Copyright(c) 2012 Isaac Z. Schlueter
 * Copyright(c) 2014 Federico Romero
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */ /**
 * Module exports.
 * @public
 */ module.exports = preferredEncodings;
module.exports.preferredEncodings = preferredEncodings;
/**
 * Module variables.
 * @private
 */ var simpleEncodingRegExp = /^\s*([^\s;]+)\s*(?:;(.*))?$/;
/**
 * Parse the Accept-Encoding header.
 * @private
 */ function parseAcceptEncoding(accept) {
    var accepts = accept.split(',');
    var hasIdentity = false;
    var minQuality = 1;
    for(var i = 0, j = 0; i < accepts.length; i++){
        var encoding = parseEncoding(accepts[i].trim(), i);
        if (encoding) {
            accepts[j++] = encoding;
            hasIdentity = hasIdentity || specify('identity', encoding);
            minQuality = Math.min(minQuality, encoding.q || 1);
        }
    }
    if (!hasIdentity) {
        /*
     * If identity doesn't explicitly appear in the accept-encoding header,
     * it's added to the list of acceptable encoding with the lowest q
     */ accepts[j++] = {
            encoding: 'identity',
            q: minQuality,
            i: i
        };
    }
    // trim accepts
    accepts.length = j;
    return accepts;
}
/**
 * Parse an encoding from the Accept-Encoding header.
 * @private
 */ function parseEncoding(str, i) {
    var match = simpleEncodingRegExp.exec(str);
    if (!match) return null;
    var encoding = match[1];
    var q = 1;
    if (match[2]) {
        var params = match[2].split(';');
        for(var j = 0; j < params.length; j++){
            var p = params[j].trim().split('=');
            if (p[0] === 'q') {
                q = parseFloat(p[1]);
                break;
            }
        }
    }
    return {
        encoding: encoding,
        q: q,
        i: i
    };
}
/**
 * Get the priority of an encoding.
 * @private
 */ function getEncodingPriority(encoding, accepted, index) {
    var priority = {
        encoding: encoding,
        o: -1,
        q: 0,
        s: 0
    };
    for(var i = 0; i < accepted.length; i++){
        var spec = specify(encoding, accepted[i], index);
        if (spec && (priority.s - spec.s || priority.q - spec.q || priority.o - spec.o) < 0) {
            priority = spec;
        }
    }
    return priority;
}
/**
 * Get the specificity of the encoding.
 * @private
 */ function specify(encoding, spec, index) {
    var s = 0;
    if (spec.encoding.toLowerCase() === encoding.toLowerCase()) {
        s |= 1;
    } else if (spec.encoding !== '*') {
        return null;
    }
    return {
        encoding: encoding,
        i: index,
        o: spec.i,
        q: spec.q,
        s: s
    };
}
;
/**
 * Get the preferred encodings from an Accept-Encoding header.
 * @public
 */ function preferredEncodings(accept, provided, preferred) {
    var accepts = parseAcceptEncoding(accept || '');
    var comparator = preferred ? function comparator(a, b) {
        if (a.q !== b.q) {
            return b.q - a.q // higher quality first
            ;
        }
        var aPreferred = preferred.indexOf(a.encoding);
        var bPreferred = preferred.indexOf(b.encoding);
        if (aPreferred === -1 && bPreferred === -1) {
            // consider the original specifity/order
            return b.s - a.s || a.o - b.o || a.i - b.i;
        }
        if (aPreferred !== -1 && bPreferred !== -1) {
            return aPreferred - bPreferred // consider the preferred order
            ;
        }
        return aPreferred === -1 ? 1 : -1 // preferred first
        ;
    } : compareSpecs;
    if (!provided) {
        // sorted list of all encodings
        return accepts.filter(isQuality).sort(comparator).map(getFullEncoding);
    }
    var priorities = provided.map(function getPriority(type, index) {
        return getEncodingPriority(type, accepts, index);
    });
    // sorted list of accepted encodings
    return priorities.filter(isQuality).sort(comparator).map(function getEncoding(priority) {
        return provided[priorities.indexOf(priority)];
    });
}
/**
 * Compare two specs.
 * @private
 */ function compareSpecs(a, b) {
    return b.q - a.q || b.s - a.s || a.o - b.o || a.i - b.i;
}
/**
 * Get full encoding string.
 * @private
 */ function getFullEncoding(spec) {
    return spec.encoding;
}
/**
 * Check if a spec has any quality.
 * @private
 */ function isQuality(spec) {
    return spec.q > 0;
}
}),
"[project]/my files/new-product-application/next-js-projects/next-js-init-setup/node_modules/.pnpm/negotiator@1.0.0/node_modules/negotiator/lib/language.js [middleware-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * negotiator
 * Copyright(c) 2012 Isaac Z. Schlueter
 * Copyright(c) 2014 Federico Romero
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */ /**
 * Module exports.
 * @public
 */ module.exports = preferredLanguages;
module.exports.preferredLanguages = preferredLanguages;
/**
 * Module variables.
 * @private
 */ var simpleLanguageRegExp = /^\s*([^\s\-;]+)(?:-([^\s;]+))?\s*(?:;(.*))?$/;
/**
 * Parse the Accept-Language header.
 * @private
 */ function parseAcceptLanguage(accept) {
    var accepts = accept.split(',');
    for(var i = 0, j = 0; i < accepts.length; i++){
        var language = parseLanguage(accepts[i].trim(), i);
        if (language) {
            accepts[j++] = language;
        }
    }
    // trim accepts
    accepts.length = j;
    return accepts;
}
/**
 * Parse a language from the Accept-Language header.
 * @private
 */ function parseLanguage(str, i) {
    var match = simpleLanguageRegExp.exec(str);
    if (!match) return null;
    var prefix = match[1];
    var suffix = match[2];
    var full = prefix;
    if (suffix) full += "-" + suffix;
    var q = 1;
    if (match[3]) {
        var params = match[3].split(';');
        for(var j = 0; j < params.length; j++){
            var p = params[j].split('=');
            if (p[0] === 'q') q = parseFloat(p[1]);
        }
    }
    return {
        prefix: prefix,
        suffix: suffix,
        q: q,
        i: i,
        full: full
    };
}
/**
 * Get the priority of a language.
 * @private
 */ function getLanguagePriority(language, accepted, index) {
    var priority = {
        o: -1,
        q: 0,
        s: 0
    };
    for(var i = 0; i < accepted.length; i++){
        var spec = specify(language, accepted[i], index);
        if (spec && (priority.s - spec.s || priority.q - spec.q || priority.o - spec.o) < 0) {
            priority = spec;
        }
    }
    return priority;
}
/**
 * Get the specificity of the language.
 * @private
 */ function specify(language, spec, index) {
    var p = parseLanguage(language);
    if (!p) return null;
    var s = 0;
    if (spec.full.toLowerCase() === p.full.toLowerCase()) {
        s |= 4;
    } else if (spec.prefix.toLowerCase() === p.full.toLowerCase()) {
        s |= 2;
    } else if (spec.full.toLowerCase() === p.prefix.toLowerCase()) {
        s |= 1;
    } else if (spec.full !== '*') {
        return null;
    }
    return {
        i: index,
        o: spec.i,
        q: spec.q,
        s: s
    };
}
;
/**
 * Get the preferred languages from an Accept-Language header.
 * @public
 */ function preferredLanguages(accept, provided) {
    // RFC 2616 sec 14.4: no header = *
    var accepts = parseAcceptLanguage(accept === undefined ? '*' : accept || '');
    if (!provided) {
        // sorted list of all languages
        return accepts.filter(isQuality).sort(compareSpecs).map(getFullLanguage);
    }
    var priorities = provided.map(function getPriority(type, index) {
        return getLanguagePriority(type, accepts, index);
    });
    // sorted list of accepted languages
    return priorities.filter(isQuality).sort(compareSpecs).map(function getLanguage(priority) {
        return provided[priorities.indexOf(priority)];
    });
}
/**
 * Compare two specs.
 * @private
 */ function compareSpecs(a, b) {
    return b.q - a.q || b.s - a.s || a.o - b.o || a.i - b.i || 0;
}
/**
 * Get full language string.
 * @private
 */ function getFullLanguage(spec) {
    return spec.full;
}
/**
 * Check if a spec has any quality.
 * @private
 */ function isQuality(spec) {
    return spec.q > 0;
}
}),
"[project]/my files/new-product-application/next-js-projects/next-js-init-setup/node_modules/.pnpm/negotiator@1.0.0/node_modules/negotiator/lib/mediaType.js [middleware-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * negotiator
 * Copyright(c) 2012 Isaac Z. Schlueter
 * Copyright(c) 2014 Federico Romero
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */ /**
 * Module exports.
 * @public
 */ module.exports = preferredMediaTypes;
module.exports.preferredMediaTypes = preferredMediaTypes;
/**
 * Module variables.
 * @private
 */ var simpleMediaTypeRegExp = /^\s*([^\s\/;]+)\/([^;\s]+)\s*(?:;(.*))?$/;
/**
 * Parse the Accept header.
 * @private
 */ function parseAccept(accept) {
    var accepts = splitMediaTypes(accept);
    for(var i = 0, j = 0; i < accepts.length; i++){
        var mediaType = parseMediaType(accepts[i].trim(), i);
        if (mediaType) {
            accepts[j++] = mediaType;
        }
    }
    // trim accepts
    accepts.length = j;
    return accepts;
}
/**
 * Parse a media type from the Accept header.
 * @private
 */ function parseMediaType(str, i) {
    var match = simpleMediaTypeRegExp.exec(str);
    if (!match) return null;
    var params = Object.create(null);
    var q = 1;
    var subtype = match[2];
    var type = match[1];
    if (match[3]) {
        var kvps = splitParameters(match[3]).map(splitKeyValuePair);
        for(var j = 0; j < kvps.length; j++){
            var pair = kvps[j];
            var key = pair[0].toLowerCase();
            var val = pair[1];
            // get the value, unwrapping quotes
            var value = val && val[0] === '"' && val[val.length - 1] === '"' ? val.slice(1, -1) : val;
            if (key === 'q') {
                q = parseFloat(value);
                break;
            }
            // store parameter
            params[key] = value;
        }
    }
    return {
        type: type,
        subtype: subtype,
        params: params,
        q: q,
        i: i
    };
}
/**
 * Get the priority of a media type.
 * @private
 */ function getMediaTypePriority(type, accepted, index) {
    var priority = {
        o: -1,
        q: 0,
        s: 0
    };
    for(var i = 0; i < accepted.length; i++){
        var spec = specify(type, accepted[i], index);
        if (spec && (priority.s - spec.s || priority.q - spec.q || priority.o - spec.o) < 0) {
            priority = spec;
        }
    }
    return priority;
}
/**
 * Get the specificity of the media type.
 * @private
 */ function specify(type, spec, index) {
    var p = parseMediaType(type);
    var s = 0;
    if (!p) {
        return null;
    }
    if (spec.type.toLowerCase() == p.type.toLowerCase()) {
        s |= 4;
    } else if (spec.type != '*') {
        return null;
    }
    if (spec.subtype.toLowerCase() == p.subtype.toLowerCase()) {
        s |= 2;
    } else if (spec.subtype != '*') {
        return null;
    }
    var keys = Object.keys(spec.params);
    if (keys.length > 0) {
        if (keys.every(function(k) {
            return spec.params[k] == '*' || (spec.params[k] || '').toLowerCase() == (p.params[k] || '').toLowerCase();
        })) {
            s |= 1;
        } else {
            return null;
        }
    }
    return {
        i: index,
        o: spec.i,
        q: spec.q,
        s: s
    };
}
/**
 * Get the preferred media types from an Accept header.
 * @public
 */ function preferredMediaTypes(accept, provided) {
    // RFC 2616 sec 14.2: no header = */*
    var accepts = parseAccept(accept === undefined ? '*/*' : accept || '');
    if (!provided) {
        // sorted list of all types
        return accepts.filter(isQuality).sort(compareSpecs).map(getFullType);
    }
    var priorities = provided.map(function getPriority(type, index) {
        return getMediaTypePriority(type, accepts, index);
    });
    // sorted list of accepted types
    return priorities.filter(isQuality).sort(compareSpecs).map(function getType(priority) {
        return provided[priorities.indexOf(priority)];
    });
}
/**
 * Compare two specs.
 * @private
 */ function compareSpecs(a, b) {
    return b.q - a.q || b.s - a.s || a.o - b.o || a.i - b.i || 0;
}
/**
 * Get full type string.
 * @private
 */ function getFullType(spec) {
    return spec.type + '/' + spec.subtype;
}
/**
 * Check if a spec has any quality.
 * @private
 */ function isQuality(spec) {
    return spec.q > 0;
}
/**
 * Count the number of quotes in a string.
 * @private
 */ function quoteCount(string) {
    var count = 0;
    var index = 0;
    while((index = string.indexOf('"', index)) !== -1){
        count++;
        index++;
    }
    return count;
}
/**
 * Split a key value pair.
 * @private
 */ function splitKeyValuePair(str) {
    var index = str.indexOf('=');
    var key;
    var val;
    if (index === -1) {
        key = str;
    } else {
        key = str.slice(0, index);
        val = str.slice(index + 1);
    }
    return [
        key,
        val
    ];
}
/**
 * Split an Accept header into media types.
 * @private
 */ function splitMediaTypes(accept) {
    var accepts = accept.split(',');
    for(var i = 1, j = 0; i < accepts.length; i++){
        if (quoteCount(accepts[j]) % 2 == 0) {
            accepts[++j] = accepts[i];
        } else {
            accepts[j] += ',' + accepts[i];
        }
    }
    // trim accepts
    accepts.length = j + 1;
    return accepts;
}
/**
 * Split a string of parameters.
 * @private
 */ function splitParameters(str) {
    var parameters = str.split(';');
    for(var i = 1, j = 0; i < parameters.length; i++){
        if (quoteCount(parameters[j]) % 2 == 0) {
            parameters[++j] = parameters[i];
        } else {
            parameters[j] += ';' + parameters[i];
        }
    }
    // trim parameters
    parameters.length = j + 1;
    for(var i = 0; i < parameters.length; i++){
        parameters[i] = parameters[i].trim();
    }
    return parameters;
}
}),
"[project]/my files/new-product-application/next-js-projects/next-js-init-setup/node_modules/.pnpm/negotiator@1.0.0/node_modules/negotiator/index.js [middleware-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/*!
 * negotiator
 * Copyright(c) 2012 Federico Romero
 * Copyright(c) 2012-2014 Isaac Z. Schlueter
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */ var preferredCharsets = __turbopack_context__.r("[project]/my files/new-product-application/next-js-projects/next-js-init-setup/node_modules/.pnpm/negotiator@1.0.0/node_modules/negotiator/lib/charset.js [middleware-edge] (ecmascript)");
var preferredEncodings = __turbopack_context__.r("[project]/my files/new-product-application/next-js-projects/next-js-init-setup/node_modules/.pnpm/negotiator@1.0.0/node_modules/negotiator/lib/encoding.js [middleware-edge] (ecmascript)");
var preferredLanguages = __turbopack_context__.r("[project]/my files/new-product-application/next-js-projects/next-js-init-setup/node_modules/.pnpm/negotiator@1.0.0/node_modules/negotiator/lib/language.js [middleware-edge] (ecmascript)");
var preferredMediaTypes = __turbopack_context__.r("[project]/my files/new-product-application/next-js-projects/next-js-init-setup/node_modules/.pnpm/negotiator@1.0.0/node_modules/negotiator/lib/mediaType.js [middleware-edge] (ecmascript)");
/**
 * Module exports.
 * @public
 */ module.exports = Negotiator;
module.exports.Negotiator = Negotiator;
/**
 * Create a Negotiator instance from a request.
 * @param {object} request
 * @public
 */ function Negotiator(request) {
    if (!(this instanceof Negotiator)) {
        return new Negotiator(request);
    }
    this.request = request;
}
Negotiator.prototype.charset = function charset(available) {
    var set = this.charsets(available);
    return set && set[0];
};
Negotiator.prototype.charsets = function charsets(available) {
    return preferredCharsets(this.request.headers['accept-charset'], available);
};
Negotiator.prototype.encoding = function encoding(available, opts) {
    var set = this.encodings(available, opts);
    return set && set[0];
};
Negotiator.prototype.encodings = function encodings(available, options) {
    var opts = options || {};
    return preferredEncodings(this.request.headers['accept-encoding'], available, opts.preferred);
};
Negotiator.prototype.language = function language(available) {
    var set = this.languages(available);
    return set && set[0];
};
Negotiator.prototype.languages = function languages(available) {
    return preferredLanguages(this.request.headers['accept-language'], available);
};
Negotiator.prototype.mediaType = function mediaType(available) {
    var set = this.mediaTypes(available);
    return set && set[0];
};
Negotiator.prototype.mediaTypes = function mediaTypes(available) {
    return preferredMediaTypes(this.request.headers.accept, available);
};
// Backwards compatibility
Negotiator.prototype.preferredCharset = Negotiator.prototype.charset;
Negotiator.prototype.preferredCharsets = Negotiator.prototype.charsets;
Negotiator.prototype.preferredEncoding = Negotiator.prototype.encoding;
Negotiator.prototype.preferredEncodings = Negotiator.prototype.encodings;
Negotiator.prototype.preferredLanguage = Negotiator.prototype.language;
Negotiator.prototype.preferredLanguages = Negotiator.prototype.languages;
Negotiator.prototype.preferredMediaType = Negotiator.prototype.mediaType;
Negotiator.prototype.preferredMediaTypes = Negotiator.prototype.mediaTypes;
}),
"[project]/my files/new-product-application/next-js-projects/next-js-init-setup/node_modules/.pnpm/@formatjs+fast-memoize@2.2.7/node_modules/@formatjs/fast-memoize/lib/index.js [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//
// Main
//
__turbopack_context__.s([
    "memoize",
    ()=>memoize,
    "strategies",
    ()=>strategies
]);
function memoize(fn, options) {
    var cache = options && options.cache ? options.cache : cacheDefault;
    var serializer = options && options.serializer ? options.serializer : serializerDefault;
    var strategy = options && options.strategy ? options.strategy : strategyDefault;
    return strategy(fn, {
        cache: cache,
        serializer: serializer
    });
}
//
// Strategy
//
function isPrimitive(value) {
    return value == null || typeof value === 'number' || typeof value === 'boolean'; // || typeof value === "string" 'unsafe' primitive for our needs
}
function monadic(fn, cache, serializer, arg) {
    var cacheKey = isPrimitive(arg) ? arg : serializer(arg);
    var computedValue = cache.get(cacheKey);
    if (typeof computedValue === 'undefined') {
        computedValue = fn.call(this, arg);
        cache.set(cacheKey, computedValue);
    }
    return computedValue;
}
function variadic(fn, cache, serializer) {
    var args = Array.prototype.slice.call(arguments, 3);
    var cacheKey = serializer(args);
    var computedValue = cache.get(cacheKey);
    if (typeof computedValue === 'undefined') {
        computedValue = fn.apply(this, args);
        cache.set(cacheKey, computedValue);
    }
    return computedValue;
}
function assemble(fn, context, strategy, cache, serialize) {
    return strategy.bind(context, fn, cache, serialize);
}
function strategyDefault(fn, options) {
    var strategy = fn.length === 1 ? monadic : variadic;
    return assemble(fn, this, strategy, options.cache.create(), options.serializer);
}
function strategyVariadic(fn, options) {
    return assemble(fn, this, variadic, options.cache.create(), options.serializer);
}
function strategyMonadic(fn, options) {
    return assemble(fn, this, monadic, options.cache.create(), options.serializer);
}
//
// Serializer
//
var serializerDefault = function() {
    return JSON.stringify(arguments);
};
//
// Cache
//
var ObjectWithoutPrototypeCache = function() {
    function ObjectWithoutPrototypeCache() {
        this.cache = Object.create(null);
    }
    ObjectWithoutPrototypeCache.prototype.get = function(key) {
        return this.cache[key];
    };
    ObjectWithoutPrototypeCache.prototype.set = function(key, value) {
        this.cache[key] = value;
    };
    return ObjectWithoutPrototypeCache;
}();
var cacheDefault = {
    create: function create() {
        return new ObjectWithoutPrototypeCache();
    }
};
var strategies = {
    variadic: strategyVariadic,
    monadic: strategyMonadic
};
}),
"[project]/my files/new-product-application/next-js-projects/next-js-init-setup/node_modules/.pnpm/@formatjs+icu-skeleton-parser@1.8.15/node_modules/@formatjs/icu-skeleton-parser/lib/date-time.js [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * https://unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * Credit: https://github.com/caridy/intl-datetimeformat-pattern/blob/master/index.js
 * with some tweaks
 */ __turbopack_context__.s([
    "parseDateTimeSkeleton",
    ()=>parseDateTimeSkeleton
]);
var DATE_TIME_REGEX = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function parseDateTimeSkeleton(skeleton) {
    var result = {};
    skeleton.replace(DATE_TIME_REGEX, function(match) {
        var len = match.length;
        switch(match[0]){
            // Era
            case 'G':
                result.era = len === 4 ? 'long' : len === 5 ? 'narrow' : 'short';
                break;
            // Year
            case 'y':
                result.year = len === 2 ? '2-digit' : 'numeric';
                break;
            case 'Y':
            case 'u':
            case 'U':
            case 'r':
                throw new RangeError('`Y/u/U/r` (year) patterns are not supported, use `y` instead');
            // Quarter
            case 'q':
            case 'Q':
                throw new RangeError('`q/Q` (quarter) patterns are not supported');
            // Month
            case 'M':
            case 'L':
                result.month = [
                    'numeric',
                    '2-digit',
                    'short',
                    'long',
                    'narrow'
                ][len - 1];
                break;
            // Week
            case 'w':
            case 'W':
                throw new RangeError('`w/W` (week) patterns are not supported');
            case 'd':
                result.day = [
                    'numeric',
                    '2-digit'
                ][len - 1];
                break;
            case 'D':
            case 'F':
            case 'g':
                throw new RangeError('`D/F/g` (day) patterns are not supported, use `d` instead');
            // Weekday
            case 'E':
                result.weekday = len === 4 ? 'long' : len === 5 ? 'narrow' : 'short';
                break;
            case 'e':
                if (len < 4) {
                    throw new RangeError('`e..eee` (weekday) patterns are not supported');
                }
                result.weekday = [
                    'short',
                    'long',
                    'narrow',
                    'short'
                ][len - 4];
                break;
            case 'c':
                if (len < 4) {
                    throw new RangeError('`c..ccc` (weekday) patterns are not supported');
                }
                result.weekday = [
                    'short',
                    'long',
                    'narrow',
                    'short'
                ][len - 4];
                break;
            // Period
            case 'a':
                result.hour12 = true;
                break;
            case 'b':
            case 'B':
                throw new RangeError('`b/B` (period) patterns are not supported, use `a` instead');
            // Hour
            case 'h':
                result.hourCycle = 'h12';
                result.hour = [
                    'numeric',
                    '2-digit'
                ][len - 1];
                break;
            case 'H':
                result.hourCycle = 'h23';
                result.hour = [
                    'numeric',
                    '2-digit'
                ][len - 1];
                break;
            case 'K':
                result.hourCycle = 'h11';
                result.hour = [
                    'numeric',
                    '2-digit'
                ][len - 1];
                break;
            case 'k':
                result.hourCycle = 'h24';
                result.hour = [
                    'numeric',
                    '2-digit'
                ][len - 1];
                break;
            case 'j':
            case 'J':
            case 'C':
                throw new RangeError('`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead');
            // Minute
            case 'm':
                result.minute = [
                    'numeric',
                    '2-digit'
                ][len - 1];
                break;
            // Second
            case 's':
                result.second = [
                    'numeric',
                    '2-digit'
                ][len - 1];
                break;
            case 'S':
            case 'A':
                throw new RangeError('`S/A` (second) patterns are not supported, use `s` instead');
            // Zone
            case 'z':
                result.timeZoneName = len < 4 ? 'short' : 'long';
                break;
            case 'Z':
            case 'O':
            case 'v':
            case 'V':
            case 'X':
            case 'x':
                throw new RangeError('`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead');
        }
        return '';
    });
    return result;
}
}),
"[project]/my files/new-product-application/next-js-projects/next-js-init-setup/node_modules/.pnpm/@formatjs+icu-skeleton-parser@1.8.15/node_modules/@formatjs/icu-skeleton-parser/lib/regex.generated.js [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// @generated from regex-gen.ts
__turbopack_context__.s([
    "WHITE_SPACE_REGEX",
    ()=>WHITE_SPACE_REGEX
]);
var WHITE_SPACE_REGEX = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
}),
"[project]/my files/new-product-application/next-js-projects/next-js-init-setup/node_modules/.pnpm/@formatjs+icu-skeleton-parser@1.8.15/node_modules/@formatjs/icu-skeleton-parser/lib/number.js [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseNumberSkeleton",
    ()=>parseNumberSkeleton,
    "parseNumberSkeletonFromString",
    ()=>parseNumberSkeletonFromString
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my files/new-product-application/next-js-projects/next-js-init-setup/node_modules/.pnpm/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$skeleton$2d$parser$40$1$2e$8$2e$15$2f$node_modules$2f40$formatjs$2f$icu$2d$skeleton$2d$parser$2f$lib$2f$regex$2e$generated$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my files/new-product-application/next-js-projects/next-js-init-setup/node_modules/.pnpm/@formatjs+icu-skeleton-parser@1.8.15/node_modules/@formatjs/icu-skeleton-parser/lib/regex.generated.js [middleware-edge] (ecmascript)");
;
;
function parseNumberSkeletonFromString(skeleton) {
    if (skeleton.length === 0) {
        throw new Error('Number skeleton cannot be empty');
    }
    // Parse the skeleton
    var stringTokens = skeleton.split(__TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$skeleton$2d$parser$40$1$2e$8$2e$15$2f$node_modules$2f40$formatjs$2f$icu$2d$skeleton$2d$parser$2f$lib$2f$regex$2e$generated$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["WHITE_SPACE_REGEX"]).filter(function(x) {
        return x.length > 0;
    });
    var tokens = [];
    for(var _i = 0, stringTokens_1 = stringTokens; _i < stringTokens_1.length; _i++){
        var stringToken = stringTokens_1[_i];
        var stemAndOptions = stringToken.split('/');
        if (stemAndOptions.length === 0) {
            throw new Error('Invalid number skeleton');
        }
        var stem = stemAndOptions[0], options = stemAndOptions.slice(1);
        for(var _a = 0, options_1 = options; _a < options_1.length; _a++){
            var option = options_1[_a];
            if (option.length === 0) {
                throw new Error('Invalid number skeleton');
            }
        }
        tokens.push({
            stem: stem,
            options: options
        });
    }
    return tokens;
}
function icuUnitToEcma(unit) {
    return unit.replace(/^(.*?)-/, '');
}
var FRACTION_PRECISION_REGEX = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g;
var SIGNIFICANT_PRECISION_REGEX = /^(@+)?(\+|#+)?[rs]?$/g;
var INTEGER_WIDTH_REGEX = /(\*)(0+)|(#+)(0+)|(0+)/g;
var CONCISE_INTEGER_WIDTH_REGEX = /^(0+)$/;
function parseSignificantPrecision(str) {
    var result = {};
    if (str[str.length - 1] === 'r') {
        result.roundingPriority = 'morePrecision';
    } else if (str[str.length - 1] === 's') {
        result.roundingPriority = 'lessPrecision';
    }
    str.replace(SIGNIFICANT_PRECISION_REGEX, function(_, g1, g2) {
        // @@@ case
        if (typeof g2 !== 'string') {
            result.minimumSignificantDigits = g1.length;
            result.maximumSignificantDigits = g1.length;
        } else if (g2 === '+') {
            result.minimumSignificantDigits = g1.length;
        } else if (g1[0] === '#') {
            result.maximumSignificantDigits = g1.length;
        } else {
            result.minimumSignificantDigits = g1.length;
            result.maximumSignificantDigits = g1.length + (typeof g2 === 'string' ? g2.length : 0);
        }
        return '';
    });
    return result;
}
function parseSign(str) {
    switch(str){
        case 'sign-auto':
            return {
                signDisplay: 'auto'
            };
        case 'sign-accounting':
        case '()':
            return {
                currencySign: 'accounting'
            };
        case 'sign-always':
        case '+!':
            return {
                signDisplay: 'always'
            };
        case 'sign-accounting-always':
        case '()!':
            return {
                signDisplay: 'always',
                currencySign: 'accounting'
            };
        case 'sign-except-zero':
        case '+?':
            return {
                signDisplay: 'exceptZero'
            };
        case 'sign-accounting-except-zero':
        case '()?':
            return {
                signDisplay: 'exceptZero',
                currencySign: 'accounting'
            };
        case 'sign-never':
        case '+_':
            return {
                signDisplay: 'never'
            };
    }
}
function parseConciseScientificAndEngineeringStem(stem) {
    // Engineering
    var result;
    if (stem[0] === 'E' && stem[1] === 'E') {
        result = {
            notation: 'engineering'
        };
        stem = stem.slice(2);
    } else if (stem[0] === 'E') {
        result = {
            notation: 'scientific'
        };
        stem = stem.slice(1);
    }
    if (result) {
        var signDisplay = stem.slice(0, 2);
        if (signDisplay === '+!') {
            result.signDisplay = 'always';
            stem = stem.slice(2);
        } else if (signDisplay === '+?') {
            result.signDisplay = 'exceptZero';
            stem = stem.slice(2);
        }
        if (!CONCISE_INTEGER_WIDTH_REGEX.test(stem)) {
            throw new Error('Malformed concise eng/scientific notation');
        }
        result.minimumIntegerDigits = stem.length;
    }
    return result;
}
function parseNotationOptions(opt) {
    var result = {};
    var signOpts = parseSign(opt);
    if (signOpts) {
        return signOpts;
    }
    return result;
}
function parseNumberSkeleton(tokens) {
    var result = {};
    for(var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++){
        var token = tokens_1[_i];
        switch(token.stem){
            case 'percent':
            case '%':
                result.style = 'percent';
                continue;
            case '%x100':
                result.style = 'percent';
                result.scale = 100;
                continue;
            case 'currency':
                result.style = 'currency';
                result.currency = token.options[0];
                continue;
            case 'group-off':
            case ',_':
                result.useGrouping = false;
                continue;
            case 'precision-integer':
            case '.':
                result.maximumFractionDigits = 0;
                continue;
            case 'measure-unit':
            case 'unit':
                result.style = 'unit';
                result.unit = icuUnitToEcma(token.options[0]);
                continue;
            case 'compact-short':
            case 'K':
                result.notation = 'compact';
                result.compactDisplay = 'short';
                continue;
            case 'compact-long':
            case 'KK':
                result.notation = 'compact';
                result.compactDisplay = 'long';
                continue;
            case 'scientific':
                result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["__assign"])({}, result), {
                    notation: 'scientific'
                }), token.options.reduce(function(all, opt) {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["__assign"])({}, all), parseNotationOptions(opt));
                }, {}));
                continue;
            case 'engineering':
                result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["__assign"])({}, result), {
                    notation: 'engineering'
                }), token.options.reduce(function(all, opt) {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["__assign"])({}, all), parseNotationOptions(opt));
                }, {}));
                continue;
            case 'notation-simple':
                result.notation = 'standard';
                continue;
            // https://github.com/unicode-org/icu/blob/master/icu4c/source/i18n/unicode/unumberformatter.h
            case 'unit-width-narrow':
                result.currencyDisplay = 'narrowSymbol';
                result.unitDisplay = 'narrow';
                continue;
            case 'unit-width-short':
                result.currencyDisplay = 'code';
                result.unitDisplay = 'short';
                continue;
            case 'unit-width-full-name':
                result.currencyDisplay = 'name';
                result.unitDisplay = 'long';
                continue;
            case 'unit-width-iso-code':
                result.currencyDisplay = 'symbol';
                continue;
            case 'scale':
                result.scale = parseFloat(token.options[0]);
                continue;
            case 'rounding-mode-floor':
                result.roundingMode = 'floor';
                continue;
            case 'rounding-mode-ceiling':
                result.roundingMode = 'ceil';
                continue;
            case 'rounding-mode-down':
                result.roundingMode = 'trunc';
                continue;
            case 'rounding-mode-up':
                result.roundingMode = 'expand';
                continue;
            case 'rounding-mode-half-even':
                result.roundingMode = 'halfEven';
                continue;
            case 'rounding-mode-half-down':
                result.roundingMode = 'halfTrunc';
                continue;
            case 'rounding-mode-half-up':
                result.roundingMode = 'halfExpand';
                continue;
            // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#integer-width
            case 'integer-width':
                if (token.options.length > 1) {
                    throw new RangeError('integer-width stems only accept a single optional option');
                }
                token.options[0].replace(INTEGER_WIDTH_REGEX, function(_, g1, g2, g3, g4, g5) {
                    if (g1) {
                        result.minimumIntegerDigits = g2.length;
                    } else if (g3 && g4) {
                        throw new Error('We currently do not support maximum integer digits');
                    } else if (g5) {
                        throw new Error('We currently do not support exact integer digits');
                    }
                    return '';
                });
                continue;
        }
        // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#integer-width
        if (CONCISE_INTEGER_WIDTH_REGEX.test(token.stem)) {
            result.minimumIntegerDigits = token.stem.length;
            continue;
        }
        if (FRACTION_PRECISION_REGEX.test(token.stem)) {
            // Precision
            // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#fraction-precision
            // precision-integer case
            if (token.options.length > 1) {
                throw new RangeError('Fraction-precision stems only accept a single optional option');
            }
            token.stem.replace(FRACTION_PRECISION_REGEX, function(_, g1, g2, g3, g4, g5) {
                // .000* case (before ICU67 it was .000+)
                if (g2 === '*') {
                    result.minimumFractionDigits = g1.length;
                } else if (g3 && g3[0] === '#') {
                    result.maximumFractionDigits = g3.length;
                } else if (g4 && g5) {
                    result.minimumFractionDigits = g4.length;
                    result.maximumFractionDigits = g4.length + g5.length;
                } else {
                    result.minimumFractionDigits = g1.length;
                    result.maximumFractionDigits = g1.length;
                }
                return '';
            });
            var opt = token.options[0];
            // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#trailing-zero-display
            if (opt === 'w') {
                result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["__assign"])({}, result), {
                    trailingZeroDisplay: 'stripIfInteger'
                });
            } else if (opt) {
                result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["__assign"])({}, result), parseSignificantPrecision(opt));
            }
            continue;
        }
        // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#significant-digits-precision
        if (SIGNIFICANT_PRECISION_REGEX.test(token.stem)) {
            result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["__assign"])({}, result), parseSignificantPrecision(token.stem));
            continue;
        }
        var signOpts = parseSign(token.stem);
        if (signOpts) {
            result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["__assign"])({}, result), signOpts);
        }
        var conciseScientificAndEngineeringOpts = parseConciseScientificAndEngineeringStem(token.stem);
        if (conciseScientificAndEngineeringOpts) {
            result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["__assign"])({}, result), conciseScientificAndEngineeringOpts);
        }
    }
    return result;
}
}),
"[project]/my files/new-product-application/next-js-projects/next-js-init-setup/node_modules/.pnpm/@formatjs+icu-skeleton-parser@1.8.15/node_modules/@formatjs/icu-skeleton-parser/lib/index.js [middleware-edge] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$skeleton$2d$parser$40$1$2e$8$2e$15$2f$node_modules$2f40$formatjs$2f$icu$2d$skeleton$2d$parser$2f$lib$2f$date$2d$time$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my files/new-product-application/next-js-projects/next-js-init-setup/node_modules/.pnpm/@formatjs+icu-skeleton-parser@1.8.15/node_modules/@formatjs/icu-skeleton-parser/lib/date-time.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$skeleton$2d$parser$40$1$2e$8$2e$15$2f$node_modules$2f40$formatjs$2f$icu$2d$skeleton$2d$parser$2f$lib$2f$number$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my files/new-product-application/next-js-projects/next-js-init-setup/node_modules/.pnpm/@formatjs+icu-skeleton-parser@1.8.15/node_modules/@formatjs/icu-skeleton-parser/lib/number.js [middleware-edge] (ecmascript)");
;
;
}),
"[project]/my files/new-product-application/next-js-projects/next-js-init-setup/node_modules/.pnpm/intl-messageformat@10.7.17/node_modules/intl-messageformat/lib/src/error.js [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ErrorCode",
    ()=>ErrorCode,
    "FormatError",
    ()=>FormatError,
    "InvalidValueError",
    ()=>InvalidValueError,
    "InvalidValueTypeError",
    ()=>InvalidValueTypeError,
    "MissingValueError",
    ()=>MissingValueError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my files/new-product-application/next-js-projects/next-js-init-setup/node_modules/.pnpm/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs [middleware-edge] (ecmascript)");
;
var ErrorCode;
(function(ErrorCode) {
    // When we have a placeholder but no value to format
    ErrorCode["MISSING_VALUE"] = "MISSING_VALUE";
    // When value supplied is invalid
    ErrorCode["INVALID_VALUE"] = "INVALID_VALUE";
    // When we need specific Intl API but it's not available
    ErrorCode["MISSING_INTL_API"] = "MISSING_INTL_API";
})(ErrorCode || (ErrorCode = {}));
var FormatError = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["__extends"])(FormatError, _super);
    function FormatError(msg, code, originalMessage) {
        var _this = _super.call(this, msg) || this;
        _this.code = code;
        _this.originalMessage = originalMessage;
        return _this;
    }
    FormatError.prototype.toString = function() {
        return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    };
    return FormatError;
}(Error);
;
var InvalidValueError = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["__extends"])(InvalidValueError, _super);
    function InvalidValueError(variableId, value, options, originalMessage) {
        return _super.call(this, "Invalid values for \"".concat(variableId, "\": \"").concat(value, "\". Options are \"").concat(Object.keys(options).join('", "'), "\""), ErrorCode.INVALID_VALUE, originalMessage) || this;
    }
    return InvalidValueError;
}(FormatError);
;
var InvalidValueTypeError = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["__extends"])(InvalidValueTypeError, _super);
    function InvalidValueTypeError(value, type, originalMessage) {
        return _super.call(this, "Value for \"".concat(value, "\" must be of type ").concat(type), ErrorCode.INVALID_VALUE, originalMessage) || this;
    }
    return InvalidValueTypeError;
}(FormatError);
;
var MissingValueError = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["__extends"])(MissingValueError, _super);
    function MissingValueError(variableId, originalMessage) {
        return _super.call(this, "The intl string context variable \"".concat(variableId, "\" was not provided to the string \"").concat(originalMessage, "\""), ErrorCode.MISSING_VALUE, originalMessage) || this;
    }
    return MissingValueError;
}(FormatError);
;
}),
"[project]/my files/new-product-application/next-js-projects/next-js-init-setup/node_modules/.pnpm/intl-messageformat@10.7.17/node_modules/intl-messageformat/lib/src/formatters.js [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PART_TYPE",
    ()=>PART_TYPE,
    "formatToParts",
    ()=>formatToParts,
    "isFormatXMLElementFn",
    ()=>isFormatXMLElementFn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$3$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/my files/new-product-application/next-js-projects/next-js-init-setup/node_modules/.pnpm/@formatjs+icu-messageformat-parser@2.11.3/node_modules/@formatjs/icu-messageformat-parser/lib/index.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$3$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my files/new-product-application/next-js-projects/next-js-init-setup/node_modules/.pnpm/@formatjs+icu-messageformat-parser@2.11.3/node_modules/@formatjs/icu-messageformat-parser/lib/types.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f$intl$2d$messageformat$40$10$2e$7$2e$17$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$error$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my files/new-product-application/next-js-projects/next-js-init-setup/node_modules/.pnpm/intl-messageformat@10.7.17/node_modules/intl-messageformat/lib/src/error.js [middleware-edge] (ecmascript)");
;
;
var PART_TYPE;
(function(PART_TYPE) {
    PART_TYPE[PART_TYPE["literal"] = 0] = "literal";
    PART_TYPE[PART_TYPE["object"] = 1] = "object";
})(PART_TYPE || (PART_TYPE = {}));
function mergeLiteral(parts) {
    if (parts.length < 2) {
        return parts;
    }
    return parts.reduce(function(all, part) {
        var lastPart = all[all.length - 1];
        if (!lastPart || lastPart.type !== PART_TYPE.literal || part.type !== PART_TYPE.literal) {
            all.push(part);
        } else {
            lastPart.value += part.value;
        }
        return all;
    }, []);
}
function isFormatXMLElementFn(el) {
    return typeof el === 'function';
}
function formatToParts(els, locales, formatters, formats, values, currentPluralValue, // For debugging
originalMessage) {
    // Hot path for straight simple msg translations
    if (els.length === 1 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$3$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["isLiteralElement"])(els[0])) {
        return [
            {
                type: PART_TYPE.literal,
                value: els[0].value
            }
        ];
    }
    var result = [];
    for(var _i = 0, els_1 = els; _i < els_1.length; _i++){
        var el = els_1[_i];
        // Exit early for string parts.
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$3$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["isLiteralElement"])(el)) {
            result.push({
                type: PART_TYPE.literal,
                value: el.value
            });
            continue;
        }
        // TODO: should this part be literal type?
        // Replace `#` in plural rules with the actual numeric value.
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$3$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["isPoundElement"])(el)) {
            if (typeof currentPluralValue === 'number') {
                result.push({
                    type: PART_TYPE.literal,
                    value: formatters.getNumberFormat(locales).format(currentPluralValue)
                });
            }
            continue;
        }
        var varName = el.value;
        // Enforce that all required values are provided by the caller.
        if (!(values && varName in values)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f$intl$2d$messageformat$40$10$2e$7$2e$17$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$error$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["MissingValueError"](varName, originalMessage);
        }
        var value = values[varName];
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$3$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["isArgumentElement"])(el)) {
            if (!value || typeof value === 'string' || typeof value === 'number') {
                value = typeof value === 'string' || typeof value === 'number' ? String(value) : '';
            }
            result.push({
                type: typeof value === 'string' ? PART_TYPE.literal : PART_TYPE.object,
                value: value
            });
            continue;
        }
        // Recursively format plural and select parts' option — which can be a
        // nested pattern structure. The choosing of the option to use is
        // abstracted-by and delegated-to the part helper object.
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$3$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["isDateElement"])(el)) {
            var style = typeof el.style === 'string' ? formats.date[el.style] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$3$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["isDateTimeSkeleton"])(el.style) ? el.style.parsedOptions : undefined;
            result.push({
                type: PART_TYPE.literal,
                value: formatters.getDateTimeFormat(locales, style).format(value)
            });
            continue;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$3$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["isTimeElement"])(el)) {
            var style = typeof el.style === 'string' ? formats.time[el.style] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$3$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["isDateTimeSkeleton"])(el.style) ? el.style.parsedOptions : formats.time.medium;
            result.push({
                type: PART_TYPE.literal,
                value: formatters.getDateTimeFormat(locales, style).format(value)
            });
            continue;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$3$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["isNumberElement"])(el)) {
            var style = typeof el.style === 'string' ? formats.number[el.style] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$3$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["isNumberSkeleton"])(el.style) ? el.style.parsedOptions : undefined;
            if (style && style.scale) {
                value = value * (style.scale || 1);
            }
            result.push({
                type: PART_TYPE.literal,
                value: formatters.getNumberFormat(locales, style).format(value)
            });
            continue;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$3$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["isTagElement"])(el)) {
            var children = el.children, value_1 = el.value;
            var formatFn = values[value_1];
            if (!isFormatXMLElementFn(formatFn)) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f$intl$2d$messageformat$40$10$2e$7$2e$17$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$error$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["InvalidValueTypeError"](value_1, 'function', originalMessage);
            }
            var parts = formatToParts(children, locales, formatters, formats, values, currentPluralValue);
            var chunks = formatFn(parts.map(function(p) {
                return p.value;
            }));
            if (!Array.isArray(chunks)) {
                chunks = [
                    chunks
                ];
            }
            result.push.apply(result, chunks.map(function(c) {
                return {
                    type: typeof c === 'string' ? PART_TYPE.literal : PART_TYPE.object,
                    value: c
                };
            }));
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$3$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["isSelectElement"])(el)) {
            var opt = el.options[value] || el.options.other;
            if (!opt) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f$intl$2d$messageformat$40$10$2e$7$2e$17$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$error$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["InvalidValueError"](el.value, value, Object.keys(el.options), originalMessage);
            }
            result.push.apply(result, formatToParts(opt.value, locales, formatters, formats, values));
            continue;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$3$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$types$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["isPluralElement"])(el)) {
            var opt = el.options["=".concat(value)];
            if (!opt) {
                if (!Intl.PluralRules) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f$intl$2d$messageformat$40$10$2e$7$2e$17$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$error$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["FormatError"]("Intl.PluralRules is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-pluralrules\"\n", __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f$intl$2d$messageformat$40$10$2e$7$2e$17$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$error$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ErrorCode"].MISSING_INTL_API, originalMessage);
                }
                var rule = formatters.getPluralRules(locales, {
                    type: el.pluralType
                }).select(value - (el.offset || 0));
                opt = el.options[rule] || el.options.other;
            }
            if (!opt) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f$intl$2d$messageformat$40$10$2e$7$2e$17$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$error$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["InvalidValueError"](el.value, value, Object.keys(el.options), originalMessage);
            }
            result.push.apply(result, formatToParts(opt.value, locales, formatters, formats, values, value - (el.offset || 0)));
            continue;
        }
    }
    return mergeLiteral(result);
}
}),
"[project]/my files/new-product-application/next-js-projects/next-js-init-setup/node_modules/.pnpm/intl-messageformat@10.7.17/node_modules/intl-messageformat/lib/src/core.js [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/ __turbopack_context__.s([
    "IntlMessageFormat",
    ()=>IntlMessageFormat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my files/new-product-application/next-js-projects/next-js-init-setup/node_modules/.pnpm/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$fast$2d$memoize$40$2$2e$2$2e$7$2f$node_modules$2f40$formatjs$2f$fast$2d$memoize$2f$lib$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my files/new-product-application/next-js-projects/next-js-init-setup/node_modules/.pnpm/@formatjs+fast-memoize@2.2.7/node_modules/@formatjs/fast-memoize/lib/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$3$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/my files/new-product-application/next-js-projects/next-js-init-setup/node_modules/.pnpm/@formatjs+icu-messageformat-parser@2.11.3/node_modules/@formatjs/icu-messageformat-parser/lib/index.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f$intl$2d$messageformat$40$10$2e$7$2e$17$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$formatters$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my files/new-product-application/next-js-projects/next-js-init-setup/node_modules/.pnpm/intl-messageformat@10.7.17/node_modules/intl-messageformat/lib/src/formatters.js [middleware-edge] (ecmascript)");
;
;
;
;
// -- MessageFormat --------------------------------------------------------
function mergeConfig(c1, c2) {
    if (!c2) {
        return c1;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["__assign"])({}, c1 || {}), c2 || {}), Object.keys(c1).reduce(function(all, k) {
        all[k] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["__assign"])({}, c1[k]), c2[k] || {});
        return all;
    }, {}));
}
function mergeConfigs(defaultConfig, configs) {
    if (!configs) {
        return defaultConfig;
    }
    return Object.keys(defaultConfig).reduce(function(all, k) {
        all[k] = mergeConfig(defaultConfig[k], configs[k]);
        return all;
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["__assign"])({}, defaultConfig));
}
function createFastMemoizeCache(store) {
    return {
        create: function() {
            return {
                get: function(key) {
                    return store[key];
                },
                set: function(key, value) {
                    store[key] = value;
                }
            };
        }
    };
}
function createDefaultFormatters(cache) {
    if (cache === void 0) {
        cache = {
            number: {},
            dateTime: {},
            pluralRules: {}
        };
    }
    return {
        getNumberFormat: (0, __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$fast$2d$memoize$40$2$2e$2$2e$7$2f$node_modules$2f40$formatjs$2f$fast$2d$memoize$2f$lib$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["memoize"])(function() {
            var _a;
            var args = [];
            for(var _i = 0; _i < arguments.length; _i++){
                args[_i] = arguments[_i];
            }
            return new ((_a = Intl.NumberFormat).bind.apply(_a, (0, __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["__spreadArray"])([
                void 0
            ], args, false)))();
        }, {
            cache: createFastMemoizeCache(cache.number),
            strategy: __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$fast$2d$memoize$40$2$2e$2$2e$7$2f$node_modules$2f40$formatjs$2f$fast$2d$memoize$2f$lib$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["strategies"].variadic
        }),
        getDateTimeFormat: (0, __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$fast$2d$memoize$40$2$2e$2$2e$7$2f$node_modules$2f40$formatjs$2f$fast$2d$memoize$2f$lib$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["memoize"])(function() {
            var _a;
            var args = [];
            for(var _i = 0; _i < arguments.length; _i++){
                args[_i] = arguments[_i];
            }
            return new ((_a = Intl.DateTimeFormat).bind.apply(_a, (0, __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["__spreadArray"])([
                void 0
            ], args, false)))();
        }, {
            cache: createFastMemoizeCache(cache.dateTime),
            strategy: __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$fast$2d$memoize$40$2$2e$2$2e$7$2f$node_modules$2f40$formatjs$2f$fast$2d$memoize$2f$lib$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["strategies"].variadic
        }),
        getPluralRules: (0, __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$fast$2d$memoize$40$2$2e$2$2e$7$2f$node_modules$2f40$formatjs$2f$fast$2d$memoize$2f$lib$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["memoize"])(function() {
            var _a;
            var args = [];
            for(var _i = 0; _i < arguments.length; _i++){
                args[_i] = arguments[_i];
            }
            return new ((_a = Intl.PluralRules).bind.apply(_a, (0, __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["__spreadArray"])([
                void 0
            ], args, false)))();
        }, {
            cache: createFastMemoizeCache(cache.pluralRules),
            strategy: __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$fast$2d$memoize$40$2$2e$2$2e$7$2f$node_modules$2f40$formatjs$2f$fast$2d$memoize$2f$lib$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["strategies"].variadic
        })
    };
}
var IntlMessageFormat = function() {
    function IntlMessageFormat(message, locales, overrideFormats, opts) {
        if (locales === void 0) {
            locales = IntlMessageFormat.defaultLocale;
        }
        var _this = this;
        this.formatterCache = {
            number: {},
            dateTime: {},
            pluralRules: {}
        };
        this.format = function(values) {
            var parts = _this.formatToParts(values);
            // Hot path for straight simple msg translations
            if (parts.length === 1) {
                return parts[0].value;
            }
            var result = parts.reduce(function(all, part) {
                if (!all.length || part.type !== __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f$intl$2d$messageformat$40$10$2e$7$2e$17$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$formatters$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["PART_TYPE"].literal || typeof all[all.length - 1] !== 'string') {
                    all.push(part.value);
                } else {
                    all[all.length - 1] += part.value;
                }
                return all;
            }, []);
            if (result.length <= 1) {
                return result[0] || '';
            }
            return result;
        };
        this.formatToParts = function(values) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f$intl$2d$messageformat$40$10$2e$7$2e$17$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$formatters$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["formatToParts"])(_this.ast, _this.locales, _this.formatters, _this.formats, values, undefined, _this.message);
        };
        this.resolvedOptions = function() {
            var _a;
            return {
                locale: ((_a = _this.resolvedLocale) === null || _a === void 0 ? void 0 : _a.toString()) || Intl.NumberFormat.supportedLocalesOf(_this.locales)[0]
            };
        };
        this.getAst = function() {
            return _this.ast;
        };
        // Defined first because it's used to build the format pattern.
        this.locales = locales;
        this.resolvedLocale = IntlMessageFormat.resolveLocale(locales);
        if (typeof message === 'string') {
            this.message = message;
            if (!IntlMessageFormat.__parse) {
                throw new TypeError('IntlMessageFormat.__parse must be set to process `message` of type `string`');
            }
            var _a = opts || {}, formatters = _a.formatters, parseOpts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["__rest"])(_a, [
                "formatters"
            ]);
            // Parse string messages into an AST.
            this.ast = IntlMessageFormat.__parse(message, (0, __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["__assign"])({}, parseOpts), {
                locale: this.resolvedLocale
            }));
        } else {
            this.ast = message;
        }
        if (!Array.isArray(this.ast)) {
            throw new TypeError('A message must be provided as a String or AST.');
        }
        // Creates a new object with the specified `formats` merged with the default
        // formats.
        this.formats = mergeConfigs(IntlMessageFormat.formats, overrideFormats);
        this.formatters = opts && opts.formatters || createDefaultFormatters(this.formatterCache);
    }
    Object.defineProperty(IntlMessageFormat, "defaultLocale", {
        get: function() {
            if (!IntlMessageFormat.memoizedDefaultLocale) {
                IntlMessageFormat.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale;
            }
            return IntlMessageFormat.memoizedDefaultLocale;
        },
        enumerable: false,
        configurable: true
    });
    IntlMessageFormat.memoizedDefaultLocale = null;
    IntlMessageFormat.resolveLocale = function(locales) {
        if (typeof Intl.Locale === 'undefined') {
            return;
        }
        var supportedLocales = Intl.NumberFormat.supportedLocalesOf(locales);
        if (supportedLocales.length > 0) {
            return new Intl.Locale(supportedLocales[0]);
        }
        return new Intl.Locale(typeof locales === 'string' ? locales : locales[0]);
    };
    IntlMessageFormat.__parse = __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$icu$2d$messageformat$2d$parser$40$2$2e$11$2e$3$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$lib$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parse"];
    // Default format options used as the prototype of the `formats` provided to the
    // constructor. These are used when constructing the internal Intl.NumberFormat
    // and Intl.DateTimeFormat instances.
    IntlMessageFormat.formats = {
        number: {
            integer: {
                maximumFractionDigits: 0
            },
            currency: {
                style: 'currency'
            },
            percent: {
                style: 'percent'
            }
        },
        date: {
            short: {
                month: 'numeric',
                day: 'numeric',
                year: '2-digit'
            },
            medium: {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
            },
            long: {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
            },
            full: {
                weekday: 'long',
                month: 'long',
                day: 'numeric',
                year: 'numeric'
            }
        },
        time: {
            short: {
                hour: 'numeric',
                minute: 'numeric'
            },
            medium: {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric'
            },
            long: {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                timeZoneName: 'short'
            },
            full: {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                timeZoneName: 'short'
            }
        }
    };
    return IntlMessageFormat;
}();
;
}),
"[project]/my files/new-product-application/next-js-projects/next-js-init-setup/node_modules/.pnpm/use-intl@4.3.10_react@19.1.0/node_modules/use-intl/dist/esm/development/initializeConfig-z8OlpM94.js [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "I",
    ()=>IntlError,
    "a",
    ()=>IntlErrorCode,
    "b",
    ()=>createIntlFormatters,
    "c",
    ()=>createFormatter,
    "d",
    ()=>createCache,
    "e",
    ()=>createBaseTranslator,
    "f",
    ()=>defaultGetMessageFallback,
    "g",
    ()=>defaultOnError,
    "i",
    ()=>initializeConfig,
    "r",
    ()=>resolveNamespace
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f$intl$2d$messageformat$40$10$2e$7$2e$17$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$core$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my files/new-product-application/next-js-projects/next-js-init-setup/node_modules/.pnpm/intl-messageformat@10.7.17/node_modules/intl-messageformat/lib/src/core.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$react$2e$react$2d$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my files/new-product-application/next-js-projects/next-js-init-setup/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/react.react-server.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$fast$2d$memoize$40$2$2e$2$2e$7$2f$node_modules$2f40$formatjs$2f$fast$2d$memoize$2f$lib$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my files/new-product-application/next-js-projects/next-js-init-setup/node_modules/.pnpm/@formatjs+fast-memoize@2.2.7/node_modules/@formatjs/fast-memoize/lib/index.js [middleware-edge] (ecmascript)");
;
;
;
class IntlError extends Error {
    constructor(code, originalMessage){
        let message = code;
        if (originalMessage) {
            message += ': ' + originalMessage;
        }
        super(message);
        this.code = code;
        if (originalMessage) {
            this.originalMessage = originalMessage;
        }
    }
}
var IntlErrorCode = /*#__PURE__*/ function(IntlErrorCode) {
    IntlErrorCode["MISSING_MESSAGE"] = "MISSING_MESSAGE";
    IntlErrorCode["MISSING_FORMAT"] = "MISSING_FORMAT";
    IntlErrorCode["ENVIRONMENT_FALLBACK"] = "ENVIRONMENT_FALLBACK";
    IntlErrorCode["INSUFFICIENT_PATH"] = "INSUFFICIENT_PATH";
    IntlErrorCode["INVALID_MESSAGE"] = "INVALID_MESSAGE";
    IntlErrorCode["INVALID_KEY"] = "INVALID_KEY";
    IntlErrorCode["FORMATTING_ERROR"] = "FORMATTING_ERROR";
    return IntlErrorCode;
}(IntlErrorCode || {});
/**
 * `intl-messageformat` uses separate keys for `date` and `time`, but there's
 * only one native API: `Intl.DateTimeFormat`. Additionally you might want to
 * include both a time and a date in a value, therefore the separation doesn't
 * seem so useful. We offer a single `dateTime` namespace instead, but we have
 * to convert the format before `intl-messageformat` can be used.
 */ function convertFormatsToIntlMessageFormat(globalFormats, inlineFormats, timeZone) {
    const mfDateDefaults = __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f$intl$2d$messageformat$40$10$2e$7$2e$17$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$core$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["IntlMessageFormat"].formats.date;
    const mfTimeDefaults = __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f$intl$2d$messageformat$40$10$2e$7$2e$17$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$core$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["IntlMessageFormat"].formats.time;
    const dateTimeFormats = {
        ...globalFormats?.dateTime,
        ...inlineFormats?.dateTime
    };
    const allFormats = {
        date: {
            ...mfDateDefaults,
            ...dateTimeFormats
        },
        time: {
            ...mfTimeDefaults,
            ...dateTimeFormats
        },
        number: {
            ...globalFormats?.number,
            ...inlineFormats?.number
        }
    };
    if (timeZone) {
        // The only way to set a time zone with `intl-messageformat` is to merge it into the formats
        // https://github.com/formatjs/formatjs/blob/8256c5271505cf2606e48e3c97ecdd16ede4f1b5/packages/intl/src/message.ts#L15
        [
            'date',
            'time'
        ].forEach((property)=>{
            const formats = allFormats[property];
            for (const [key, value] of Object.entries(formats)){
                formats[key] = {
                    timeZone,
                    ...value
                };
            }
        });
    }
    return allFormats;
}
function joinPath(...parts) {
    return parts.filter(Boolean).join('.');
}
/**
 * Contains defaults that are used for all entry points into the core.
 * See also `InitializedIntlConfiguration`.
 */ function defaultGetMessageFallback(props) {
    return joinPath(props.namespace, props.key);
}
function defaultOnError(error) {
    console.error(error);
}
function createCache() {
    return {
        dateTime: {},
        number: {},
        message: {},
        relativeTime: {},
        pluralRules: {},
        list: {},
        displayNames: {}
    };
}
function createMemoCache(store) {
    return {
        create () {
            return {
                get (key) {
                    return store[key];
                },
                set (key, value) {
                    store[key] = value;
                }
            };
        }
    };
}
function memoFn(fn, cache) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$fast$2d$memoize$40$2$2e$2$2e$7$2f$node_modules$2f40$formatjs$2f$fast$2d$memoize$2f$lib$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["memoize"])(fn, {
        cache: createMemoCache(cache),
        strategy: __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f40$formatjs$2b$fast$2d$memoize$40$2$2e$2$2e$7$2f$node_modules$2f40$formatjs$2f$fast$2d$memoize$2f$lib$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["strategies"].variadic
    });
}
function memoConstructor(ConstructorFn, cache) {
    return memoFn((...args)=>new ConstructorFn(...args), cache);
}
function createIntlFormatters(cache) {
    const getDateTimeFormat = memoConstructor(Intl.DateTimeFormat, cache.dateTime);
    const getNumberFormat = memoConstructor(Intl.NumberFormat, cache.number);
    const getPluralRules = memoConstructor(Intl.PluralRules, cache.pluralRules);
    const getRelativeTimeFormat = memoConstructor(Intl.RelativeTimeFormat, cache.relativeTime);
    const getListFormat = memoConstructor(Intl.ListFormat, cache.list);
    const getDisplayNames = memoConstructor(Intl.DisplayNames, cache.displayNames);
    return {
        getDateTimeFormat,
        getNumberFormat,
        getPluralRules,
        getRelativeTimeFormat,
        getListFormat,
        getDisplayNames
    };
}
// Placed here for improved tree shaking. Somehow when this is placed in
// `formatters.tsx`, then it can't be shaken off from `next-intl`.
function createMessageFormatter(cache, intlFormatters) {
    const getMessageFormat = memoFn((...args)=>new __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f$intl$2d$messageformat$40$10$2e$7$2e$17$2f$node_modules$2f$intl$2d$messageformat$2f$lib$2f$src$2f$core$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["IntlMessageFormat"](args[0], args[1], args[2], {
            formatters: intlFormatters,
            ...args[3]
        }), cache.message);
    return getMessageFormat;
}
function resolvePath(locale, messages, key, namespace) {
    const fullKey = joinPath(namespace, key);
    if (!messages) {
        throw new Error(`No messages available at \`${namespace}\`.`);
    }
    let message = messages;
    key.split('.').forEach((part)=>{
        const next = message[part];
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        if (part == null || next == null) {
            throw new Error(`Could not resolve \`${fullKey}\` in messages for locale \`${locale}\`.`);
        }
        message = next;
    });
    return message;
}
function prepareTranslationValues(values) {
    // Workaround for https://github.com/formatjs/formatjs/issues/1467
    const transformedValues = {};
    Object.keys(values).forEach((key)=>{
        let index = 0;
        const value = values[key];
        let transformed;
        if (typeof value === 'function') {
            transformed = (chunks)=>{
                const result = value(chunks);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$react$2e$react$2d$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["isValidElement"])(result) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$react$2e$react$2d$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["cloneElement"])(result, {
                    key: key + index++
                }) : result;
            };
        } else {
            transformed = value;
        }
        transformedValues[key] = transformed;
    });
    return transformedValues;
}
function getMessagesOrError(locale, messages, namespace, onError = defaultOnError) {
    try {
        if (!messages) {
            throw new Error(`No messages were configured.`);
        }
        const retrievedMessages = namespace ? resolvePath(locale, messages, namespace) : messages;
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        if (!retrievedMessages) {
            throw new Error(`No messages for namespace \`${namespace}\` found.`);
        }
        return retrievedMessages;
    } catch (error) {
        const intlError = new IntlError(IntlErrorCode.MISSING_MESSAGE, error.message);
        onError(intlError);
        return intlError;
    }
}
function getPlainMessage(candidate, values) {
    // To improve runtime performance, only compile message if:
    return(// 1. Values are provided
    values || // 2. There are escaped braces (e.g. "'{name'}")
    /'[{}]/.test(candidate) || // 3. There are missing arguments or tags (dev-only error handling)
    /<|{/.test(candidate) ? undefined // Compile
     : candidate // Don't compile
    );
}
function createBaseTranslator(config) {
    const messagesOrError = getMessagesOrError(config.locale, config.messages, config.namespace, config.onError);
    return createBaseTranslatorImpl({
        ...config,
        messagesOrError
    });
}
function createBaseTranslatorImpl({ cache, formats: globalFormats, formatters, getMessageFallback = defaultGetMessageFallback, locale, messagesOrError, namespace, onError, timeZone }) {
    const hasMessagesError = messagesOrError instanceof IntlError;
    function getFallbackFromErrorAndNotify(key, code, message) {
        const error = new IntlError(code, message);
        onError(error);
        return getMessageFallback({
            error,
            key,
            namespace
        });
    }
    function translateBaseFn(/** Use a dot to indicate a level of nesting (e.g. `namespace.nestedLabel`). */ key, /** Key value pairs for values to interpolate into the message. */ values, /** Provide custom formats for numbers, dates and times. */ formats) {
        if (hasMessagesError) {
            // We have already warned about this during render
            return getMessageFallback({
                error: messagesOrError,
                key,
                namespace
            });
        }
        const messages = messagesOrError;
        let message;
        try {
            message = resolvePath(locale, messages, key, namespace);
        } catch (error) {
            return getFallbackFromErrorAndNotify(key, IntlErrorCode.MISSING_MESSAGE, error.message);
        }
        if (typeof message === 'object') {
            let code, errorMessage;
            if (Array.isArray(message)) {
                code = IntlErrorCode.INVALID_MESSAGE;
                {
                    errorMessage = `Message at \`${joinPath(namespace, key)}\` resolved to an array, but only strings are supported. See https://next-intl.dev/docs/usage/translations#arrays-of-messages`;
                }
            } else {
                code = IntlErrorCode.INSUFFICIENT_PATH;
                {
                    errorMessage = `Message at \`${joinPath(namespace, key)}\` resolved to an object, but only strings are supported. Use a \`.\` to retrieve nested messages. See https://next-intl.dev/docs/usage/translations#structuring-messages`;
                }
            }
            return getFallbackFromErrorAndNotify(key, code, errorMessage);
        }
        let messageFormat;
        // Hot path that avoids creating an `IntlMessageFormat` instance
        const plainMessage = getPlainMessage(message, values);
        if (plainMessage) return plainMessage;
        // Lazy init the message formatter for better tree
        // shaking in case message formatting is not used.
        if (!formatters.getMessageFormat) {
            formatters.getMessageFormat = createMessageFormatter(cache, formatters);
        }
        try {
            messageFormat = formatters.getMessageFormat(message, locale, convertFormatsToIntlMessageFormat(globalFormats, formats, timeZone), {
                formatters: {
                    ...formatters,
                    getDateTimeFormat (locales, options) {
                        // Workaround for https://github.com/formatjs/formatjs/issues/4279
                        return formatters.getDateTimeFormat(locales, {
                            timeZone,
                            ...options
                        });
                    }
                }
            });
        } catch (error) {
            const thrownError = error;
            return getFallbackFromErrorAndNotify(key, IntlErrorCode.INVALID_MESSAGE, thrownError.message + ('originalMessage' in thrownError ? ` (${thrownError.originalMessage})` : ''));
        }
        try {
            const formattedMessage = messageFormat.format(// @ts-expect-error `intl-messageformat` expects a different format
            // for rich text elements since a recent minor update. This
            // needs to be evaluated in detail, possibly also in regards
            // to be able to format to parts.
            values ? prepareTranslationValues(values) : values);
            if (formattedMessage == null) {
                throw new Error(`Unable to format \`${key}\` in ${namespace ? `namespace \`${namespace}\`` : 'messages'}`);
            }
            // Limit the function signature to return strings or React elements
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$react$2e$react$2d$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["isValidElement"])(formattedMessage) || // Arrays of React elements
            Array.isArray(formattedMessage) || typeof formattedMessage === 'string' ? formattedMessage : String(formattedMessage);
        } catch (error) {
            return getFallbackFromErrorAndNotify(key, IntlErrorCode.FORMATTING_ERROR, error.message);
        }
    }
    function translateFn(/** Use a dot to indicate a level of nesting (e.g. `namespace.nestedLabel`). */ key, /** Key value pairs for values to interpolate into the message. */ values, /** Provide custom formats for numbers, dates and times. */ formats) {
        const result = translateBaseFn(key, values, formats);
        if (typeof result !== 'string') {
            return getFallbackFromErrorAndNotify(key, IntlErrorCode.INVALID_MESSAGE, `The message \`${key}\` in ${namespace ? `namespace \`${namespace}\`` : 'messages'} didn't resolve to a string. If you want to format rich text, use \`t.rich\` instead.`);
        }
        return result;
    }
    translateFn.rich = translateBaseFn;
    // Augment `translateBaseFn` to return plain strings
    translateFn.markup = (key, values, formats)=>{
        const result = translateBaseFn(key, // @ts-expect-error -- `MarkupTranslationValues` is practically a sub type
        // of `RichTranslationValues` but TypeScript isn't smart enough here.
        values, formats);
        if (typeof result !== 'string') {
            const error = new IntlError(IntlErrorCode.FORMATTING_ERROR, "`t.markup` only accepts functions for formatting that receive and return strings.\n\nE.g. t.markup('markup', {b: (chunks) => `<b>${chunks}</b>`})");
            onError(error);
            return getMessageFallback({
                error,
                key,
                namespace
            });
        }
        return result;
    };
    translateFn.raw = (key)=>{
        if (hasMessagesError) {
            // We have already warned about this during render
            return getMessageFallback({
                error: messagesOrError,
                key,
                namespace
            });
        }
        const messages = messagesOrError;
        try {
            return resolvePath(locale, messages, key, namespace);
        } catch (error) {
            return getFallbackFromErrorAndNotify(key, IntlErrorCode.MISSING_MESSAGE, error.message);
        }
    };
    translateFn.has = (key)=>{
        if (hasMessagesError) {
            return false;
        }
        try {
            resolvePath(locale, messagesOrError, key, namespace);
            return true;
        } catch  {
            return false;
        }
    };
    return translateFn;
}
/**
 * For the strictly typed messages to work we have to wrap the namespace into
 * a mandatory prefix. See https://stackoverflow.com/a/71529575/343045
 */ function resolveNamespace(namespace, namespacePrefix) {
    return namespace === namespacePrefix ? undefined : namespace.slice((namespacePrefix + '.').length);
}
const SECOND = 1;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;
const WEEK = DAY * 7;
const MONTH = DAY * (365 / 12); // Approximation
const QUARTER = MONTH * 3;
const YEAR = DAY * 365;
const UNIT_SECONDS = {
    second: SECOND,
    seconds: SECOND,
    minute: MINUTE,
    minutes: MINUTE,
    hour: HOUR,
    hours: HOUR,
    day: DAY,
    days: DAY,
    week: WEEK,
    weeks: WEEK,
    month: MONTH,
    months: MONTH,
    quarter: QUARTER,
    quarters: QUARTER,
    year: YEAR,
    years: YEAR
};
function resolveRelativeTimeUnit(seconds) {
    const absValue = Math.abs(seconds);
    if (absValue < MINUTE) {
        return 'second';
    } else if (absValue < HOUR) {
        return 'minute';
    } else if (absValue < DAY) {
        return 'hour';
    } else if (absValue < WEEK) {
        return 'day';
    } else if (absValue < MONTH) {
        return 'week';
    } else if (absValue < YEAR) {
        return 'month';
    }
    return 'year';
}
function calculateRelativeTimeValue(seconds, unit) {
    // We have to round the resulting values, as `Intl.RelativeTimeFormat`
    // will include fractions like '2.1 hours ago'.
    return Math.round(seconds / UNIT_SECONDS[unit]);
}
function createFormatter(props) {
    const { _cache: cache = createCache(), _formatters: formatters = createIntlFormatters(cache), formats, locale, onError = defaultOnError, timeZone: globalTimeZone } = props;
    function applyTimeZone(options) {
        if (!options?.timeZone) {
            if (globalTimeZone) {
                options = {
                    ...options,
                    timeZone: globalTimeZone
                };
            } else {
                onError(new IntlError(IntlErrorCode.ENVIRONMENT_FALLBACK, `The \`timeZone\` parameter wasn't provided and there is no global default configured. Consider adding a global default to avoid markup mismatches caused by environment differences. Learn more: https://next-intl.dev/docs/configuration#time-zone`));
            }
        }
        return options;
    }
    function resolveFormatOrOptions(typeFormats, formatOrOptions, overrides) {
        let options;
        if (typeof formatOrOptions === 'string') {
            const formatName = formatOrOptions;
            options = typeFormats?.[formatName];
            if (!options) {
                const error = new IntlError(IntlErrorCode.MISSING_FORMAT, `Format \`${formatName}\` is not available.`);
                onError(error);
                throw error;
            }
        } else {
            options = formatOrOptions;
        }
        if (overrides) {
            options = {
                ...options,
                ...overrides
            };
        }
        return options;
    }
    function getFormattedValue(formatOrOptions, overrides, typeFormats, formatter, getFallback) {
        let options;
        try {
            options = resolveFormatOrOptions(typeFormats, formatOrOptions, overrides);
        } catch  {
            return getFallback();
        }
        try {
            return formatter(options);
        } catch (error) {
            onError(new IntlError(IntlErrorCode.FORMATTING_ERROR, error.message));
            return getFallback();
        }
    }
    function dateTime(value, formatOrOptions, overrides) {
        return getFormattedValue(formatOrOptions, overrides, formats?.dateTime, (options)=>{
            options = applyTimeZone(options);
            return formatters.getDateTimeFormat(locale, options).format(value);
        }, ()=>String(value));
    }
    function dateTimeRange(start, end, formatOrOptions, overrides) {
        return getFormattedValue(formatOrOptions, overrides, formats?.dateTime, (options)=>{
            options = applyTimeZone(options);
            return formatters.getDateTimeFormat(locale, options).formatRange(start, end);
        }, ()=>[
                dateTime(start),
                dateTime(end)
            ].join(' – '));
    }
    function number(value, formatOrOptions, overrides) {
        return getFormattedValue(formatOrOptions, overrides, formats?.number, (options)=>formatters.getNumberFormat(locale, options).format(value), ()=>String(value));
    }
    function getGlobalNow() {
        // Only read when necessary to avoid triggering a `dynamicIO` error
        // unnecessarily (`now` is only needed for `format.relativeTime`)
        if (props.now) {
            return props.now;
        } else {
            onError(new IntlError(IntlErrorCode.ENVIRONMENT_FALLBACK, `The \`now\` parameter wasn't provided to \`relativeTime\` and there is no global default configured, therefore the current time will be used as a fallback. See https://next-intl.dev/docs/usage/dates-times#relative-times-usenow`));
            return new Date();
        }
    }
    function relativeTime(date, nowOrOptions) {
        try {
            let nowDate, unit;
            const opts = {};
            if (nowOrOptions instanceof Date || typeof nowOrOptions === 'number') {
                nowDate = new Date(nowOrOptions);
            } else if (nowOrOptions) {
                if (nowOrOptions.now != null) {
                    nowDate = new Date(nowOrOptions.now);
                } else {
                    nowDate = getGlobalNow();
                }
                unit = nowOrOptions.unit;
                opts.style = nowOrOptions.style;
                // @ts-expect-error -- Types are slightly outdated
                opts.numberingSystem = nowOrOptions.numberingSystem;
            }
            if (!nowDate) {
                nowDate = getGlobalNow();
            }
            const dateDate = new Date(date);
            const seconds = (dateDate.getTime() - nowDate.getTime()) / 1000;
            if (!unit) {
                unit = resolveRelativeTimeUnit(seconds);
            }
            // `numeric: 'auto'` can theoretically produce output like "yesterday",
            // but it only works with integers. E.g. -1 day will produce "yesterday",
            // but -1.1 days will produce "-1.1 days". Rounding before formatting is
            // not desired, as the given dates might cross a threshold were the
            // output isn't correct anymore. Example: 2024-01-08T23:00:00.000Z and
            // 2024-01-08T01:00:00.000Z would produce "yesterday", which is not the
            // case. By using `always` we can ensure correct output. The only exception
            // is the formatting of times <1 second as "now".
            opts.numeric = unit === 'second' ? 'auto' : 'always';
            const value = calculateRelativeTimeValue(seconds, unit);
            return formatters.getRelativeTimeFormat(locale, opts).format(value, unit);
        } catch (error) {
            onError(new IntlError(IntlErrorCode.FORMATTING_ERROR, error.message));
            return String(date);
        }
    }
    function list(value, formatOrOptions, overrides) {
        const serializedValue = [];
        const richValues = new Map();
        // `formatToParts` only accepts strings, therefore we have to temporarily
        // replace React elements with a placeholder ID that can be used to retrieve
        // the original value afterwards.
        let index = 0;
        for (const item of value){
            let serializedItem;
            if (typeof item === 'object') {
                serializedItem = String(index);
                richValues.set(serializedItem, item);
            } else {
                serializedItem = String(item);
            }
            serializedValue.push(serializedItem);
            index++;
        }
        return getFormattedValue(formatOrOptions, overrides, formats?.list, // @ts-expect-error -- `richValues.size` is used to determine the return type, but TypeScript can't infer the meaning of this correctly
        (options)=>{
            const result = formatters.getListFormat(locale, options).formatToParts(serializedValue).map((part)=>part.type === 'literal' ? part.value : richValues.get(part.value) || part.value);
            if (richValues.size > 0) {
                return result;
            } else {
                return result.join('');
            }
        }, ()=>String(value));
    }
    return {
        dateTime,
        number,
        relativeTime,
        list,
        dateTimeRange
    };
}
function validateMessagesSegment(messages, invalidKeyLabels, parentPath) {
    Object.entries(messages).forEach(([key, messageOrMessages])=>{
        if (key.includes('.')) {
            let keyLabel = key;
            if (parentPath) keyLabel += ` (at ${parentPath})`;
            invalidKeyLabels.push(keyLabel);
        }
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        if (messageOrMessages != null && typeof messageOrMessages === 'object') {
            validateMessagesSegment(messageOrMessages, invalidKeyLabels, joinPath(parentPath, key));
        }
    });
}
function validateMessages(messages, onError) {
    const invalidKeyLabels = [];
    validateMessagesSegment(messages, invalidKeyLabels);
    if (invalidKeyLabels.length > 0) {
        onError(new IntlError(IntlErrorCode.INVALID_KEY, `Namespace keys can not contain the character "." as this is used to express nesting. Please remove it or replace it with another character.

Invalid ${invalidKeyLabels.length === 1 ? 'key' : 'keys'}: ${invalidKeyLabels.join(', ')}

If you're migrating from a flat structure, you can convert your messages as follows:

import {set} from "lodash";

const input = {
  "one.one": "1.1",
  "one.two": "1.2",
  "two.one.one": "2.1.1"
};

const output = Object.entries(input).reduce(
  (acc, [key, value]) => set(acc, key, value),
  {}
);

// Output:
//
// {
//   "one": {
//     "one": "1.1",
//     "two": "1.2"
//   },
//   "two": {
//     "one": {
//       "one": "2.1.1"
//     }
//   }
// }
`));
    }
}
/**
 * Enhances the incoming props with defaults.
 */ function initializeConfig({ formats, getMessageFallback, messages, onError, ...rest }) {
    const finalOnError = onError || defaultOnError;
    const finalGetMessageFallback = getMessageFallback || defaultGetMessageFallback;
    {
        if (messages) {
            validateMessages(messages, finalOnError);
        }
    }
    return {
        ...rest,
        formats: formats || undefined,
        messages: messages || undefined,
        onError: finalOnError,
        getMessageFallback: finalGetMessageFallback
    };
}
;
}),
"[project]/my files/new-product-application/next-js-projects/next-js-init-setup/node_modules/.pnpm/use-intl@4.3.10_react@19.1.0/node_modules/use-intl/dist/esm/development/initializeConfig-z8OlpM94.js [middleware-edge] (ecmascript) <export i as initializeConfig>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "initializeConfig",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f$use$2d$intl$40$4$2e$3$2e$10_react$40$19$2e$1$2e$0$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$initializeConfig$2d$z8OlpM94$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["i"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f$use$2d$intl$40$4$2e$3$2e$10_react$40$19$2e$1$2e$0$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$initializeConfig$2d$z8OlpM94$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my files/new-product-application/next-js-projects/next-js-init-setup/node_modules/.pnpm/use-intl@4.3.10_react@19.1.0/node_modules/use-intl/dist/esm/development/initializeConfig-z8OlpM94.js [middleware-edge] (ecmascript)");
}),
"[project]/my files/new-product-application/next-js-projects/next-js-init-setup/node_modules/.pnpm/use-intl@4.3.10_react@19.1.0/node_modules/use-intl/dist/esm/development/initializeConfig-z8OlpM94.js [middleware-edge] (ecmascript) <export b as _createIntlFormatters>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_createIntlFormatters",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f$use$2d$intl$40$4$2e$3$2e$10_react$40$19$2e$1$2e$0$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$initializeConfig$2d$z8OlpM94$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["b"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f$use$2d$intl$40$4$2e$3$2e$10_react$40$19$2e$1$2e$0$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$initializeConfig$2d$z8OlpM94$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my files/new-product-application/next-js-projects/next-js-init-setup/node_modules/.pnpm/use-intl@4.3.10_react@19.1.0/node_modules/use-intl/dist/esm/development/initializeConfig-z8OlpM94.js [middleware-edge] (ecmascript)");
}),
"[project]/my files/new-product-application/next-js-projects/next-js-init-setup/node_modules/.pnpm/use-intl@4.3.10_react@19.1.0/node_modules/use-intl/dist/esm/development/initializeConfig-z8OlpM94.js [middleware-edge] (ecmascript) <export d as _createCache>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_createCache",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f$use$2d$intl$40$4$2e$3$2e$10_react$40$19$2e$1$2e$0$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$initializeConfig$2d$z8OlpM94$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["d"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my__files$2f$new$2d$product$2d$application$2f$next$2d$js$2d$projects$2f$next$2d$js$2d$init$2d$setup$2f$node_modules$2f2e$pnpm$2f$use$2d$intl$40$4$2e$3$2e$10_react$40$19$2e$1$2e$0$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$initializeConfig$2d$z8OlpM94$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my files/new-product-application/next-js-projects/next-js-init-setup/node_modules/.pnpm/use-intl@4.3.10_react@19.1.0/node_modules/use-intl/dist/esm/development/initializeConfig-z8OlpM94.js [middleware-edge] (ecmascript)");
}),
]);

//# sourceMappingURL=b99eb__pnpm_9be386f5._.js.map
//// [lateBoundAssignmentDeclarationSupport2.js]
// currently unsupported
const _sym = Symbol();
const _str = "my-fake-sym";
module.exports[_sym] = "ok";
module.exports[_str] = "ok";
module.exports.S = _sym;
//// [usage.js]
const x = require("./lateBoundAssignmentDeclarationSupport2.js");
const y = x["my-fake-sym"];
const z = x[x.S];

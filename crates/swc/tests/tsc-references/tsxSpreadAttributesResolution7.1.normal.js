//// [file.tsx]
//! 
//!   x Import assignment cannot be used when targeting ECMAScript modules. Consider using `import * as ns from "mod"`, `import {a} from "mod"`, `import d from "mod"`, or another module format instead.
//!    ,-[1:1]
//!  1 | 
//!  2 | import React = require('react');
//!    : ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//!  3 | 
//!  4 | type TextProps = { editable: false }
//!  5 |                | { editable: true, onEdit: (newText: string) => void };
//!    `----
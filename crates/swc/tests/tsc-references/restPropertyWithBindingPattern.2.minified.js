//// [restPropertyWithBindingPattern.ts]
//! 
//!   x Cannot assign to this
//!    ,-[1:1]
//!  1 | ({...{}} = {});
//!  2 | ({...({})} = {});
//!    :      ^^^^
//!  3 | ({...[]} = {});
//!  4 | ({...([])} = {});
//!    `----
//! 
//!   x Cannot assign to this
//!    ,-[1:1]
//!  1 | ({...{}} = {});
//!  2 | ({...({})} = {});
//!  3 | ({...[]} = {});
//!  4 | ({...([])} = {});
//!    :      ^^^^
//!    `----
!function() {
    (function qux(x) {
        console.log("qux", x);
        if (x) (function(x) {
            console.log("foo", x);
            if (x) (function(x) {
                console.log("bar", x);
                if (x) qux(x - 1);
            })(x - 1);
        })(x - 1);
    })(4);
}();

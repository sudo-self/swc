//// [octalIntegerLiteralES6.ts]
var obj1 = {
    0o45436: "Hello",
    a: 0o45436,
    b: 0o45436,
    oct1: 0o45436,
    Infinity: !0
}, obj2 = {
    0O45436: "hi",
    a: 0O45436,
    b: 0O45436,
    oct2: 0O45436,
    0o7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777: !1
};
obj1[0o45436], obj1["0o45436"], obj1["19230"], obj1[19230], obj1.a, obj1.b, obj1.oct1, obj1.Infinity, obj2[0O45436], obj2["0O45436"], obj2["19230"], obj2[19230], obj2.a, obj2.b, obj2.oct2, obj2[5.462437423415177e+244], obj2["5.462437423415177e+244"], obj2.Infinity;
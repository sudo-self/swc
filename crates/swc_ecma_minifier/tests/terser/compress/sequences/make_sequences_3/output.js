function f() {
    return foo(), bar(), baz();
}
function g() {
    throw foo(), bar(), Error();
}

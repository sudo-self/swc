var n;
n = true || condition;
n = 1 || console.log("a");
n = 2 * 3 || 2 * condition;
n = 5 == 5 || condition + 3;
n = "string" || 4 - condition;
n = 5 + "" || condition / 5;
n = -4.5 || 6 << condition;
n = 6 || 7;
n = false || condition;
n = 0 || console.log("b");
n = NaN || console.log("c");
n = undefined || 2 * condition;
n = null || condition + 3;
n = 2 * 3 - 6 || 4 - condition;
n = 10 == 7 || condition / 5;
n = !"string" || 6 % condition;
n = null || 7;
n = console.log((undefined && condition) || null);
n = console.log(undefined || (condition && null));
n = condition || true;
n = console.log("a") || 2;
n = 4 - condition || "string";
n = 6 << condition || -4.5;
n = condition || false;
n = console.log("b") || NaN;
n = console.log("c") || 0;
n = 2 * condition || undefined;
n = condition + 3 || null;

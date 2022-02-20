"use strict";

function ret() {
    let num = 50;
    return num;
}
console.log(ret());
console.log(`вывод функции: ${ret()}`);


var logger = function() {
    console.log("hello");
};
logger();

const log = "Sammertime";
console.log(log.slice(1, 6));
console.log(log.slice(-5, -1));
 
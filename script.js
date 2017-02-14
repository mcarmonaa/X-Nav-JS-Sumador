"use strict";

function randomizer(optag) {
    var num = Math.ceil(Math.random() * 10);
    var ops = [];

    for (var i = 0; i < num; i++) {
        ops[i] =  Math.round(Math.random() * 1000)
    }

    document.getElementById(optag).innerHTML = ops.join("+")
};

function adder(optag, restag) {
    var ops = document.getElementById(optag).innerHTML.split("+");
    var res = 0;

    for (var i in ops) {
        res += parseInt(ops[i]);
    }

    document.getElementById(restag).innerHTML = " = " + res.toString();
};

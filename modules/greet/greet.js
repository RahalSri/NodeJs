var greet = function () {
    console.log('Hellow module');
}

module.exports = greet;



/*
//1. In reality above statements will wrap into a function
(function (exports, require, module, __filename, __dirname) {
    var greet = function () {
        console.log('Hellow module');
    }

    module.exports = greet;
});

2. then call with args. note that module.exports is a reference
fn(module.exports, require, module, filename, dirname);


*/
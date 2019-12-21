/* Modules
-------------------------
- A reusable blocks of code whose existence does not accidently impact other codes
- before es6(export, import modules) nodejs implemented modules by their own by using 
commonjs modules :-  set of standards how code modules should structured
-- module scope is preserved by using IIFE
syntaxes : module.exports and require()
*/

const gre = require('./greet/greet');
const { greetEn, greetSp } = require('./greet');
gre();
greetSp();
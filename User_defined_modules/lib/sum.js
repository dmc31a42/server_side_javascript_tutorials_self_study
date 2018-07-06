// function add(a, b){
//     return a+b;
// }
// function minus(a, b){
//     return a-b;
// }
// function multiply(a, b){
//     return a*b;
// }
// function divide(a, b){
//     return a/b;
// }
// module.exports = {
//     add: add,
//     minus: minus,
//     multiply: multiply,
//     divide: divide
// };
function _sum(a, b){
    return a+b;
}
module.exports = function(a, b){
    return _sum(a, b);
}
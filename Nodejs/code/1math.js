
function add(a,b){
    return a+b;
}

function sub(a,b){return a-b;}

exports.mul=(a,b)=>a*b;
exports.div = (a,b) =>a/b;
module.exports = add;
module.exports = sub; // this will override add and mul function exports and only
//  sub function is exported
// so handle this and we want multiple exports we can use object

module.exports = {add,sub}; 
// we can use eithe use module.exports or exports.mul object to export the functions 
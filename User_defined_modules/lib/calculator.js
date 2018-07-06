module.exports.sum = function(a, b){
    return a+b;
}
module.exports.avg = function(a){
    try{
        var sum = 0;
        for(var i=0; i<a.length; i++){
            sum += a[i];
        }
        return sum/a.length;
    } catch (e){
        throw e;
    }
}
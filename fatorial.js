
function soma(n){
    var fat = 1
    for(c = n; c > 1; c--){
    fat *= c
}
return fat
}
var tot = soma(5)

console.log(`${tot}`)
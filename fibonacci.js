//fibonacci array 
function fibs(n) {
    let array = [0, 1] ;
    if (n <= 0) { return "enter a valid number" }
    if (n === 1) { return [0] }
    if (n === 2) { return array}
    for (let i = 2; i < n; i++) {
        array[i] = array[i - 1] + array[i - 2];
    }
    return array;
}
console.log(fibs(8));
// recursive fibonacci array 
function fibsRec(n) {
    if (n <= 0) { return "enter a valid number" }
    if (n === 1) { return [0] }
    if (n === 2) { return [0, 1]}
    return [...fibsRec(n-1), fibsRec(n-1)[n-2] + fibsRec(n-1)[n-3]];
}
console.log(fibsRec(8));

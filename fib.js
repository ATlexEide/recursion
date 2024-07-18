function fibs(num) {
    let arr = [0, 1];
    for (let i = 0; i < num; i++) {
        arr.push(arr[i] + arr[i + 1])
        console.log(arr)
    }
}
function fibsRec(num) {
    if (num < 2) { return 1; }
    return fibsRec(num - 1) + fibsRec(num - 2)
}
fibs(6)
console.log(fibsRec(6))
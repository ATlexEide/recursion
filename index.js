function fibs(num) {
    let arr = [0, 1];
    for (let i = 0; i < num; i++) {
        arr.push(arr[i] + arr[i + 1])
        console.log(arr)
    }
}
fibs(4)
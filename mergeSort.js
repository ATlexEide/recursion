let array = [4, 2, 7, 5, 0, 1, 3, 6]
let tempArray = [];

function sort(array) {
    if (array.length === 1) {
        console.log(`single: ${array}`)
        return array
    } else {
        tempArray.push(sort(array.splice(array.length / 2)), sort(array));
    }
}
function merge(a, b) {
    if (a || b) {
        console.log('a: ' + a)
        console.log('b: ' + b)
        if (a > b)
            array.push(a)
        console.log(array)
    }
}
sort(array)
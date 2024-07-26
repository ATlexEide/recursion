let array = [4, 2, 7, 5, 0, 1, 3, 6]
let temp = [];
let arrtemp = [];

function sort(array) {
    if (array.length === 1)
        return array;
    let left = array.slice(0, array.length / 2);
    let right = array.slice(array.length / 2);
    merge(sort(left), sort(right));
}

function merge(left, right) {
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex <= left.length && rightIndex <= right.length) {
        if (left[leftIndex] === undefined) {
            temp.push(right[rightIndex]);
            leftIndex++;
        }
        else if (right[rightIndex] === undefined) {
            temp.push(left[leftIndex]);
            rightIndex++;
        }
        else if (left[leftIndex] < right[rightIndex]) {
            temp.push(left[leftIndex]);
            leftIndex++;
            console.log('left')
            console.log(temp);
        } else {
            temp.push(right[rightIndex]);
            rightIndex++;
            console.log('right')
            console.log(temp);
        };
    };
};
sort(array)




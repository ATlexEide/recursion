let array = [4, 2, 7, 5, 0, 1, 3, 6]
let sorted = []

function sort(array) {
    if (array.length <= 1)
        return array;
    let middle = Math.floor(array.length / 2)
    let left = array.slice(0, middle);
    let right = array.slice(middle);
    return merge(sort(left), sort(right));
}

function merge(left, right) {
    let tempArr = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            tempArr.push(left[leftIndex]);
            leftIndex++;
        } else {
            tempArr.push(right[rightIndex]);
            rightIndex++;
        };
    };
    // testing anyways
    while (leftIndex < left.length) {
        tempArr.push(left[leftIndex])
        leftIndex++
    }
    while (rightIndex < right.length) {
        tempArr.push(right[rightIndex])
        rightIndex++
    }
    // fak u griff, now it works

    // u only need to change line below -Bit
    return tempArr
};
console.log(sort(array))



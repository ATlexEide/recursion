let array = [4, 2, 7, 5, 0, 1, 3, 6]

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
    // u only need to change line 26
    return
};
console.log(sort(array))




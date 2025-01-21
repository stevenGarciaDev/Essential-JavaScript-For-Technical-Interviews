function processData(array) {
    const dataTypeCount = {};
    for (const element of array) {
        const type = typeof element;
        if (dataTypeCount.hasOwnProperty(type)) {
            dataTypeCount[type]++;
        } else {
            dataTypeCount[type] = 1;
        }
    }
    return dataTypeCount;
}

const inputArray = [42, "hello", true, 99, "world", false];
console.log( processData(inputArray) );
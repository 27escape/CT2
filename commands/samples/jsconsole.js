function addAll() {
    var counter = 0;
    for (let i of arguments) {
        counter += i;
    }
    return counter;
}
console.log(addAll(1, 2, 3, 4, 5)); // 15
console.log(addAll(1)); // 1
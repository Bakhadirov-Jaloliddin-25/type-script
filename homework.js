function formatUser(user) {
    return "Name: ".concat(user.name, ", Age: ").concat(user.age, ", Admin: ").concat(user.isAdmin ? "Yes" : "No");
}
var user1 = { name: "Nickolas", age: 23, isAdmin: true };
console.log(formatUser(user1));
// 2. ---------------------------------------------------------------------
function reverseArray(array) {
    return array.slice().reverse();
}
console.log(reverseArray([1, 2, 3, 4]));
// 3. ---------------------------------------------------------------------
function fibonacci(n) {
    if (n <= 0)
        return [];
    var sequence = [0, 1];
    for (var i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence.slice(0, n);
}
console.log(fibonacci(8));
// 4. ---------------------------------------------------------------------
function countWords(text) {
    if (!text.trim())
        return 0;
    return text.trim().split(/\s+/).length;
}
console.log(countWords("Hello world! This is a test."));
// 5. ---------------------------------------------------------------------
function findMax(array) {
    if (array.length === 0)
        return null;
    return Math.max.apply(Math, array);
}
console.log(findMax([1, 2, 3, 99, 5]));
// 6. ---------------------------------------------------------------------
function transformArray(array) {
    return array.map(function (item) {
        if (typeof item === "number") {
            return (item * 2);
        }
        else if (typeof item === "string") {
            return item.toUpperCase();
        }
        return item;
    });
}
console.log(transformArray([1, 2, 3]));
console.log(transformArray(["a", "b", "c"]));

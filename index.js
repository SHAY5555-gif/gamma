function greetUser(name) {
    console.log("Hello, " + name + "!");
}

function calculateSum(a, b) {
    return a + b;
}

module.exports = {
    greetUser,
    calculateSum
};

greetUser("World");
console.log("Sum of 5 and 3:", calculateSum(5, 3));

let a = Number(process.argv[2]);
let b = Number(process.argv[3]);

if (process.argv.length < 4 || isNaN(a) || isNaN(b)) {
    console.log("Please enter two valid numbers.");
}
else {
    console.log("First Number:", a);
    console.log("Second Number:", b);

    console.log("Sum:", a + b);
    console.log("Difference:", a - b);
    console.log("Product:", a * b);

    if (b != 0) {
        console.log("Quotient:", a / b);
    }
    else {
        console.log("Division by zero is not possible.");
    }
}
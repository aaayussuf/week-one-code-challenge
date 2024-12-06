const readlineSync = require('readline-sync');

function studentGrade() {
    let input = readlineSync.question('Enter your marks: ');
    let marks = parseInt(input);

    if (marks >= 0 && marks <= 100) {
        if (marks > 79) {
            console.log("A");
        } else if (marks >= 60 && marks <= 79) {
            console.log("B");
        } else if (marks >= 50 && marks <= 59) {
            console.log("C");
        } else if (marks >= 40 && marks <= 49) {
            console.log("D");
        } else {
            console.log("E");
        }
    } else {
        console.log("Enter marks between 0 and 100");
    }
}

// Call the function to test it
studentGrade();
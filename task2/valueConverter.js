// input
let studentScore = 35

// process
if (studentScore < 0) {
    console.log("input must be more than 0");
}else if (studentScore < 35) {
    console.log("D");
}else if (studentScore < 50) {
    console.log("C");
}else if (studentScore < 65) {
    console.log("B");
}else if (studentScore < 80) {
    console.log("B+");
}else if (studentScore <= 100) {
    console.log("A");
}else{
    console.log("input must be less than 101");
}
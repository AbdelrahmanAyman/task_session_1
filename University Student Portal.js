let studentName = prompt("Enter student's name:");
let attendance = Number(prompt("Enter attendance percentage (0 to 100):"));
let midtermScore = Number(prompt("Enter midterm score (out of 30):"));
let finalExamScore = Number(prompt("Enter final exam score (out of 50):"));
let assignmentScore = Number(prompt("Enter assignment score (out of 20):"));

let hasPaidTuitionInput = prompt("Has tuition been paid? (yes/no):").toLowerCase();
let hasPaidTuition = (hasPaidTuitionInput === "yes");

let passingAttendance = 75; 
let passingScore = 50;      

if (hasPaidTuition === false) {
    console.log("Error: Results are locked. \n\nPlease pay your tuition.");
} else {
    let totalScore = midtermScore + finalExamScore + assignmentScore;

    let letterGrade = "F";
    if (totalScore >= 88) {
        letterGrade = "A";
    } else if (totalScore >= 76) {
        letterGrade = "B";
    } else if (totalScore >= 64) {
        letterGrade = "C";
    } else if (totalScore >= 50) {
        letterGrade = "D";
    } else {
        letterGrade = "F";
    }

    let academicStatus = "Passed";
    
    if (attendance < passingAttendance) {
        academicStatus = "Failed (Attendance below 75%)";
        letterGrade = "F";
    } else if (totalScore < passingScore) {
        academicStatus = "Failed (Score below 50)";
    }

    console.log("Student Name: " + studentName);
    console.log("Attendance: " + attendance + "%");
    console.log("Total Score: " + totalScore);
    console.log("Letter Grade: " + letterGrade);
    console.log("Status: " + academicStatus);

    if (totalScore >= 95 && attendance >= 95) {
        console.log("Scholarship Eligibility: qualified!");
    }
}
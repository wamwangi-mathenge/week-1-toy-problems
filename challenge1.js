// Write a function that prompts the user to input student marks.

const grader = (marks) => {
    // The input should be between 0 and 100. 
    if (marks > 100) {
        return "Invalid score";
    } else if (marks > 79) {
        //   A > 79
        return "A"
    } else if (marks > 59) {
        // B - 60 to 79
        return "B";
    } else if (marks > 49) {
        // C -  59 to 49
        return "C";
    } else if (marks > 39) {
        // D - 40 to 49
        return "D";
    } else if (marks < 49) {
        // E - less 40
        return "E";
    } else {
        return "Invalid score"
    }
}
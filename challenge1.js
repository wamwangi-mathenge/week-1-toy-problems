const grader = (marks) => {
    if (marks > 100) {
        return "Invalid score";
    } else if (marks > 79) {
        return "A"
    } else if (marks > 59) {
        return "B";
    } else if (marks > 49) {
        return "C";
    } else if (marks > 39) {
        return "D";
    } else if (marks < 49) {
        return "E";
    } else {
        return "Invalid score"
    }
}
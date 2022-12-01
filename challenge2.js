
// Write a program that takes the speed of a car as input
const inputSpeed = (speed) => {
    if(speed < 70) {
        // If the speed is less than 70, it should print “Ok”.
        console.log("OK")
    } else {
        const overspeed = Math.floor((speed - 70) / 5);
        if (overspeed <= 12) {
            // For every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.
            console.log(`Points: ${overspeed}`);
        } else {
            // If the driver gets more than 12 points, the function should print: “License suspended”.
            console.log(`License suspended`);
        }
    }
}

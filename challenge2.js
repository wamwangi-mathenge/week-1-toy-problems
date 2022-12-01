const inputSpeed = (speed) => {
    if(speed < 70) {
        return "OK"
    } else {
        const overspeed = Math.floor((speed - 70) / 5);
        if (overspeed <= 12) {
            return `Points: ${overspeed}`;
        } else {
            return `License suspended`;
        }
    }
}

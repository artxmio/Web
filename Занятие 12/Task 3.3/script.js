function calculateMinutesSinceEpoch() {
    const currentTime = new Date().getTime();

    const minutesSinceEpoch = Math.floor(currentTime / (1000 * 60));

    console.log("Количество минут с 1 января 1970 года:", minutesSinceEpoch);
}

calculateMinutesSinceEpoch();

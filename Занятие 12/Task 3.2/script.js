function getDayOfWeek() {
    const date = new Date(2015, 0, 7);

    const dayIndex = date.getDay();

    const days = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];

    console.log(`7 января 2015 года был ${days[dayIndex]}.`);
}

getDayOfWeek();

function getCurrentMonth() {
    const months = [
        "январь", "февраль", "март", "апрель",
        "май", "июнь", "июль", "август",
        "сентябрь", "октябрь", "ноябрь", "декабрь"
    ];

    const currentMonth = new Date().getMonth(); // Получаем текущий месяц (0 - январь, 11 - декабрь)
    console.log("Текущий месяц: " + months[currentMonth]);
}

getCurrentMonth();
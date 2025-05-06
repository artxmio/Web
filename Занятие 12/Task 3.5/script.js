function getZodiac() {
    const inputDate = document.getElementById("birthdate").value;

    if (!inputDate) {
        document.getElementById("zodiac-result").textContent = "Пожалуйста, введите дату рождения!";
        return;
    }

    const date = new Date(inputDate);
    const month = date.getMonth() + 1; // Месяцы начинаются с 0, добавляем 1
    const day = date.getDate();

    let zodiacSign = "";

    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        zodiacSign = "Овен";
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        zodiacSign = "Телец";
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
        zodiacSign = "Близнецы";
    } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
        zodiacSign = "Рак";
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        zodiacSign = "Лев";
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        zodiacSign = "Дева";
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
        zodiacSign = "Весы";
    } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
        zodiacSign = "Скорпион";
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
        zodiacSign = "Стрелец";
    } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
        zodiacSign = "Козерог";
    } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
        zodiacSign = "Водолей";
    } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
        zodiacSign = "Рыбы";
    }

    document.getElementById("zodiac-result").textContent = `Ваш знак зодиака: ${zodiacSign}`;
}

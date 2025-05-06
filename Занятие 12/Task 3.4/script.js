document.getElementById("birthday").addEventListener("blur", function () {
    const inputDate = this.value;

    if (!inputDate) {
        document.getElementById("result").textContent = "Пожалуйста, введите дату!";
        return;
    }

    const birthday = new Date(Date.parse(inputDate));
    const today = new Date();
    let nextBirthday = new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate());

    if (nextBirthday < today) {
        nextBirthday.setFullYear(today.getFullYear() + 1);
    }

    const diffTime = nextBirthday - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    document.getElementById("result").textContent = `До вашего следующего дня рождения осталось ${diffDays} дней!`;
});

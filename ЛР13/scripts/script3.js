function playLottery() {
    const bet = parseFloat(document.getElementById("bet").value);
    if (isNaN(bet) || bet <= 0) {
        return alert("Введите корректную ставку!");
    }

    const outcome = Math.floor(Math.random() * 11) - 5;
    let message = `Выпало число: ${outcome}. `;

    if (outcome > 0) {
        message += `Вы выиграли ${bet * outcome} у.е.! 🎉`;
    } else if (outcome < 0) {
        message += `Вы проиграли ${bet * Math.abs(outcome)} у.е. 😞`;
    } else {
        message += "Ничья! Ставка возвращается.";
    }

    document.getElementById("lotteryResult").textContent = message;
}
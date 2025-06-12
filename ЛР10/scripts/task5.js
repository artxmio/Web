let days = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];
for (let day of days) {
    if (day === "СБ" || day === "ВС") {
        console.log(`%c${day}`, "font-weight: bold");
    } else {
        console.log(day);
    }
}

$(document).ready(function () {
    $("#registrationForm").on("submit", function (e) {
        e.preventDefault(); // Предотвращает отправку формы

        let isValid = true;

        // Проверка имени пользователя
        const username = $("#username").val().trim();
        if (username === "") {
            isValid = false;
            $("#usernameError").text("Имя пользователя обязательно.");
        } else {
            $("#usernameError").text("");
        }

        // Проверка email
        const email = $("#email").val().trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Регулярное выражение для проверки email
        if (email === "" || !emailRegex.test(email)) {
            isValid = false;
            $("#emailError").text("Введите корректный email.");
        } else {
            $("#emailError").text("");
        }

        // Проверка пароля
        const password = $("#password").val();
        if (password.length < 6) {
            isValid = false;
            $("#passwordError").text("Пароль должен быть не менее 6 символов.");
        } else {
            $("#passwordError").text("");
        }

        // Если все данные валидны
        if (isValid) {
            alert("Форма успешно отправлена!");
            // Здесь можно обработать отправку данных (например, через AJAX)
        }
    });
    // Autocomplete
    const countries = ["Australia", "Austria", "Azerbaijan", "Argentina", "Afghanistan"];
    $("#autocomplete").autocomplete({
        source: countries,
        minLength: 2
    });

    // Accordion
    $("#accordion").accordion();

    // Tabs
    $("#tabs").tabs();

    // Progressbar
    $("#progressbar").progressbar({
        value: 50
    });

    // Dialogs
    $("#dialog1").dialog({
        autoOpen: false,
        width: 300,
        height: 200
    });
    $("#dialog2").dialog({
        autoOpen: false,
        modal: true
    });
    $("#dialog3").dialog({
        autoOpen: false,
        buttons: {
            OK: function () {
                $(this).dialog("close");
            },
            Cancel: function () {
                $(this).dialog("close");
            }
        }
    });

    // Dialog buttons
    $("#dialog-btn1").click(function () {
        $("#dialog1").dialog("open");
    });
    $("#dialog-btn2").click(function () {
        $("#dialog2").dialog("open");
    });
    $("#dialog-btn3").click(function () {
        $("#dialog3").dialog("open");
    });
});

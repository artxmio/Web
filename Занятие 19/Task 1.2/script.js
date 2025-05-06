$(function () {
    const countries = [
        "Австралия", "Австрия", "Азербайджан", "Аргентина", "Афганистан",
        "Беларусь", "Бразилия", "Великобритания", "Германия", "Грузия",
        "Дания", "Египет", "Израиль", "Ирак", "Иран", "Италия",
        "Канада", "Мексика", "Россия", "США", "Япония"
    ];

    $("#autocomplete").autocomplete({
        source: function (request, response) {
            if (request.term.length > 3) {
                response(
                    countries.filter(country =>
                        country.toLowerCase().includes(request.term.toLowerCase())
                    )
                );
            } else {
                response([]);
            }
        }
    });

    $("#accordion").accordion({
        collapsible: true,
        heightStyle: "content"
    });

    $("#el1").css({
        "padding": "10px 20px",
        "background-color": "#007BFF",
        "color": "white",
        "border": "none",
        "border-radius": "5px",
        "cursor": "pointer",
        "font-size": "16px"
    });

    $("#el2").css({
        "display": "inline-block",
        "padding": "10px 20px",
        "background-color": "#28a745",
        "color": "white",
        "text-decoration": "none",
        "border-radius": "5px",
        "cursor": "pointer",
        "font-size": "16px"
    });

    $("#el3").css({
        "display": "inline-block",
        "padding": "10px 20px",
        "background-color": "#ffc107",
        "color": "black",
        "border-radius": "5px",
        "cursor": "pointer",
        "font-size": "16px"
    });
});

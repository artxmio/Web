$(function () {
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

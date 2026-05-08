
// FitLife Hub JavaScript

$(document).ready(function () {
    $("#nav_menu").slicknav({
        prependTo: "#mobile_menu",
        label: "Menu"
    });

    $("#contactForm").on("submit", function (event) {
        let name = $("#name").val().trim();
        let email = $("#email").val().trim();
        let goal = $("#goal").val();
        let message = $("#message").val().trim();

        if (name === "" || email === "" || goal === "" || message === "") {
            event.preventDefault();
            $("#formMessage").text("Please complete all fields before submitting the form.");
        } else {
            $("#formMessage").text("");
        }
    });
});

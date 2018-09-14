$("#createBurger").on("submit", function (e) {
    e.preventDefault();

    $.ajax("/api/burgers", {
        type: "POST",
        data: {
            name: $("#newBurgerName").val().trim()
        }
    }).then(
        function () {
            location.reload();
        }
    );
});

$('.devourButton').on('click', function (e) {
    e.preventDefault();
    $.ajax("/api/burgers/" + e.currentTarget.dataset.id, {
        type: "PUT"
    }).then(
        function () {
            location.reload();
        }
    );
});
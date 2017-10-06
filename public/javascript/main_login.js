$(document).ready(function () {
    setTimeout(function () {
        $(".hidden").removeClass("hidden");
        $(".wait").removeClass("wait");
        $("#loading").css('display', 'none');
    }, 1000)

    $("#loginform").submit(function (event) {

        /* stop form from submitting normally */
        event.preventDefault();
        var username = $("#username").text();
        var password = $("#password").text();
        $.ajax({
            url: $('#loginform').attr('action'),
            type: 'POST',
            data: $('#loginform').serialize(),
            success: function (data, jqXHR) {
                console.log('form submitted.');
                console.log(data);
                window.location.href = "https://my.usc.edu";
            }
        });
    });
});

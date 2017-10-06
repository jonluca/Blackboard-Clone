$(document).ready(function () {
    setTimeout(function () {
        $(".hidden").removeClass("hidden");
        $(".wait").removeClass("wait");
        $("#loading").css('display', 'none');
    }, 1000)
});

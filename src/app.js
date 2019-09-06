$("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
    $("#nav").toggleClass("fixed-top")
    $("#btn-nav").toggleClass("mt-6-1")
});


$("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
    $("#nav").toggleClass("fixed-top")
    $("#btn-nav").toggleClass("mt-6-1")
    $("#wrapper").toggleClass("fixed-top");
    $("#sidebar-wrapper").toggleClass("px-5");
});

$("#close").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
    $("#nav").toggleClass("fixed-top")
    $("#btn-nav").toggleClass("mt-6-1")
    $("#wrapper").toggleClass("fixed-top");
    $("#sidebar-wrapper").toggleClass("px-5");
});


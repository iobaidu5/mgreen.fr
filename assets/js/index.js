$(document).ready(function () {
    $("li.active").removeClass("active");
    $('a[href="' + location.pathname + '"]')
      .closest("li")
      .addClass("active");
});

const nav = document.querySelector('.fixedNav');
window.addEventListener('scroll', fixNav);

function fixNav() {
    if (window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('navbar-active');
    } else {
        nav.classList.remove('navbar-active');
    }
}

$('#toshowtwo').click(function () {
    $('.two').show('slow');
    $('.one').hide('slow');

});

$('#toshowthree').click(function () {
    $('.three').show('slow');
    $('.two').hide('slow');

});

$('#toshowtwoback').click(function () {
    $('.two').show('slow');
    $('.three').hide('slow');

});

$('#toshowoneback').click(function () {
    $('.one').show('slow');
    $('.two').hide('slow');

});
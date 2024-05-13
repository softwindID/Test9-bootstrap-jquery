$('.single-item').slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
});



new WOW({
    animateClass: 'animate__animated',
}).init();


$( function() {
    $( "#accordion" ).accordion({
        collapsible: true
    });
} );

$('.test-popup-link').magnificPopup({
    type: 'image'
    // other options
});
$(document).ready(function() {
$('#btn').on("click", ()=> {
    let name = $('#inputName');
    let surname = $('#inputSurname');
    let phone = $('#inputPhone');
    let country = $('#inputCountry');
    let index = $('#inputAddress2');
    let address = $('#inputAddress');

    if(!name.val()) {
        alert('Введите ваше имя')
        return;
    }
    if(!surname.val()) {
        alert('Введите вашу фамилию')
        return;
    }
    if(!phone.val()) {
        alert('Введите ваш номер телефона')
        return;
    }
    if(!country.val()) {
        alert('Введите вашу страну')
        return;
    }
    if(!index.val()) {
        alert('Введите ваш индекс')
        return;
    }
    if (!/^\d{6}$/.test(index.val())) {
        alert('Индекс должен содержать ровно 6 цифр.');
        return;
    }
    if(!address.val()) {
        alert('Введите ваш адрес')
        return;
    }
    $('#myForm').hide();
    $('#thankYouMessage').show();
});
});
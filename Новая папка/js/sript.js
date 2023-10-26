$(document).ready(function () {
    //Навигация: открытие и закрытие по клику на

    let links_show = true;

    $('.menu img').click(function () {

        if(links_show) {
            $('.head_one .links').show(600);
        } else {
            $('.head_one .links').hide(600);
        }
        links_show = !links_show;
    })
})
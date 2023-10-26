$(document).ready(function () {
    //Навигация: открытие и закрытие по клику на

    let links_show = true;

    $('.menu img').click(function () {

        if (links_show) {
            $('.head_one .links').show(600);
        } else {
            $('.head_one .links').hide(600);
        }
        links_show = !links_show;
    });

    // МО покупка тура

    $('.se1 .start').click(function () {
        $('.overlay').show(600);
    });

    $('.overlay .close-popup').click(function () {
        $('.overlay').hide(600);
    });

    // МО заполнение формы на покупку тура

    $('.overlay button').click(function (e) {
        e.preventDefault();
        $('.shop').show();

    });

    $('.shop .close-popup_shop').click(function () {
        $('.shop').hide();
    });

    // Проверка на заполнение формы мо

    $('.popup_shop button').click(function (e) {
        e.preventDefault();
        let count = 0;
        let flag = false;
        $('.popup_shop .name input').each(function () {
            if ($(this).val().length == 0) {
                $(this).css({
                    'border': '2px solid red'
                });
                count++;
            } else {
                $(this).css({
                    'border': 'none'
                });
            }
        });

        $('.popup_shop .date input').each(function () {
            if ($(this).val().length != 10) {
                $(this).css({
                    'border': '2px solid red'
                });
                count++;
            } else {
                $(this).css({
                    'border': 'none'
                });
            }
        });

        if ($('.comment textarea').val().length > 0) {
            $('.comment textarea').css({
                'border': 'none'
            });
        } else {
            $('.comment textarea').css({
                'border': '2px solid red'
            });
            count++;
        }

        $('.popup_shop .comp input').each(function () {
            if ($(this).is(':checked')) {
                flag = true;
            } else {
                $(this).parent().parent().css({
                    'border': '2px solid red'
                });
            }
        });

        if (flag) {
            $('.popup_shop .comp').css({
                'border': 'none'
            });
        }

        if (count > 0 || !flag) {
            alert('Введите данные!');
        } else {
            $('.popup_shop .name input').each(function () {
                $(this).attr('disabled', 'disabled');
            });
            $('.popup_shop .date input').each(function () {
                $(this).attr('disabled', 'disabled');
            });
            $('.popup_shop .comp input').each(function () {
                $(this).attr('disabled', 'disabled');
            });
            $('.comment textarea').attr('disabled', 'disabled');
            alert('Данные отправлены!');
        }
    });

    //Проверка заполнения формы
    let flag = false;
    let flag2 = false;

    $('.send').click(function (e) {
        e.preventDefault();
        //первый вариант
        if (!flag) {
            if ($('.name-1').val() != '' && $('.email-1').val() != '' && $('.phone-1').val() != '' && $('.FormsTwo textarea').val() != '') {
                alert('поля формы успешно заполнены!');
                $('.block1 input').each(function () {
                    $(this).attr('disabled', 'disabled');
                })
                $('.FormsTwo textarea').attr('disabled', 'disabled');
                flag = true;
            } else {
                alert('не все поля формы заполнены');
            }
        }

        $('.block2 input').each(function () {
            if ($(this).is(':checked')) {
                $('.block2 input').each(function () {
                    $(this).attr('disabled', 'disabled');
                    flag2 = true;
                })
            }
        })

        if (!flag2) {
            alert('Выберите способ связи!');
        }

        if ($('.block3 select option:selected').text() != '') {
            $('.block3 select').attr('disabled', 'disabled');
        } else {
            alert('Выберите SELECT !');
        }

        if ($('.block5 input').is(':checked')) {
            $('.block5 input').attr('disabled', 'disabled');
        } else {
            alert('Подтвердите что Вы человек!');
        }
    });

    //Настройка галереи

    $('.box .point a').click(function (e) {
        e.preventDefault();

        if ($('.box .gal_big img').attr('src') != $(this).attr('href')) {
            $('.box .gal_big img').hide().attr('src', $(this).attr('href')).fadeIn(1000).css({
                width: '100%',
                height: '100%',
            })
        }
    });

    $('.box .point a img').mouseup(function () {
        $(this).fadeTo(2000, 0.6);
    });

    $(document).mouseup(function () {
        $('.box .point a img').fadeTo(0, 1);
    })

    //box1

    $('.box1 .point a').click(function (e) {
        e.preventDefault();

        if ($('.box1 .gal_big img').attr('src') != $(this).attr('href')) {
            $('.box1 .gal_big img').hide().attr('src', $(this).attr('href')).fadeIn(1000).css({
                width: '100%',
                height: '100%',
            })
        }
    });

    $('.box1 .point a img').mouseup(function () {
        $(this).fadeTo(2000, 0.6);
    });

    $(document).mouseup(function () {
        $('.box1 .point a img').fadeTo(0, 1);
    })

    //box2

    $('.box2 .point a').click(function (e) {
        e.preventDefault();

        if ($('.box2 .gal_big img').attr('src') != $(this).attr('href')) {
            $('.box2 .gal_big img').hide().attr('src', $(this).attr('href')).fadeIn(1000).css({
                width: '100%',
                height: '100%',
            })
        }
    });

    $('.box2 .point a img').mouseup(function () {
        $(this).fadeTo(2000, 0.6);
    });

    $(document).mouseup(function () {
        $('.box2 .point a img').fadeTo(0, 1);
    });


    // Карусель

    let startPoint = null;
    let currPoint = 0;
    let access = true;
    let angle = 0;

    function rotate(e, direction = '') {
        if(e.key == 'ArrowLeft' || direction == 'left') {
            angle -= 45;
        } else if(e.key == 'ArrowRight' || direction == 'right') {
            angle += 45;
        } else {
            if(startPoint) currPoint = e.changedTouches[0].pageX;
            startPoint - currPoint > 0 ? angle -= 45 : angle += 45;
        }
        $('.cube').css({
            'transform': `rotateY(${angle}deg)`
        });
    }


    $(document).keydown(function(e) {
        rotate(e);
    });

    $('.area').on('touchstart', function (e) {
        startPoint = e.changedTouches[0].pageX;
    });

    $('.area').on('touchmove', function (e) {
        if(access) {
            access = false;
            rotate(e);
        }
    });

    $('.area').on('touchend', function () {
        setTimeout(() => {
            access = true;
        }, 1000);
    });

    $('.to-left').click(function (e) {
        rotate(e, 'left');
    });

    $('.to-right').click(function (e) {
        rotate(e, 'right');
    });

    $('.area').on('mousedown', function (e) {
        startPoint = e.pageX;

        $('.area').on('mousemove', function (e) {
            if(access && startPoint) {
                access = false;
                if(startPoint != e.pageX) currPoint = e.pageX;
                startPoint - currPoint > 0 ? rotate(e, 'left') : rotate(e, 'right');
            }
        });
    });

    $('.area').on('mouseup', function () {
        startPoint = null;
        setTimeout(() => {
            access = true;
        }, 1000);
    });

    $('.area').on('mouseleave', function () {
        startPoint = null;
        setTimeout(() => {
            access = true;
        }, 1000);
    })
});
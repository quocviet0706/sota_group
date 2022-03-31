//varible scroll
var scrollButton = $(".scroll-button");
var showAni = $(".scroll-ani");
var minWebWidth = 1200;
//library fullpage animation and scroll
var myFullpage = new fullpage('#fullpage', {
    anchors: ['trang-chu', 'gioi-thieu', 'tong-quan', 'vi-tri', 'tien-ich', 'mat-bang', 'thiet-ke', 'tien-do', 'loi-ich', 'thanh-toan', 'chinh-sach', 'partner'],
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['Trang chủ', 'Giới thiệu', 'Tổng quan', 'Vị trí', 'Tiện ích', 'Mặt bằng', 'Thiết kế', 'Tiến độ', 'Lợi ích', 'Thanh toán', 'Chính sách', 'Đối tác'],
    showActiveTooltip: true,
    scrollingSpeed: 900,
    responsiveWidth: minWebWidth,
    menu: "#nav-menu",
    afterRender: function () {
        var count = 0;
        var dem = 1;
        $("#fp-nav ul li a").each(function () {
            if (dem > 1) {
                count++;
                var text = count < 10 ? ("0" + count) : count;
                $(this).append("<span class='text-num'>" + text + "</span>");
            }
            dem++;
        });
    },
    onLeave: function (origin, destination, direction) {
        //animation allow use web
        if ($(window).width() >= minWebWidth) { 
            setTimeout(() => {
                $("." + origin.anchor).find('.animated').removeClass('go');
                $("." + destination.anchor).find('.animated').addClass('go');
            }, 400);

            setTimeout(() => {
                $(".menu-main").find(".animated").addClass("go");
            }, 100);
        }
        scrollButton.removeClass("show");
        showAni.removeClass("show");
    },
    //load and remove class show
    afterLoad: function (origin, destination, direction) {
        console.log(origin, destination);
        setTimeout(() => {
            showAni.addClass("show");
            if (destination.isLast) {
                $(".btn-act.register").removeClass("show");
            }

        }, 200);

        $(".menu-main").find(".animated").addClass("go");


    }
});
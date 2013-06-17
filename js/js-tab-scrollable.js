$(function(){
    $(".js-tab-scrollable").scrollable(
        {
            items: '.b-promo-box__scroll-over'

        }
        ).navigator(
        {
            activeClass: "pffff",
            navi : ".b-promo-box__menu"
        }
    );
});
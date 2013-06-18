$(function(){
    $(".js-tab-scrollable").scrollable(
        {
            items: '.b-promo-box__scroll-over'

        }
        ).navigator(
        {
            activeClass: "b-promo-box__menu-a_state_selected",
            navi : ".b-promo-box__menu"
        }
    );
});
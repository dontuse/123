$(function(){
    $menuOwner = $('.js-drop-menu--owner');
    $menuSlave = $('.js-drop-menu--slave').hide();


    $('.b-main-menu__el', $menuOwner).hover(function(e){
        $menuSlave.stop().slideDown(300);
    }, function() {

    });


});
$(function () {
    var $popupbg = $('.popup-bg'),
        $popup = $('.popup');

    $('.thumbnail').on('click', function () {
        var $this = $(this);
        $popup.html($this.html());
        $popupbg.show(500);
        debugger;
    });

    $popupbg.on('click', function(){
        $popupbg.hide(500);
    });

}());
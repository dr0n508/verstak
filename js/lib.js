(function($) {
$(function() {
  $('ul.block_30').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tabs').find('div.block_24').removeClass('active').eq($(this).index()).addClass('active');
  });
});
})(jQuery);

// $(function () {
//     $('.modal_temp').leanModal({top: "20%" , closeButton: ".modal_close" });
// });


$('.modal_close').on('click', function() {
    $.modal.close();
    var link = $(this).attr('href');
    location.href = link;
    return false;
});


(function($) {
$(function() {
  $('ul.block_30').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tabs').find('div.block_24').removeClass('active').eq($(this).index()).addClass('active');
  });
});
})(jQuery);

$(function () {
    $('.modal').leanModal({top: "20%" , closeButton: ".modal_close" });
});


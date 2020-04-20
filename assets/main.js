// 1. Модуль главного меню
export function mainMenu() {

  var scrolledY = 0,
    topMenu = $('.header__block').offset().top;

  toggleFixedMenu();
  scrollX('.header__block');

  $(window).on('scroll', function() {
    toggleFixedMenu();
    scrollX('.header__block');
  });

  function toggleFixedMenu() {
    scrolledY = $(window).scrollTop();

    if (scrolledY >= topMenu && !$('.header__block').hasClass('_fixed')) {
      $('.header__block').addClass('_fixed');
    } else if (scrolledY < topMenu && $('.header__block').hasClass('_fixed')) {
      $('.header__block').removeClass('_fixed');
    }
  }

  function scrollX(classBlock) {
    var scrolledX = $(window).scrollLeft();

    if (scrolledX && $(classBlock).hasClass('_fixed')) {
      $(classBlock).css('left', -scrolledX);
    } else {
      $(classBlock).css('left', 'auto');
    }
  }
}
// ----------------------------

// 2. Модуль боковой панели
export function SideMenu() {

  const _self = this;

  _self.marginTopSidebar = 0;
  _self.heightMenu = $('.header__block').outerHeight(true);
  _self.heightSidebar = $('.sidebar').outerHeight();
  _self.topSidebar = $('.sidebar ').offset().top;
  _self.minTopSidebar = _self.topSidebar - _self.heightMenu - 10;
  _self.scrolledY = $(window).scrollTop();
  _self.maxTopSidebar = $('.content-container__block > section').height() - _self.heightMenu;

  function toggleFixedSidebar() {

    _self.scrolledY = $(window).scrollTop();

    if (_self.scrolledY >= _self.minTopSidebar) {
      if (_self.scrolledY < _self.maxTopSidebar) {
        _self.marginTopSidebar = _self.scrolledY - _self.topSidebar + _self.heightMenu + 10;
        $('.sidebar-container').css('margin-top', _self.marginTopSidebar);
        $('.sidebar').addClass('_fixed').css('top', _self.heightMenu + 10);
        scrollX('.sidebar');
      } else {
        $('.sidebar-container').css('margin-top', _self.maxTopSidebar - _self.heightSidebar + _self.heightMenu + 30);
        $('.sidebar').removeClass('_fixed').css('top', 0);
      }
    } else {
      $('.sidebar-container').css('margin-top', 10);
      $('.sidebar').removeClass('_fixed').css('top', 0);
    }
  }

  function scrollX(classBlock) {
    _self.scrolledX = $(window).scrollLeft();

    if (_self.scrolledX && $(classBlock).hasClass('_fixed')) {
      $(classBlock).css('left', -_self.scrolledX);
    } else {
      $(classBlock).css('left', 'auto');
    }
  }

  _self.init = function (){

    toggleFixedSidebar();
    scrollX('.sidebar');

    $(window).on('scroll', function() {
      toggleFixedSidebar();
      scrollX('.sidebar');
    });
  }
}
// ----------------------------

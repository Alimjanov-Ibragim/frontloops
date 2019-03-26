"use strict";

/**
 * Подключение JS файлов которые начинаются с подчеркивания
 */

/**
 * Возвращает функцию, которая не будет срабатывать, пока продолжает вызываться.
 * Она сработает только один раз через N миллисекунд после последнего вызова.
 * Если ей передан аргумент `immediate`, то она будет вызвана один раз сразу после
 * первого запуска.
 */
function debounce(func, wait, immediate) {
  var timeout = null,
      context = null,
      args = null,
      later = null,
      callNow = null;
  return function () {
    context = this;
    args = arguments;

    later = function later() {
      timeout = null;

      if (!immediate) {
        func.apply(context, args);
      }
    };

    callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) {
      func.apply(context, args);
    }
  };
} // http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
// MIT license


;

(function () {
  var lastTime = 0,
      vendors = ['ms', 'moz', 'webkit', 'o'],
      x,
      currTime,
      timeToCall,
      id;

  for (x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
  }

  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function (callback) {
      currTime = new Date().getTime();
      timeToCall = Math.max(0, 16 - (currTime - lastTime));
      id = window.setTimeout(function () {
        callback(currTime + timeToCall);
      }, timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };
  }

  if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = function (id) {
      clearTimeout(id);
    };
  }
})();

;

(function () {
  // Test via a getter in the options object to see if the passive property is accessed
  var supportsPassiveOpts = null;

  try {
    supportsPassiveOpts = Object.defineProperty({}, 'passive', {
      get: function get() {
        window.supportsPassive = true;
      }
    });
    window.addEventListener('est', null, supportsPassiveOpts);
  } catch (e) {} // Use our detect's results. passive applied if supported, capture will be false either way.
  //elem.addEventListener('touchstart', fn, supportsPassive ? { passive: true } : false);

})();

function getSVGIconHTML(name, tag, attrs) {
  if (typeof name === 'undefined') {
    console.error('name is required');
    return false;
  }

  if (typeof tag === 'undefined') {
    tag = 'div';
  }

  var classes = 'svg-icon svg-icon--<%= name %>';
  var iconHTML = ['<<%= tag %> <%= classes %>>', '<svg class="svg-icon__link">', '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#<%= name %>"></use>', '</svg>', '</<%= tag %>>'].join('').replace(/<%= classes %>/g, 'class="' + classes + '"').replace(/<%= tag %>/g, tag).replace(/<%= name %>/g, name);
  return iconHTML;
}
/* ^^^
 * JQUERY Actions
 * ========================================================================== */


$(function () {
  'use strict';
  /**
   * определение существования элемента на странице
   */

  $.exists = function (selector) {
    return $(selector).length > 0;
  };
  /**
   * [^_]*.js - выборка всех файлов, которые не начинаются с подчеркивания
   */


  var Atitle = $('.loop3Step8Accordion__title');
  var Abody = $('.loop3Step8Accordion__body');
  Atitle.on('click', function (e) {
    e.preventDefault();
    var index = $(this).index();
    Atitle.eq(index).addClass('isOpened').siblings().removeClass('isOpened');
    Abody.eq(index).addClass('isOpened').siblings().removeClass('isOpened');
  });
  $('.loop3Step8Slider').owlCarousel({
    loop: true,
    margin: 10,
    items: 1,
    nav: true
  });
  ;

  (function ($) {
    'use strict';

    var PAGE = $('html, body');
    var pageScroller = $('.page-scroller'),
        pageYOffset = 0,
        inMemory = false,
        inMemoryClass = 'page-scroller--memorized',
        isVisibleClass = 'page-scroller--visible',
        enabledOffset = 60;

    function resetPageScroller() {
      setTimeout(function () {
        if (window.pageYOffset > enabledOffset) {
          pageScroller.addClass(isVisibleClass);
        } else if (!pageScroller.hasClass(inMemoryClass)) {
          pageScroller.removeClass(isVisibleClass);
        }
      }, 150);

      if (!inMemory) {
        pageYOffset = 0;
        pageScroller.removeClass(inMemoryClass);
      }

      inMemory = false;
    }

    if (pageScroller.length > 0) {
      window.addEventListener('scroll', resetPageScroller, window.supportsPassive ? {
        passive: true
      } : false);
      pageScroller.on('click', function (event) {
        event.preventDefault();
        window.removeEventListener('scroll', resetPageScroller);

        if (window.pageYOffset > 0 && pageYOffset === 0) {
          inMemory = true;
          pageYOffset = window.pageYOffset;
          pageScroller.addClass(inMemoryClass);
          PAGE.stop().animate({
            scrollTop: 0
          }, 500, 'swing', function () {
            window.addEventListener('scroll', resetPageScroller, window.supportsPassive ? {
              passive: true
            } : false);
          });
        } else {
          pageScroller.removeClass(inMemoryClass);
          PAGE.stop().animate({
            scrollTop: pageYOffset
          }, 500, 'swing', function () {
            pageYOffset = 0;
            window.addEventListener('scroll', resetPageScroller, window.supportsPassive ? {
              passive: true
            } : false);
          });
        }
      });
    }
  })(jQuery);
});
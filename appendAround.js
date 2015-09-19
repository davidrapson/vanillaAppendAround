/* eslint-env browser, node, amd */
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.appendAround = factory();
    }
})(this, function () {
    var settings = {};

    var canRun = (
        'querySelector' in document &&
        'getComputedStyle' in window
    );

    if (!canRun) {
        return false;
    }

    function debounce(func, wait, immediate) {
        var timeout;
        return function () {
            var context = this;
            var args = arguments;
            var later = function () {
                timeout = null;
                if (!immediate) {
                    func.apply(context, args);
                }
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) {
                func.apply(context, args);
            }
        };
    }

    function isHidden(elem) {
        return window.getComputedStyle(elem, null).getPropertyValue('display') === 'none';
    }

    function appendToVisibleContainer(el) {
        var parent = el.parentNode;
        var attVal = parent.getAttribute(settings.attribute);
        var attSelector = '[' + settings.attribute + '="' + attVal + '"]';
        var sets = document.querySelectorAll(attSelector);

        if (isHidden(parent) && sets.length) {
            var found = 0;
            [].forEach.call(sets, function (set) {
                if (!isHidden(set) && !found) {
                    set.appendChild(el);
                    found++;
                    parent = el;
                }
            });
        }
    }

    function run(els) {
        [].forEach.call(els, function (el) {
            appendToVisibleContainer(el);
            window.addEventListener('resize', debounce(function () {
                appendToVisibleContainer(el);
            }), settings.debounceDuration);
        });
    }

    return function (o) {
        settings = {
            selector: o && o.selector || '.js-append',
            attribute: o && o.attribute || 'data-set',
            debounceDuration: o && o.debounceDuration || 66
        };
        var els = document.querySelectorAll(settings.selector);
        if (els.length) {
            run(els);
        }
    };
});

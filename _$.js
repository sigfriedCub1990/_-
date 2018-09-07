var _$ = {};

_$ = (function () {
     function select(selector) {
        return document.querySelectorAll(selector)[0];
    }

    function changeColor(selector, newColor) {
        let elem = select(selector);
        elem.style.color = newColor;
    }

    function selectById (id) {
        if (id[0] !== '#') {
            return document.getElementById(id);
        } else {
            return document.getElementById(`#${id}`);
        }
    }

    function selectByClass (className) {
        if (id[0] !== '#') {
            return document.getElementById(className);
        } else {
            return document.getElementById(`.${className}`);
        }
    }

    function click(element, fn) {
        element.addEventListener('click', fn);
    }

    
    return {
      click: click,
      selectById: selectById,
      selectByClass: selectByClass,
      select: select,
      changeColor: changeColor
    };
})();

console.log(_$);
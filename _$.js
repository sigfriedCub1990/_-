var _$ = {};

_$ = (function () {
    let _selectedElement = null;

    function select(selector) {
        _selectedElement = document.querySelectorAll(selector)[0];
        return this;
    }

    function changeColor(newColor) {
        _selectedElement.style.color = newColor;
        return this;
    }

    function selectById (id) {
        if (id[0] !== '#') {
            _selectedElement = document.getElementById(`#${id}`);
            return this;
        } else {
            _selectedElement = document.getElementById(id);
            return this;
        }
    }

    function selectByClass (className) {
        if (className[0] !== '.') {
            _selectedElement = document.getElementByClass(`.${className}`);
            return this;
        } else {
            _selectedElement = document.getElementByClass(className);
            return this;
        }
    }

    function click(fn) {
        _selectedElement.addEventListener('click', fn);
        return this;
    }

    
    return {
      click: click,
      selectById: selectById,
      selectByClass: selectByClass,
      select: select,
      changeColor: changeColor
    };
})();
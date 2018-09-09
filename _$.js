var _$ = {};

_$ = (function () {
    let _selectedElement = null;

    function attr(attr, value) {
        if (value) {
            _selectedElement.setAttribute(attr, value);
        } else {
            return _selectedElement.getAttribute(attr);
        }
    }

    function select(selector) {
        _selectedElement = document.querySelectorAll(selector)[0];
        return this;
    }

    function changeColor(newColor) {
        _selectedElement.style.color = newColor;
        return this;
    }

    function removeClass(toAdd) {
        _selectedElement.classList.remove(toAdd);
        return this;
    }

    function addClass(toRemove) {
        _selectedElement.classList.add(toRemove);
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

    function submit(fn) {
        _selectedElement.addEventListener('submit', fn);
        return this;
    }

    function ajax(options) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open(options.method, options.url, true);
            xhr.setRequestHeader('Content-type', options.headers.contentType);
            xhr.setRequestHeader('Accept', options.headers.accept);
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    resolve ({
                        error: false,
                        data: JSON.parse(xhr.responseText)
                    });
                }
            }

            xhr.onload = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    resolve({
                        error: false,
                        data: JSON.parse(xhr.responseText)
                    });
                } else {
                    reject({
                        error: true,
                        message: this.status
                    });
                }
            }

            if (options.data) {
                xhr.send(JSON.stringify(options.data));
            } else {
                xhr.send();
            }
        })
    }

    function ready(fn) {
        document.addEventListener('load', fn);
        return this;
    }

    function val() {
        return _selectedElement.value;
    }

    return {
      attr: attr,
      click: click,
      selectById: selectById,
      selectByClass: selectByClass,
      select: select,
      changeColor: changeColor,
      submit: submit,
      ajax: ajax,
      ready: ready,
      val: val,
      addClass: addClass,
      removeClass: removeClass
    };
})();
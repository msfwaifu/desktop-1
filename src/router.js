'use strict';

const routes = require('./routes');

const hideAllpartials = function () {
    const partials = document.querySelectorAll('[data-partial]');

    Array.prototype.forEach.call(partials, function (partial) {
        partial.classList.remove('is-shown');
    });
};

const onlyShowPartial = function (name) {
    hideAllpartials();
    // Display the current partial
    document.querySelector(`[data-${name}]`).classList.add('is-shown');
};

const render = function (viewName, state) {
    routes[viewName].render(state);
    onlyShowPartial(viewName);
};

module.exports = {
    hideAllpartials,
    onlyShowPartial,
    render,
};

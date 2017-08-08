'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var applyTheme = exports.applyTheme = function applyTheme(name) {
    var themeName = name || 'Default';

    if (themeName !== 'Default' && themeName.indexOf('.') === -1) {
        themeName = 'Default.' + themeName;
    }

    var mainThemeName = themeName;
    var section = null;
    var context = null;

    if (themeName && themeName.indexOf('.') !== -1) {
        mainThemeName = themeName.split('.')[0];
        section = themeName.split('.')[1];

        if (section && section.indexOf(':') !== -1) {
            context = section.split(':')[1];
            section = section.split(':')[0];
        }
    }

    var themeObj = require('../theme/' + mainThemeName + '/theme');
    themeObj.themeSection = section;
    themeObj.themeContext = context;
    return Object.assign({}, themeObj);
};

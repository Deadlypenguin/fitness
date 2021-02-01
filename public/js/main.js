const NAVBAR_BURGER = '.navbar-burger';
const NAVBAR_MENU = '.navbar-menu';
const IS_ACTIVE = 'is-active';

/**
 * Toggles the navigation on and off when the burger is clicked
 * @returns {undefined}
 */
function navigationToggle() {
    jQuery(NAVBAR_BURGER).toggleClass(IS_ACTIVE);
    jQuery(NAVBAR_MENU).toggleClass(IS_ACTIVE);
}

/**
 * Function run when document is ready
 * @returns {undefined}
 */
function documentReady() {
    jQuery(NAVBAR_BURGER).click(navigationToggle);
}

jQuery(document).ready(documentReady);
/*!
 * jQuery mybox plugin
 * Version 0.12 (14-Oct-2019)
 * @requires jQuery v1.2.3 or later
 *
 * Examples at: http://3wa.tw/demo/htm/mybox
 * Copyright (c) 2014-2017 Feather Mountain (http://3wa.tw)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Special thanks to jQuery-BlockUI
 */
(function () { var a = ""; function d(k) { } function b() { return Math.floor(new Date().getTime() / 1000) } function j(l) { a = $(window).scrollTop(); for (var k in h) { if (typeof (l[k]) != "undefined") { h[k] = l[k] } } i = {} } function c(k) { $("#" + h.mybox_background_id).remove(); $("#" + h.mybox_div_id).remove(); $("body").append("<div id='" + h.mybox_background_id + "'></div>"); $("#" + h.mybox_background_id).css({ position: "fixed", "z-index": parseInt(new Date().getTime() / 1000), width: $(window).width() + "px", height: $(window).height() + "px", "background-color": h.mybox_background_css.background_Color, opacity: h.mybox_background_css.background_Opacity, left: parseInt($(window).scrollLeft()) + "px", top: "0px", display: "none" }); $("#" + h.mybox_background_id).show(); if (h.is_background_touch_close) { $("#" + h.mybox_background_id).click(function () { $.unmybox() }) } $("body").append("<div id='" + h.mybox_div_id + "'></div>"); $("#" + h.mybox_div_id).html(h.message); $("#" + h.mybox_div_id).css({ position: "fixed", "z-index": (parseInt(new Date().getTime() / 1000) + 1), "max-width": ($(window).width() * 90 / 100) + "px", "max-height": ($(window).height() * 90 / 100) + "px", overflow: "auto", display: "none" }); for (key in h.css) { $("#" + h.mybox_div_id).css(key, h.css[key]) } $("#" + h.mybox_div_id).css({ display: "inline", opacity: 0.01 }); h.is_block = true; $("#" + h.mybox_div_id + " img").bind("load", function () { g(); $("#" + h.mybox_div_id).css({ opacity: 1 }) }); g(); $("#" + h.mybox_div_id).css({ opacity: 1 }); $(window).bind("resize", f) } var f = function () { if (h.is_block) { $("#" + h.mybox_background_id).css({ position: "fixed", width: $(window).width() + "px", height: $(window).height() + "px", left: "0px", top: "0px", "pointer-events": "fill" }); g() } }; function g() { $("#" + h.mybox_div_id).css({ left: ((($(window).width() - $("#" + h.mybox_div_id).outerWidth()) / 2)) + "px", top: (($(window).height() - $("#" + h.mybox_div_id).outerHeight()) / 2) + "px" }) } function e() { h.is_block = false; $("#" + h.mybox_div_id).hide(); $("#" + h.mybox_div_id).remove(); $("#" + h.mybox_background_id).hide(); $("#" + h.mybox_background_id).remove(); $(window).unbind("resize", f); $(window).scrollTop(a) } var i = {}; var h = { is_background_touch_close: false, is_block: false, mybox_background_id: "mybox_background_" + b(), mybox_div_id: "mybox_div_" + b(), mybox_background_css: { background_Color: "#333", background_Opacity: 0.8 }, css: { border: "1px solid #fff", padding: "5px", "text-align": "left" }, message: "", beforeBlock: function () { }, onBlock: function () { }, unBlock: function () { } }; $.mybox = function (k) { h.beforeBlock = function () { }; h.onBlock = function () { }; h.unBlock = function () { }; j(k); h.beforeBlock(); c(k); h.onBlock() }; $.mybox_center = function () { g() }; $.mybox_isOpen = function () { return h.is_block }; $.unmybox = function () { e(); h.unBlock() }; if (typeof define === "function" && define.amd && define.amd.jQuery) { define(["jquery"], d) } else { d(jQuery) } })();
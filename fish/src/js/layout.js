/**
 * Управление размерами игры.
 * LayoutManager.gameWidth, LayoutManager.gameHeight - текущий размер канваса
 * LayoutManager.orientation - ориентация устройства (LayoutManager.LANDSCAPE или LayoutManager.PORTRAIT)
 * Текущее окно игры получит вызов метода onResize каждый раз, когда LayoutManager производит манипуляции с канвасом
 */

var LayoutManager = {};

LayoutManager.width = 0;
LayoutManager.height = 0;



LayoutManager.fitLayout = function() {
    var w = window.innerWidth;
    var h = window.innerHeight;

    if(LayoutManager.width === w && LayoutManager.height === h) return;
    
    LayoutManager.width = w;
    LayoutManager.height = h;
    
    app.view.style.width = w + "px";
    app.view.style.height = h + "px";

    app.renderer.resize(w, h);
};
function SeaTextures() {
    PIXI.Sprite.call(this);
}
SeaTextures.prototype = Object.create(PIXI.extras.TilingSprite.prototype);
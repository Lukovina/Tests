function hitTestRectangle(r1, r2) {

    var hit, combinedHalfWidths, combinedHalfHeights, vx, vy;
  
    hit = false;
  
    r1.halfWidth = r1.width / 2;
    r1.halfHeight = r1.height / 2;
    r2.halfWidth = r2.width / 2;
    r2.halfHeight = r2.height / 2;
  
    dx = r1.x - r2.x;
    dy = r1.y - r2.y;

    combinedHalfWidths = r1.halfWidth + r2.halfWidth;
    combinedHalfHeights = r1.halfHeight + r2.halfHeight;

    if (Math.abs(dx) < combinedHalfWidths) {
      if (Math.abs(dy) < combinedHalfHeights) {
        hit = true;
      } else {
        hit = false;
      }
    } else {
      hit = false;
    }
    return hit;
  }
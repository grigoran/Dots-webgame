export function Vector(x, y) {
  if (typeof x != "number") {
    this.x = 0;
    this.y = 0;
  } else if (typeof y != "number") {
    this.x = x;
    this.y = x;
  } else {
    this.x = x;
    this.y = y;
  }
}

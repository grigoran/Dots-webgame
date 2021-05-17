export function maxAreaIndex(paths) {
  let nowArea = 0;
  let maxNodes = 0;
  let insideNodes = 0;
  let indexes = [];
  let areas = [];
  for (let i = 0; i < paths.length; i++) {
    nowArea = findArea(paths[i]);
    if (nowArea <= 0) continue;
    insideNodes = nowArea - paths[i].length / 2 + 1; //формула пика
    if (insideNodes <= 0) continue;
    if (insideNodes > maxNodes) {
      maxNodes = insideNodes;
      indexes = [i];
      areas = [nowArea];
    } else if (insideNodes == maxNodes) {
      indexes.push(i);
      areas.push(nowArea);
    }
  }

  if (maxNodes == 0) return -1;
  if (indexes.length < 1) return -1;
  let minArea = areas[0];
  let resIndex = indexes[0];
  for (let i = 1; i < indexes.length; i++) {
    if (areas[i] < minArea) {
      resIndex = indexes[i];
      minArea = areas[i];
    }
  }
  return resIndex;
}

function findArea(path) {
  //формула Гаусса
  let area = 0;
  for (let i = 0; i < path.length; i++) {
    area += (path[i].x * path[(i + 1) % path.length].y) / 2;
    area -= (path[(i + 1) % path.length].x * path[i].y) / 2;
  }
  return area;
}

//todo: return bounding box
export function simplifyPath(path) {
  let result = [];
  let direction = 4; //can be 5 2 1 0 3 6 7 8, 4 no direction
  let nowDirection = 4;

  let bounding = {
    min: { x: path[0].x, y: path[0].y },
    max: { x: path[0].x, y: path[0].y },
  };
  for (let i = 0; i < path.length - 1; i++) {
    let next = path[i + 1];
    let pos = path[i];

    if (pos.x < bounding.min.x) bounding.min.x = pos.x;
    if (pos.y < bounding.min.y) bounding.min.y = pos.y;
    if (pos.x > bounding.max.x) bounding.max.x = pos.x;
    if (pos.y > bounding.max.y) bounding.max.y = pos.y;

    nowDirection = next.x - pos.x + (next.y - pos.y) * 3 + 4;
    if (nowDirection != direction) {
      direction = nowDirection;
      result.push(pos);
    }
  }
  result.push(path[path.length - 1]);
  return { path: result, bounding, source: path };
}
export function isInsidePath(path, pos) {
  let horLineY = pos.y + 0.5;
  let intersects = 0;
  let now;
  let next;
  for (let i = 0; i < path.length; i++) {
    if (i == path.length - 1) {
      now = path[i];
      next = path[0];
    } else {
      now = path[i];
      next = path[i + 1];
    }
    let interX =
      ((horLineY - now.y) * (next.x - now.x)) / (next.y - now.y) + now.x;
    if (interX < pos.x) continue;

    let deltaA = horLineY - now.y;
    let deltaB = horLineY - next.y;
    if (deltaA == 0 || deltaB == 0) intersects++;
    if (Math.sign(deltaA) != Math.sign(deltaB)) intersects++;
  }
  return intersects % 2 == 1 ? true : false;
}

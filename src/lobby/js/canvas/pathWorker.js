export function findIntersects(path, pos) {
  for (let i = path.length - 1; i >= 1; --i) {
    if (pos.x == path[i].x && pos.y == path[i].y) {
      return true;
    }
  }
  return false;
}

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
  for (let i = 0; i < path.length - 1; i++) {
    let next = path[i + 1];
    let pos = path[i];
    nowDirection = next.x - pos.x + (next.y - pos.y) * 3 + 4;
    if (nowDirection != direction) {
      direction = nowDirection;
      result.push(pos);
    }
  }
  result.push(path[path.length - 1]);
  return result;
}

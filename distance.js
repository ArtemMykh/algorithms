const distance = (x1, y1, x2, y2) => Math.hypot(x2 - x1, y2 - y1);
console.log(distance(1, 1, 3, 3));

const euclideanDistance = (x, y) =>
    Math.hypot(...Object.keys(x).map(i => y[i] - x[i]));
console.log(euclideanDistance([1,1], [2,2]));
console.log(euclideanDistance([1,1,1], [3,3,3]));
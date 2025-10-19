//2pi RAD IR 360 DEG
// 1 DEG radiānos ir 2PI/360 jeb PI/180
var deg = Math.PI / 180;

class player {
  constructor(x, y, z, rx, ry) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.rx = rx;
    this.ry = ry;
    this.vx = 5; //ātrums x virzienā
    this.vy = 5; //ātrums y (vertikālā virzienā)
    this.vz = 5; //ātrums z virzienā
  }
}

var map = [
  [0, 100, 0, 90, 0, 0, 2000, 2000, "url(textures/grass.jpg)", 1], //grīda
  //x, y, z, rx, ry, rz, width, height, color, opacity
  [0, 0, -1000, 0, 0, 0, 2000, 200, "url(textures/walls.jpg)", 1], // siena priekšā
  [0, 0, 1000, 0, 0, 0, 2000, 200, "url(textures/walls.jpg)", 1], // siena aizmugurē
  [1000, 0, 0, 0, 90, 0, 2000, 200, "url(textures/walls.jpg)", 1], // siena labā pusē
  [-1000, 0, 0, 0, 90, 0, 2000, 200, "url(textures/walls.jpg)", 1], // siena kreisā pusē

  //siena 1
  [500, 0, 710, 0, 0, 0, 1000, 200, "url(textures/ieks_siena_1.jpg)", 1],
  [500, 0, 690, 0, 0, 0, 1000, 200, "url(textures/ieks_siena_1.jpg)", 1],
  [0, 0, 700, 0, 90, 0, 20, 200, "url(textures/ieks_siena_1.jpg)", 1],

  //siena 2
  [-650, 0, 710, 0, 0, 0, 700, 200, "url(textures/ieks_siena_1.jpg)", 1],
  [-650, 0, 690, 0, 0, 0, 700, 200, "url(textures/ieks_siena_1.jpg)", 1],
  [-300, 0, 700, 0, 90, 0, 20, 200, "url(textures/ieks_siena_1.jpg)", 1],

  //siena 3
  [0, 0, 350, 0, 0, 0, 1000, 200, "url(textures/ieks_siena_1.jpg)", 1],
  [0, 0, 330, 0, 0, 0, 1000, 200, "url(textures/ieks_siena_1.jpg)", 1],
  [-500, 0, 340, 0, 90, 0, 20, 200, "url(textures/ieks_siena_1.jpg)", 1],
  [500, 0, 340, 0, 90, 0, 20, 200, "url(textures/ieks_siena_1.jpg)", 1],

  //siena 4
  [0, 0, -350, 0, 0, 0, 1000, 200, "url(textures/ieks_siena_1.jpg)", 1],
  [0, 0, -330, 0, 0, 0, 1000, 200, "url(textures/ieks_siena_1.jpg)", 1],
  [-500, 0, -340, 0, 90, 0, 20, 200, "url(textures/ieks_siena_1.jpg)", 1],
  [500, 0, -340, 0, 90, 0, 20, 200, "url(textures/ieks_siena_1.jpg)", 1],

  //siena 5
  [500, 0, -710, 0, 0, 0, 1000, 200, "url(textures/ieks_siena_1.jpg)", 1],
  [500, 0, -690, 0, 0, 0, 1000, 200, "url(textures/ieks_siena_1.jpg)", 1],
  [0, 0, -700, 0, 90, 0, 20, 200, "url(textures/ieks_siena_1.jpg)", 1],

  //siena 5
  [-650, 0, -710, 0, 0, 0, 700, 200, "url(textures/ieks_siena_1.jpg)", 1],
  [-650, 0, -690, 0, 0, 0, 700, 200, "url(textures/ieks_siena_1.jpg)", 1],
  [-300, 0, -700, 0, 90, 0, 20, 200, "url(textures/ieks_siena_1.jpg)", 1],

  //siena 6
  [500, 0, 10, 0, 0, 0, 1000, 200, "url(textures/ieks_siena_1.jpg)", 1],
  [500, 0, -10, 0, 0, 0, 1000, 200, "url(textures/ieks_siena_1.jpg)", 1],
  [0, 0, 0, 0, 90, 0, 20, 200, "url(textures/ieks_siena_1.jpg)", 1],

  //siena 7
  [-650, 0, 10, 0, 0, 0, 700, 200, "url(textures/ieks_siena_1.jpg)", 1],
  [-650, 0, -10, 0, 0, 0, 700, 200, "url(textures/ieks_siena_1.jpg)", 1],
  [-300, 0, 0, 0, 90, 0, 20, 200, "url(textures/ieks_siena_1.jpg)", 1],

  //siena 8
  [0, -100, 0, 90, 0, 0, 2000, 2000, "url(textures/griesti.jpg)", 1], //Griesti
];

var objekti = [
  [-150, 50, 0, 0, 0, 0, 25, 25, "yellow", 1], //grīda
  //[0]x, [1]y, [2]z, [3]rx, [4]ry, [5]rz, [6]width, [7]height, [8]color, [9]opacity, [10]tekstūras mērogošana

  [-140, 50, 710, 0, 0, 0, 20, 20, "url/textures/object.jpg", 1],
  [-140, 50, 690, 0, 0, 0, 20, 20, "green", 1],
  [-150, 50, 700, 0, 90, 0, 20, 20, "blue", 1],
  [-130, 50, 700, 0, 90, 0, 20, 20, "blue", 1],

  [-600, 50, 340, 0, 0, 0, 25, 25, "green", 1],

  [600, 50, 340, 0, 0, 0, 25, 25, "white", 1],
];

var pressUp = 0;
var pressForward = 0;
var pressBack = 0;
var pressLeft = 0;
var pressRight = 0;
var mouseX = 0;
var mouseY = 0;
var dx = (dy = dz = 0);

var lock = false;
var g = 0.1;
var onGround = false;

var container = document.getElementById("container");

document.addEventListener("pointerlockchange", (event) => {
  lock = !lock;
});

container.onclick = function () {
  if (!lock) {
    container.requestPointerLock();
  }
};

document.addEventListener("keydown", (event) => {
  //reģistrējam taustiņu nospiešanu
  if (event.key == "w") pressForward = pawn.vz;
  if (event.key == "s") pressBack = pawn.vz;
  if (event.key == "a") pressLeft = pawn.vx;
  if (event.key == "d") pressRight = pawn.vx;
  if (event.keyCode == 32) pressUp = pawn.vy;
});

document.addEventListener("keyup", (event) => {
  //reģistrējam taustiņu atspiešanu
  if (event.key == "w") pressForward = 0;
  if (event.key == "s") pressBack = 0;
  if (event.key == "a") pressLeft = 0;
  if (event.key == "d") pressRight = 0;
  if (event.keyCode == 32) pressUp = 0;
});

//pēles kustības apstrāde

document.addEventListener("mousemove", (event) => {
  mouseX = event.movementX;
  mouseY = event.movementY;
});

// -------------------------

var pawn = new player(900, 0, 900, 0, 0);

var world = document.getElementById("world");

function update() {
  // mūsu 3D pasaules izmaiņas
  //let dx = pressLeft - pressRight;
  dx =
    -(pressLeft - pressRight) * Math.cos(pawn.ry * deg) +
    (pressForward - pressBack) * Math.sin(pawn.ry * deg);
  //let dz = pressForward - pressBack;
  dz =
    -(pressLeft - pressRight) * Math.sin(pawn.ry * deg) -
    (pressForward - pressBack) * Math.cos(pawn.ry * deg);
  dy += g;

  if (onGround) {
    dy = 0;
    if (pressUp) {
      dy = -pressUp;
      onGround = false;
    }
  }

  let drx = -mouseY;
  let dry = mouseX;

  mouseX = mouseY = 0;

  collision(map);

  pawn.x += dx;
  pawn.y += dy;
  pawn.z += dz;

  if (lock) {
    pawn.rx += drx;
    pawn.ry += dry;
    if (pawn.rx > 57) pawn.rx = 57; // augšā
    if (pawn.rx < -57) pawn.rx = -57; // lejā
  }

  world.style.transform = `translateZ(${600 - 0}px) rotateX(${
    pawn.rx
  }deg) rotateY(${
    pawn.ry
  }deg) translate3d(${-pawn.x}px, ${-pawn.y}px, ${-pawn.z}px)`;
}

function createWorld() {
  // 3D pasaules izveide
  for (let i = 0; i < map.length; i++) {
    let jaunaSiena = document.createElement("div");
    jaunaSiena.className = "square";
    jaunaSiena.id = `square${i}`;
    jaunaSiena.style.width = `${map[i][6]}px`;
    jaunaSiena.style.height = `${map[i][7]}px`;
    jaunaSiena.style.backgroundImage = map[i][8];
    jaunaSiena.style.opacity = map[i][9];
    jaunaSiena.style.transform = `translate3d(${
      600 + map[i][0] - map[i][6] / 2
    }px, ${400 + map[i][1] - map[i][7] / 2}px, ${map[i][2]}px) rotateX(${
      map[i][3]
    }deg) rotateY(${map[i][4]}deg) rotateZ(${map[i][5]}deg)`;
    jaunaSiena.style.backgroundSize = "200px";
    world.append(jaunaSiena);
  }
}

function collision(mapObj) {
  onGround = false;

  for (let i = 0; i < mapObj.length; i++) {
    //spēlētāja koordinātes katra taiststūra koordināšu sistēmā
    let x0 = pawn.x - mapObj[i][0];
    let y0 = pawn.y - mapObj[i][1];
    let z0 = pawn.z - mapObj[i][2];

    if (
      x0 ** 2 + y0 ** 2 + z0 ** 2 + dx ** 2 + dy ** 2 + dz ** 2 <
      mapObj[i][6] ** 2 + mapObj[i][7] ** 2
    ) {
      //Pārvietošanās
      let x1 = x0 + dx;
      let y1 = y0 + dy;
      let z1 = z0 + dz;

      //Jaunā punkta koodrinātes
      let point0 = coorTransform(
        x0,
        y0,
        z0,
        mapObj[i][3],
        mapObj[i][4],
        mapObj[i][5]
      );
      let point1 = coorTransform(
        x1,
        y1,
        z1,
        mapObj[i][3],
        mapObj[i][4],
        mapObj[i][5]
      );
      let normal = coorReTransform(
        0,
        0,
        1,
        mapObj[i][3],
        mapObj[i][4],
        mapObj[i][5]
      );
      // let point2 = new Array();

      if (
        Math.abs(point1[0]) < (mapObj[i][6] + 70) / 2 &&
        Math.abs(point1[1]) < (mapObj[i][7] + 70) / 2 &&
        Math.abs(point1[2]) < 50
      ) {
        point1[2] = Math.sign(point0[2]) * 50;
        let point2 = coorReTransform(
          point1[0],
          point1[1],
          point1[2],
          mapObj[i][3],
          mapObj[i][4],
          mapObj[i][5]
        );
        let point3 = coorReTransform(
          point1[0],
          point1[1],
          0,
          mapObj[i][3],
          mapObj[i][4],
          mapObj[i][5]
        );
        dx = point2[0] - x0;
        dy = point2[1] - y0;
        dz = point2[2] - z0;

        if (Math.abs(normal[1]) > 0.8) {
          if (point3[1] > point2[1]) {
            onGround = true;
          }
        } else {
          dy = y1 - y0;
        }
      }
    }
  }
}

function coorTransform(x0, y0, z0, rxc, ryc, rzc) {
  let x1 = x0;
  let y1 = y0 * Math.cos(rxc * deg) + z0 * Math.sin(rxc * deg);
  let z1 = -y0 * Math.sin(rxc * deg) + z0 * Math.cos(rxc * deg);

  let x2 = x1 * Math.cos(ryc * deg) - z1 * Math.sin(ryc * deg);
  let y2 = y1;
  let z2 = x1 * Math.sin(ryc * deg) + z1 * Math.cos(ryc * deg);

  let x3 = x2 * Math.cos(rzc * deg) + y2 * Math.sin(rzc * deg);
  let y3 = -x2 * Math.sin(rzc * deg) + y2 * Math.cos(rzc * deg);
  let z3 = z2;
  return [x3, y3, z3];
}

function coorReTransform(x3, y3, z3, rxc, ryc, rzc) {
  let x2 = x3 * Math.cos(rzc * deg) - y3 * Math.sin(rzc * deg);
  let y2 = x3 * Math.sin(rzc * deg) + y3 * Math.cos(rzc * deg);
  let z2 = z3;

  let x1 = x2 * Math.cos(ryc * deg) + z2 * Math.sin(ryc * deg);
  let y1 = y2;
  let z1 = -x2 * Math.sin(ryc * deg) + z2 * Math.cos(ryc * deg);

  let x0 = x1;
  let y0 = y1 * Math.cos(rxc * deg) - z1 * Math.sin(rxc * deg);
  let z0 = y1 * Math.sin(rxc * deg) + z1 * Math.cos(rxc * deg);

  return [x0, y0, z0];
}

function zimetObjektus(mansObj) {
  for (let i = 0; i < mansObj.length; i++) {
    let jaunsObjekts = document.createElement("div");
    jaunsObjekts.style.position = "absolute";
    jaunsObjekts.className = "objekts";
    jaunsObjekts.id = `objekts${i}`;
    jaunsObjekts.style.width = `${mansObj[i][6]}px`;
    jaunsObjekts.style.height = `${mansObj[i][7]}px`;
    jaunsObjekts.style.backgroundColor = mansObj[i][8];
    jaunsObjekts.style.transform = `translate3d(${
      600 + mansObj[i][0] - mansObj[i][6] / 2
    }px, ${400 + mansObj[i][1] - mansObj[i][7] / 2}px, ${
      mansObj[i][2]
    }px) rotateX(${mansObj[i][3]}deg) rotateY(${mansObj[i][4]}deg) rotateZ(${
      mansObj[i][5]
    }deg)`;
    jaunsObjekts.style.backgroundSize = "200px";
    world.append(jaunsObjekts);
  }
}

createWorld();
zimetObjektus(objekti);
timerGame = setInterval(update, 10); //atjaunināšanas ātrums ir 10, to var iestatīt citu...

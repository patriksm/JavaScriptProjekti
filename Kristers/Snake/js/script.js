const canvas = document.getElementById("spele");
const ctx = canvas.getContext("2d");

const sp_laukums = new Image();
sp_laukums.src = "img/ground.png";

const sp_mango = new Image();
sp_mango.src = "img/mango.png";

let rut_izm = 32; //rūtiņas izmērs spēles laukumā

let punkti = 0;

let ediens = {
  x: Math.floor(Math.random() * 17 + 1) * rut_izm, // x = no 1 līdz 17 ieskaitot
  y: Math.floor(Math.random() * 15 + 3) * rut_izm, // y = no 3 līdz 17 ieskaitot
};

let cuska = []; // definējām MASĪVU čūska, kurš ir tukšs
cuska[0] = {
  // definējām masīva čūska pirmo elementu, kuram kārta numurs ir 0!
  x: 6 * rut_izm,
  y: 7 * rut_izm,
};

document.addEventListener("keydown", virziens);

let virz;

function virziens(event) {
  //  A UN B (JavaScript sintakse: A && B)- izpildās gan A, gan B vienlaicīgi
  //  A VAI B (JavaScript sintakse: A || B) - izpildās vismaz viens no A, B nosacījumiem
  if (event.keyCode == 38 && virz != "down") virz = "up"; // != nozīmē NAV VIENĀDS
  if (event.keyCode == 40 && virz != "up") virz = "down";
  if (event.keyCode == 37 && virz != "right") virz = "left";
  if (event.keyCode == 39 && virz != "left") virz = "right";
  if (event.keyCode == 32) virz = "stop";
}

function vaiApedaSevi(galva, cuskas_masivs) {
  for (let i = 0; i < cuskas_masivs.length; i++) {
    if (galva.x == cuskas_masivs[i].x && galva.y == cuskas_masivs[i].y)
      clearInterval(spele);
  }
}

function zimetSpeli() {
  ctx.drawImage(sp_laukums, 0, 0); //spēles laukums
  ctx.drawImage(sp_mango, ediens.x, ediens.y); //ēdiens

  for (let i = 0; i < cuska.length; i++) {
    //ctx.fillStyle = "red"; //čūskas krāsa
    // a = (nosacījums) ? (ja izpildās) : (ja neizpildās)
    ctx.fillStyle = i == 0 ? "white" : "blue";
    ctx.fillRect(cuska[i].x, cuska[i].y, rut_izm, rut_izm); //čūska
  }

  ctx.fillStyle = "white";
  ctx.font = "40px Arial";
  ctx.fillText("Punkti: " + punkti, 1 * rut_izm, 1.7 * rut_izm);

  //čūskas galvas koordinātes
  let cuskaX = cuska[0].x;
  let cuskaY = cuska[0].y;

  if (cuskaX == ediens.x && cuskaY == ediens.y) {
    punkti++;
    ediens = {
      x: Math.floor(Math.random() * 17 + 1) * rut_izm, // x = no 1 līdz 17 ieskaitot
      y: Math.floor(Math.random() * 15 + 3) * rut_izm, // y = no 3 līdz 17 ieskaitot
    };
  } else {
    cuska.pop(); //noņemt pēdējo elementu no masīva!
  }

  if (
    cuskaX < 2 * rut_izm ||
    cuskaY < 4 * rut_izm ||
    cuskaX > rut_izm * 16 ||
    cuskaY > rut_izm * 16
  ) {
    clearInterval(spele);
  }

  if (virz == "right") cuskaX += rut_izm; // tas pats ka cuskaX = cuskaX + rut_izm
  if (virz == "left") cuskaX -= rut_izm;
  if (virz == "up") cuskaY -= rut_izm;
  if (virz == "down") cuskaY += rut_izm;

  let jaunaCuskasGalva = {
    x: cuskaX,
    y: cuskaY,
  };

  vaiApedaSevi(jaunaCuskasGalva, cuska);

  cuska.unshift(jaunaCuskasGalva); //pieliekām masīvam jauno elementu masīva sākumā
}

let spele = setInterval(zimetSpeli, 100);

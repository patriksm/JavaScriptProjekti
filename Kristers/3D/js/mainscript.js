var spelesElementi = [
  //0. - karte, 1. - objekti, 3. - teleporti
  [map, objekti, teleports, pistole, municija],
  [mapSilga, objektiSilga, teleportsSilga, pistoleSilga, municijaSS],
  [
    mapKristers,
    objektiKristers,
    teleportsKristers,
    pistoleKristers,
    municijaKristers,
  ],
  [mapExtra],
];

var punkti = 0;
var lode_skaits = 0;
var pawn = new player(90, 0, 90, 0, 0);
var pirmaLode = new player();
var manaLode = [];
var manaLodeData = [];

buttonStart.onclick = function () {
  menuStart.style.display = "none";
  canlock = true;
  world.innerHTML = "";
  izvObj = structuredClone(spelesElementi[level][1]);
  izvPistole = structuredClone(spelesElementi[level][3]);
  izvMunicija = structuredClone(spelesElementi[level][4]);
  createWorld(spelesElementi[level][0]);
  zimetObjektus(izvObj, `objekts`);
  zimetObjektus(spelesElementi[level][2], `teleports`);
  zimetObjektus(izvPistole, `pistole`);
  zimetObjektus(izvMunicija, `municija`);
  manaLode.push(zimetManuLodi(lode_skaits));
  manaLodeData.push(new player());
  lode_skaits++;
  timerGame = setInterval(update, 10);
};

buttonLimenis.onclick = function () {
  menuStart.style.display = "none";
  canlock = true;
  level = 2;
  izvObj = structuredClone(spelesElementi[level][1]);
  world.innerHTML = "";
  createWorld(spelesElementi[level][0]);
  zimetObjektus(izvObj, `objekts`);
  zimetObjektus(spelesElementi[level][2], `teleports`);
  timerGame = setInterval(update, 10);
};

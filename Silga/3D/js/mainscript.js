var spelesElementi = [
  //0. - karte, 1. - objekti, 2. - teleporti, 3. - pistole, 4. - municija
  [map, objekti, teleports, pistole, municija],
  [mapSilga, objektiSilga, teleportsSilga, pistoleSilga, municijaSilga],
  [mapKristers, objektiKristers, teleportsKristers, pistoleKristers, municijaKristers],
  [mapSS, objektiSS, teleportsSS, pistoleSS, municijaSS]
];

var punkti = 0;
var lode_skaits = 0;
var pawn = new player(90, 0, 90, 0, 0);
var pirmaLode = new player();
var manaLode = [];
var manaLodeData = [];

buttonStart.onclick = function(){
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
  timerGame = setInterval(update, 10);
}

buttonLimenis.onclick = function(){
  menuStart.style.display = "none";
  canlock = true;
  level = 2;
  world.innerHTML = "";
  izvObj = structuredClone(spelesElementi[level][1]);
  izvPistole = structuredClone(spelesElementi[level][3]);
  izvMunicija = structuredClone(spelesElementi[level][4]);
  createWorld(spelesElementi[level][0]);
  zimetObjektus(izvObj, `objekts`);
  zimetObjektus(spelesElementi[level][2], `teleports`);
  zimetObjektus(izvPistole, `pistole`);
  zimetObjektus(izvMunicija, `municija`);
  timerGame = setInterval(update, 10);
}
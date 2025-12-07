function interactPistole(obj) {
  for (let i = 0; i < obj.length; i++) {
    let r =
      (pawn.x - obj[i][0]) ** 2 +
      (pawn.y - obj[i][1]) ** 2 +
      (pawn.z - obj[i][2]) ** 2;
    if (r < obj[i][6] ** 2 + obj[i][7] ** 2) {
      panemsanasSkana.play();
      canShoot = true;
      irPistole = true;
      lode_daudzums = pilna_municija;
      myh3.textContent = `Pistole paņemta`;

      mansTeksts.appendChild(myh3);

      obj[i][0] = 100000;
      obj[i][1] = 100000;
      obj[i][2] = 100000;
    }
  }
}

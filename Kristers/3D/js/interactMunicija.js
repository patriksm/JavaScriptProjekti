function interactMunicija(obj) {
    for (let i = 0; i < obj.length; i++) {
        let r = (pawn.x - obj[i][0]) ** 2 + (pawn.y - obj[i][1]) ** 2 + (pawn.z - obj[i][2]) ** 2;
        if (r < (obj[i][6]) ** 2 + (obj[i][7]) ** 2) {
            panemsanasSkana.play();
            lode_daudzums = pilna_municija;
            canShoot = true;
            

            myh3.textContent = `Lodes paņemtas`;
            mansTeksts.appendChild(myh3);

        }
    }
}
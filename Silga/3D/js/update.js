var dx = dy = dz = 0;

function update() { // mūsu 3D pasaules izmaiņas
    dx = -(pressLeft - pressRight) * Math.cos(pawn.ry * deg) + (pressForward - pressBack) * Math.sin(pawn.ry * deg);
    dz = -(pressLeft - pressRight) * Math.sin(pawn.ry * deg) - (pressForward - pressBack) * Math.cos(pawn.ry * deg);
    dy += g;
    if (onGround) {
        dy = 0;
        if (pressUp) {
            dy = -pressUp;
            onGround = false;
        }
    }

    let drx = -mouseY / 4;
    let dry = mouseX / 4;

    mouseX = mouseY = 0;

    collision(spelesElementi[level][0], pawn);

    // collision(spelesElementi[level][0], pirmaLode, "lode")

    pawn.x += dx;
    pawn.y += dy;
    pawn.z += dz;

    if (lock) {
        pawn.rx += drx;
        pawn.ry += dry;
        if (pawn.rx > 57) pawn.rx = 57;   // augšā
        if (pawn.rx < -57) pawn.rx = -57; // lejā
    }

    document.onclick = function () {

        myh3.textContent = "Nevari šaut";
        mansTeksts.appendChild(myh3);

        if (lock && canShoot && irPistole) {
            manaLode.push(zimetManuLodi(lode_skaits));
            manaLodeData.push(new player(pawn.x, pawn.y, pawn.z, pawn.rx, pawn.ry + 45, pawn.rz, 5, 5));
            lode_skaits++;
            lode_daudzums--;
            myh3.textContent = `Lodes: ${lode_daudzums} no ${pilna_municija}`;
            if (lode_daudzums < 1) {
                canShoot = false;
                lode_daudzums = 0;
                myh3.textContent = `Lodes beigušās`;
            }

            mansTeksts.appendChild(myh3);

        }
    }

    for (let sk = 0; sk < manaLode.length; sk++) {
        // if
        ldx = -manaLodeData[sk].vx * Math.cos(manaLodeData[sk].ry * deg) + (manaLodeData[sk].vy) * Math.sin(manaLodeData[sk].ry * deg);

        ldz = -(manaLodeData[sk].vx) * Math.sin(manaLodeData[sk].ry * deg) - (manaLodeData[sk].vy) * Math.cos(manaLodeData[sk].ry * deg);

        manaLodeData[sk].x += ldx;
        manaLodeData[sk].z += ldz;

        manaLode[sk].style.transform = `translate3d(${600 + manaLodeData[sk].x - Number(window.getComputedStyle(manaLode[sk]).getPropertyValue(`width`).slice(0, -2)) / 2}px, ${400 + manaLodeData[sk].y - Number(window.getComputedStyle(manaLode[sk]).getPropertyValue(`height`).slice(0, -2)) / 2}px, ${manaLodeData[sk].z}px) rotateX(${manaLodeData[sk].rx}deg) rotateY(${manaLodeData[sk].ry}deg) rotateZ(${0}deg)`;

        interactLode(izvObj, manaLodeData[sk], manaLode[sk], sk);

        manaLodeData[sk].timer--;
        if (manaLodeData[sk].timer < 0) {
            manaLode[sk].remove();
            manaLode.splice(sk, 1);
            manaLodeData.splice(sk, 1);
        } else if (manaLodeData[sk].timer < 5) {
            manaLode[sk].style.width = `200px`;
            manaLode[sk].style.height = `200px`;
        }
    }

    world.style.transform = `translateZ(${600 - 0}px) rotateX(${pawn.rx}deg) rotateY(${pawn.ry}deg) translate3d(${-pawn.x}px, ${-pawn.y}px, ${-pawn.z}px)`;

    rotate(izvObj, 0.7, `objekts`);
    rotate(izvPistole, 1.7, `pistole`);
    rotate(izvMunicija, 1, `municija`);
    interact(izvObj);
    interactPistole(izvPistole);
    interactMunicija(izvMunicija);
    interactTeleport(spelesElementi[level][2], izvObj);
}
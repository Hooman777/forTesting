const sailBoat = function (size) {
    //Sail criteria ************************************
    const sailDim = Math.round (size / 8 * 5);
    const miniSailDim = Math.round (sailDim / 2) - 2;
    const sailBase = function (level) {
        if (level === 1) {
            return 1;
        }
        if (level === 2) {
            return sailBase (level - 1) + 1;
        }
        return sailBase (level - 1) + 2;
    }
    //**************************************************

    //hull criteria ************************************
    const hullDim = size - sailDim;
    const hullBase = function (level) {
        if (level === 1) {
            return 3 * (sailBase (sailDim));
        }
        if (level >= 2) {
            const outPut = 3 * (sailBase(sailDim)) - Math.pow (2, (level - 0));
            if (outPut < 0) {
                return 0;
            }
            return outPut;
        }
    }

    //Space constructor criteria ************************
    const spacer = function (length) {
        if (length === 1) {
            return ' ';
        }
        return ' ' + spacer (length - 1);
    }
    // **************************************************

    //Star constructor criteria ************************
    const starer = function (length) {
        if (length === 0) {
            return '';
        }
        return '*' + starer (length - 1);
    }
    // **************************************************

    //Drawing the sails **********************************
    const sailDrawer = function (level) {
        if (level > sailDim) {
            return;
        }
        if (level <= miniSailDim) {
            console.log (spacer (sailBase (sailDim)) + starer (sailBase (level)));
            sailDrawer (level + 1);
        }
        else {
            console.log (spacer (sailBase (sailDim) - sailBase (level - miniSailDim) - 1) + starer (sailBase (level - miniSailDim)) + spacer (1) + starer (sailBase (level)));
            sailDrawer (level + 1);
        }
    }
    sailDrawer (1);
    // ***************************************************

    //Drawing the hull ***********************************
    const hullDrawer = function (level) {
        if (level > hullDim) {
            return;
        }
        if (level === 1) {
            console.log (starer (hullBase (level)));
            hullDrawer (level + 1);
        } else {
        console.log (spacer (Math.pow (2, (level - 1))) + starer (hullBase (level)));
        hullDrawer (level + 1);
        }
    }
    hullDrawer (1);
}
sailBoat (15); //7-41

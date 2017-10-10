const sailBoat = function (size) {
    //Sail criteria ************************************
    const sailDim = Math.round (size / 8 * 5);
    const sailBase = function (level) {
        if (level === 1) {
            return '*';
        }
        if (level === 2) {
            return sailBase (level - 1) + '*';
        }
        return sailBase (level - 1) + '**';
    }
    //**************************************************

    //hull criteria ************************************
    const hullDim = size - sailDim;
    const hullBase = function (level) {
        if (level === 1) {
            return sailBase (sailDim) + sailBase (sailDim) + sailBase (sailDim);
        }
        if (level >= 2) {
            const baseLength = (sailBase(sailDim).length) * 3 - Math.pow (2, (level - 0));
            const baseMaker = function (iterator) {
                if (iterator === 1) {
                    return '*';
                }
                return baseMaker (iterator - 1) + '*';
            }
            return baseMaker (baseLength);
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

    //Drawing the sail **********************************
    const sailDrawer = function (level) {
        if (level > sailDim) {
            return;
        }
        console.log ( spacer (sailBase (sailDim).length) + sailBase (level));
        sailDrawer (level + 1);
    }
    sailDrawer (1);
    // ***************************************************

    //Drawing the hull ***********************************
    const hullDrawer = function (level) {
        if (level > hullDim) {
            return;
        }
        if (level === 1) {
            console.log(hullBase (level));
            hullDrawer (level + 1);
        } else {
        console.log (spacer (Math.pow (2, (level - 1))) + hullBase (level));
        hullDrawer (level + 1);
        }
    }
    hullDrawer (1);
}
sailBoat (15);

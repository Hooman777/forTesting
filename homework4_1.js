
const triangleStars = function (height) {
    if (height <1) {
        return;
    }
	const baseMaker = function (height) {

		if (height <= 1) {
			return 1;
		}
		return 2 + baseMaker (height - 1);

	}
    const base = baseMaker (height);
    const starDrawer = function (counter) {
        if (counter <=1) {
            return '*';
        }
        return '*' + starDrawer (counter - 1);
    }
    console.log (starDrawer (base));

    triangleStars (height - 1);
}
triangleStars (10);

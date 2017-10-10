const triangleStars = function (height) {           //main function
    const triangleDrawer = function (maxHeight , height) {          //main recursive function which called by main function
        if (height <1) {
        return;
        }
	    const baseMaker = function (height) {          //a recursive function which calculate number of stars by given height
            if (height <= 1) {
			    return 1;
		    }
		    return 2 + baseMaker (height - 1);
        }
        const base = baseMaker (height);
        const starDrawer = function (counter) {         //a recursive function which produce each row of triangle
            if (counter <=1) {
                return '*';
            }
            return '*' + starDrawer (counter - 1);
            }
        const spaceDrawer = function (height) {         //a recursive function which produce proper space before string of stars for concatenation
            if (height < 1) {
                return '';
            }
        return ' ' + spaceDrawer (height -1);
        }
        console.log (spaceDrawer (maxHeight - height) + starDrawer (base));         //concatenation of space string with star string
        triangleDrawer (maxHeight , height - 1);            //recalling recursive function to draw next row
    }
    triangleDrawer (height , height);           //recalling main recursive function by main function
}
triangleStars (10);         //recalling main function 


const checkerBoard = function (size) {
    const rowMaker = function (iterator) {
        if (iterator === 0) {
            return '';
        }
        return '* ' + rowMaker (iterator - 1);
    }
    const boardMaker = function (row) {
        if (row < 1) {
            return;
        }
        if (!(row % 2)) {
            console.log (rowMaker(size));
        }
        if (!!(row % 2)) {
            console.log (' ' + rowMaker(size));
        }
        return boardMaker (row - 1);
    }
    boardMaker (size);
}
checkerBoard (10);

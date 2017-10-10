const revString = function (string) {
    const counter = string.length;
    const revComposer = function (iterator) {
        if (iterator === 0) {
            return string[0];
        }
        return string [iterator] + revComposer (iterator - 1);
    }
    console.log(revComposer (counter - 1));
}

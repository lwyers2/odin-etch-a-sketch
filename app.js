let grid = document.querySelector('.grid');

let gridSize = 16;

createGrid(gridSize);

let submit = document.querySelector('#submit');

let currentSize = document.querySelector('#current-size');

currentSize.textContent = `Current Grid Size: ${gridSize}x${gridSize}`;

submit.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Submitted");

    gridSize = document.querySelector('#size').value;

    if (gridSize > 100 || gridSize <= 0) {
        alert("Grid size not in range 1-100, default being set(16x16)");
        gridSize = 16;
    }


    createGrid(gridSize);
    currentSize.textContent = `Current Grid Size: ${gridSize}x${gridSize}`;
});










function createGrid(size) {
    grid.innerHTML = "";

    for (let i = 0; i < size; i++) {
        let row = document.createElement("div");
        row.className = "row";
        for (let i = 0; i < size; i++) {
            let col = document.createElement("div");
            col.id = "box";
            row.appendChild(col);
            grid.appendChild(row);
        }
        grid.appendChild(row);
    }

}

let black = document.querySelector('#black');
let erase = document.querySelector('#erase');
let random = document.querySelector('#random');
let brighten = document.querySelector('#brighten');
let darken = document.querySelector('#darken');


let box = document.querySelectorAll('#box');











let color = "";


for (let i = 0; i < box.length; i++) {

    box[i].addEventListener("mouseover", () => {

        let currentColor = box[i].style.backgroundColor;



        if (color == "black") {
            box[i].style.backgroundColor = "rgb(0,0,0)";
        } else if (color == "erase") {
            box[i].style.backgroundColor = "rgb(256,256,256)";
        } else if (color == "random") {
            box[i].style.backgroundColor = `rgb(${getRandom()},${getRandom()},${getRandom()})`;
        } else if (color == "brighten") {
            box[i].style.backgroundColor = getDarkerLighter(currentColor, "light");
        } else if (color == "darken") {
            box[i].style.backgroundColor = getDarkerLighter(currentColor, "dark");
        }


        function getDarkerLighter(string, darkOrLight) {




            let rgb1, rgb2, rgb3;

            if (darkOrLight === "dark") {


                rgb1 = (parseInt(getRGBValue(string, 0))) - 10;
                rgb2 = (parseInt(getRGBValue(string, 1))) - 10;
                rgb3 = (parseInt(getRGBValue(string, 2))) - 10;



                if (rgb1 < 0) {
                    rgb1 = 0;
                }
                if (rgb2 < 0) {
                    rgb2 = 0;
                }
                if (rgb3 < 0) {
                    rgb3 = 0;
                }

            } else {

                if (darkOrLight === "light") {

                    rgb1 = (parseInt(getRGBValue(string, 0))) + 10;
                    rgb2 = (parseInt(getRGBValue(string, 1))) + 10;
                    rgb3 = (parseInt(getRGBValue(string, 2))) + 10;



                    if (rgb1 >= 255) {
                        rgb1 = 255;
                    }
                    if (rgb2 >= 255) {
                        rgb2 = 255;
                    }
                    if (rgb3 >= 255) {
                        rgb3 = 255;
                    }

                }
            }

            return `rgb(${rgb1},${rgb2},${rgb3})`;
        }

        function getRGBValue(rgbValue, position) {

            for (let i = 0; i < 4; i++) {
                rgbValue = rgbValue.removeCharAt(1);
            }

            rgbValue = rgbValue.removeCharAt(rgbValue.length);
            let colorArray = rgbValue.split(",");


            if (colorArray[position].charAt(0) === '0') {
                colorArray[position].removeCharAt(1);
                return colorArray[position];
            } else


                return colorArray[position];
        }
    });

}




black.addEventListener("click", (e) => {


    color = "black";



});

erase.addEventListener("click", (e) => {

    color = "erase";
});

random.addEventListener("click", (e) => {



    color = "random"

});

brighten.addEventListener("click", (e) => {

    color = "brighten";
});

darken.addEventListener("click", (e) => {

    color = "darken";
});







// get random between 00 and 256
function getRandom() {
    return getRandomInt(0, 256);
}


/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



// let css = '';
// let head = document.head;
// let style = document.createElement('style');

// head.appendChild(style);


// if (style.styleSheet) {
//     // This is required for IE8 and below.
//     style.styleSheet.cssText = css;
// } else {
//     style.appendChild(document.createTextNode(css));
// }

String.prototype.removeCharAt = function (i) {
    var tmp = this.split(''); // convert to an array
    tmp.splice(i - 1, 1); // remove 1 element from the array (adjusting for non-zero-indexed counts)
    return tmp.join(''); // reconstruct the string
}






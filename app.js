






makeGrid(16);


let reset = document.querySelector(".reset");





function makeGrid(number) {

    for (let i = 1; i < (number + 1); i++) {

        let divC = document.createElement("div");
        divC.className = "col";
        // let divCText = document.createTextNode(`Column${i}`);
        // divC.appendChild(divCText);
        let cont = document.querySelector(".container");
        cont.appendChild(divC);

        // Nested for loop
        for (let j = 1; j < (number + 1); j++) {
            let divR = document.createElement("div");
            divR.className = "row";
            // let divRText = document.createTextNode(`Row${j}`);
            // divR.appendChild(divRText);

            divC.appendChild(divR);




        }


    }
}

function removeGrid() {
    let grid = document.querySelector(".container");

    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    }

}

//buttons

blackBtn = document.querySelector(".blackout");
blackBtn.addEventListener("click", () => {

    let gridBoxes = document.querySelectorAll(".row");

    for (let i = 0; i < gridBoxes.length; i++) {
        let box = gridBoxes[i];
        box.addEventListener("mouseover", () => {
            gridBoxes[i].style.backgroundColor = "black";

        });

    }

});

randomColor = document.querySelector(".random-color");
randomColor.addEventListener("click", () => {

    let gridBoxes = document.querySelectorAll(".row");

    for (let i = 0; i < gridBoxes.length; i++) {
        let box = gridBoxes[i];
        box.addEventListener("mouseover", () => {
            gridBoxes[i].style.backgroundColor = (randomRGB());
        });

    }

});

let darken = document.querySelector(".darken");
darken.addEventListener("click", () => {

    let gridBoxes = document.querySelectorAll(".row");

    for (let i = 0; i < gridBoxes.length; i++) {
        let box = gridBoxes[i];
        if ((gridBoxes[i].style.backgroundColor) !== "" || (gridBoxes[i].style.backgroundColor) == "black") {

            let color = getDarkerLighter(gridBoxes[i].style.backgroundColor, "dark");




            box.addEventListener("mouseover", () => {

                gridBoxes[i].style.backgroundColor = getDarkerLighter(color, "dark");

            });

        } else {

            box.addEventListener("mouseover", () => {

                gridBoxes[i].style.backgroundColor = "";

            });


        }
    }

});

let lighten = document.querySelector(".brighten");
lighten.addEventListener("click", () => {

    let gridBoxes = document.querySelectorAll(".row");

    for (let i = 0; i < gridBoxes.length; i++) {
        let box = gridBoxes[i];
        if ((gridBoxes[i].style.backgroundColor) !== "") {

            let color = getDarkerLighter(gridBoxes[i].style.backgroundColor, "light");




            box.addEventListener("mouseover", () => {

                gridBoxes[i].style.backgroundColor = getDarkerLighter(color, "light");

            });

        } else {

            box.addEventListener("mouseover", () => {

                gridBoxes[i].style.backgroundColor = "";

            });


            gridBoxes[i].className = "row";
        }


    }

});

let erase = document.querySelector(".erase");
erase.addEventListener("click", () => {

    let gridBoxes = document.querySelectorAll(".row");

    for (let i = 0; i < gridBoxes.length; i++) {
        let box = gridBoxes[i];
        box.addEventListener("mouseover", () => {
            gridBoxes[i].style.backgroundColor = "";
        });

    }

});







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

String.prototype.removeCharAt = function (i) {
    var tmp = this.split(''); // convert to an array
    tmp.splice(i - 1, 1); // remove 1 element from the array (adjusting for non-zero-indexed counts)
    return tmp.join(''); // reconstruct the string
}


function randomRGB() {

    return `rgb(${getRandomInt(0, 255)},${getRandomInt(0, 255)},${getRandomInt(0, 255)})`
};

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

reset.addEventListener("click", () => {


    removeGrid();




    let number = parseInt(prompt("Enter number between 0-100. If invalid default set at 16x16", 16));
    if (number > 0 && number <= 100) {


        makeGrid(number);
    } else {
        alert(`Invalid choice of number passed("${number}" ), making grid 16x16`);
        makeGrid(16);
    }


});





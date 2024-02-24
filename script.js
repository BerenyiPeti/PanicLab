//16 szörny, 3 szellőző, 3 start, 3 váltó
//var redMnstr = 8
//var blueMnstr = 9
var amoeba_red_dotted = 3
var amoeba_red_stripped = 3
var amoeba_purple_dotted = 3
var amoeba_purple_stripped = 3

var slug_red_dotted = 2
var slug_red_stripped = 2
var slug_purple_dotted = 2
var slug_purple_stripped = 2

var vnt = 3
var str = 1

var chng = 0
var chngAnimal = 1
var chngColor = 1
var chngPattern = 1


var tiles = []
var monsters = ["amoeba_purple_dotted", "amoeba_purple_stripped", "amoeba_red_dotted", "amoeba_red_stripped",
    "slug_purple_dotted", "slug_purple_stripped", "slug_red_dotted", "slug_red_stripped"]

let currentMonster
let tileToFind

window.addEventListener("load", init)

function init() {
    fillList()
    generateTiles()
}

function fillList() {
    /* for (let index = 0; index < redMnstr; index++) {
        tiles.push("redMnstr")

    }
    for (let index = 0; index < blueMnstr; index++) {
        tiles.push("blueMnstr")

    } */

    //amoeba
    for (let index = 0; index < amoeba_purple_dotted; index++) {
        tiles.push("amoeba_purple_dotted")

    }

    for (let index = 0; index < amoeba_purple_stripped; index++) {
        tiles.push("amoeba_purple_stripped")

    }

    for (let index = 0; index < amoeba_red_dotted; index++) {
        tiles.push("amoeba_red_dotted")

    }

    for (let index = 0; index < amoeba_red_stripped; index++) {
        tiles.push("amoeba_red_stripped")

    }

    //slug

    for (let index = 0; index < slug_purple_dotted; index++) {
        tiles.push("slug_purple_dotted")

    }

    for (let index = 0; index < slug_purple_stripped; index++) {
        tiles.push("slug_purple_stripped")

    }

    for (let index = 0; index < slug_red_dotted; index++) {
        tiles.push("slug_red_dotted")

    }

    for (let index = 0; index < slug_red_stripped; index++) {
        tiles.push("slug_red_stripped")

    }

    for (let index = 0; index < vnt; index++) {
        tiles.push("vnt")

    }
    for (let index = 0; index < str; index++) {
        tiles.push("str")

    }
    for (let index = 0; index < chng; index++) {
        tiles.push("chng")

    }

    for (var i = tiles.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = tiles[i];
        tiles[i] = tiles[j];
        tiles[j] = temp;
    }

    //tiles.push("str")
    console.log(tiles);
}

function generateTiles() {

    for (let index = 0; index < 24; index++) {
        if ((tiles[index] != "chng") && (tiles[index] != "vnt") && (tiles[index] != "str")) {
            document.getElementById(index).classList.add(`monster`)
        }
        document.getElementById(index).classList.add(`${tiles[index]}`)
    }
    generateEvents()
}

function generateEvents() {
    for (let index = 0; index < 24; index++) {
        let tl = document.getElementById(index)
        if (tl.classList.contains("monster")) {
            tl.addEventListener("click", (event) => {
                if (event.target.id == tileToFind) {
                    document.getElementById("score").innerHTML = "Talált!"
                } else {
                    document.getElementById("score").innerHTML = "Nem talált!"
                }
                //clickTile(event.target.id)
            })
        }
    }
}

function clickTile(id) {
    //console.log(id);
    if (condition) {

    }
    document.getElementById("score").innerHTML = id

}

function gameLogic() {
    let currentTile = ""
    let currentIndex = 0
    let monsterFound = false
    let inVent = false


    //megkeresi a startot
    for (let index = 0; index < tiles.length; index++) {
        if (tiles[index] == "str") {
            currentIndex = index
        }
    }

    console.log("kezdő mező: ", currentIndex);

    while (!monsterFound) {
        if (currentIndex >= tiles.length) {
            currentIndex = 0
            
        }

        currentTile = tiles[currentIndex]

        if (currentTile == "vnt") {
            if (inVent == false) {
                inVent = true
            } else {
                inVent = false
            }
        }

        if (!inVent) {
            if (currentTile == currentMonster) {
                monsterFound = true
                tileToFind = currentIndex
            }
            else if (currentTile == "chng") {
                if (currentMonster == "redMnstr") {
                    currentMonster = "blueMnstr"
                } else {
                    currentMonster = "redMnstr"
                }
            }
        }

        currentIndex++
    }

    console.log("keresendő tile: ", tileToFind);
}

function rollMonster() {
    /* if (Math.random() < 0.5) {
        currentMonster = "redMnstr"
    } else {
        currentMonster = "blueMnstr"
    } */

    currentMonster = monsters[Math.floor(Math.random() * monsters.length)]
    console.log(currentMonster);

    document.getElementById("rolledMonster").innerHTML = currentMonster
    console.log("choosed monster:", currentMonster);
    gameLogic()
}
//16 szörny, 3 szellőző, 3 start, 3 váltó
//var redMnstr = 8
//var blueMnstr = 9
var amoeba_red_dotted = 3
var amoeba_red_stripped = 2
var amoeba_purple_dotted = 2
var amoeba_purple_stripped = 2

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

var monstersNew = [
    {
        type: "monster",
        name: "amoeba_purple_dotted",
        animal: "amoeba",
        color: "purple",
        pattern: "dotted"
    },
    {
        type: "monster",
        name: "amoeba_purple_stripped",
        animal: "amoeba",
        color: "purple",
        pattern: "stripped"
    },
    {
        type: "monster",
        name: "amoeba_red_dotted",
        animal: "amoeba",
        color: "purple",
        pattern: "dotted"
    },
    {
        type: "monster",
        name: "amoeba_red_stripped",
        animal: "amoeba",
        color: "purple",
        pattern: "stripped"
    },
    {
        type: "monster",
        name: "slug_purple_dotted",
        animal: "slug",
        color: "purple",
        pattern: "dotted"
    },
    {
        type: "monster",
        name: "slug_purple_stripped",
        animal: "slug",
        color: "purple",
        pattern: "stripped"
    },
    {
        type: "monster",
        name: "slug_red_dotted",
        animal: "slug",
        color: "purple",
        pattern: "dotted"
    },
    {
        type: "monster",
        name: "slug_red_stripped",
        animal: "slug",
        color: "purple",
        pattern: "stripped"
    },
    {
        type: "action",
        name: "str",
        animal: "-",
        color: "-",
        pattern: "-"
    },
    {
        type: "action",
        name: "vnt",
        animal: "-",
        color: "-",
        pattern: "-"
    },
    {
        type: "action",
        name: "chng_animal",
        animal: "-",
        color: "-",
        pattern: "-"
    },
    {
        type: "action",
        name: "chng_color",
        animal: "-",
        color: "-",
        pattern: "-"
    },
    {
        type: "action",
        name: "chng_pattern",
        animal: "-",
        color: "-",
        pattern: "-"
    },
    
]

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
        tiles.push(monstersNew[0])

    }

    for (let index = 0; index < amoeba_purple_stripped; index++) {
        tiles.push(monstersNew[1])
    }

    for (let index = 0; index < amoeba_red_dotted; index++) {
        tiles.push(monstersNew[2])

    }

    for (let index = 0; index < amoeba_red_stripped; index++) {
        tiles.push(monstersNew[3])

    }

    //slug

    for (let index = 0; index < slug_purple_dotted; index++) {
        tiles.push(monstersNew[4])

    }

    for (let index = 0; index < slug_purple_stripped; index++) {
        tiles.push(monstersNew[5])

    }

    for (let index = 0; index < slug_red_dotted; index++) {
        tiles.push(monstersNew[6])

    }

    for (let index = 0; index < slug_red_stripped; index++) {
        tiles.push(monstersNew[7])

    }

    for (let index = 0; index < str; index++) {
        tiles.push(monstersNew[8])

    }
    
    for (let index = 0; index < vnt; index++) {
        tiles.push(monstersNew[9])

    }

    //change
    tiles.push(monstersNew[10])
    tiles.push(monstersNew[11])
    tiles.push(monstersNew[12])

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
        /* if ((tiles[index] != "chng") && (tiles[index] != "vnt") && (tiles[index] != "str")) {
            document.getElementById(index).classList.add(`monster`)
        } */
        
        document.getElementById(index).classList.add(`${tiles[index].name}`)
        document.getElementById(index).classList.add(`${tiles[index].animal}`)
        document.getElementById(index).classList.add(`${tiles[index].color}`)
        document.getElementById(index).classList.add(`${tiles[index].pattern}`)
    }
    generateEvents()
}

function generateEvents() {
    for (let index = 0; index < 24; index++) {
        let tl = document.getElementById(index)
        /* if (tl.classList.contains("monster")) {
        } */
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



function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

document.getElementById("button1").addEventListener("click", stampareGriglia1)
function stampareGriglia1() {
    let container = document.getElementById("container")
    container.innerHTML = ""
    let div = document.createElement("div")
    div.setAttribute('class', 'div-100');
    container.append(div)
    let createCols = creaColonne()
    //console.log(creaColonne)
}
function creaColonne() {
    let cols = ""
    let numeri = []
    console.log(numeri)
    let div = document.getElementsByClassName("div-100");
    for (let i = 1; i <= 100; i++) {
        let box = document.createElement("div")
        box.setAttribute('class', 'box')
        box.innerHTML = `${i}`
        div[0].append(box)
        numeri.push(i)
        const numeriSingoli = numeri.slice('')
        box.addEventListener("click", changeBg)
    }
    return numeri
}


document.getElementById("button2").addEventListener("click", stampareGriglia2)
function stampareGriglia2() {
    let container = document.getElementById("container")
    container.innerHTML = ""
    let div = document.createElement("div")
    div.setAttribute('class', 'div-81');
    container.append(div)
    let createCols = creaColonne2()
}
function creaColonne2() {
    let cols = ""
    let numeri = []
    let div = document.getElementsByClassName("div-81");
    for (let i = 1; i <= 81; i++) {
        let box = document.createElement("div")
        box.setAttribute('class', 'box')
        box.innerHTML = `${i}`
        div[0].append(box)
        numeri.push(i)
        const numeriSingoli = numeri.slice('')
        box.addEventListener("click", changeBg)

    }
    return numeri
}


document.getElementById("button3").addEventListener("click", stampareGriglia3)
function stampareGriglia3() {
    let container = document.getElementById("container")
    container.innerHTML = ""
    let div = document.createElement("div")
    div.setAttribute('class', 'div-49');
    container.append(div);
    let createCols = creaColonne3()
    generateBomb(numeri)
}
function creaColonne3() {
    let cols = ""
    let numeri = []
    let div = document.getElementsByClassName("div-49");
    for (let i = 1; i <= 49; i++) {
        let box = document.createElement("div")
        box.setAttribute('class', 'box')
        box.innerHTML = `${i}`
        div[0].append(box)
        numeri.push(i)
        const numeriSingoli = numeri.slice('')
        box.addEventListener("click", changeBg)
        generateBomb(numeri)
    }
    return numeri
}


function changeBg() {
    this.classList.add("blue")
}

const bombNumber = 16
let bombs = []
let maxAttempts

function generateBomb(numeri) {
    maxAttempts = numeri - bombNumber
    while (bombs.length < bombNumber) {
        let createdBombs = getRandomInt(1, numeri)
        if (!bombs.includes(createdBombs)) {
            bombs.push(createdBombs)
        }
    }

}

let factionList = []
let pool = []
let activeArray

const expanCore = ["Aliens", "Dinosaurs", "Ninjas", "Pirates", "Robots", "Tricksters", "Wizards", "Zombies"]
const expanPretty = ["Fairies", "Kitty Cats", "Mythic Horses", "Princesses"]

const expanListEl = document.querySelector("#js-expansions__list-el")
const expanCoreEl = document.querySelector("#js-expan-core-el")
const expanPrettyEl = document.querySelector("#js-expan-pretty-el")
const btnEl = document.querySelector("#js-randomize-btn")
const playerCt2El =  document.querySelector("#js-player-ct-two")
const playerCt3El =  document.querySelector("#js-player-ct-three")
const playerCt4El =  document.querySelector("#js-player-ct-four")
const player1El = document.querySelector("#js-factions__player1-el")
const player2El = document.querySelector("#js-factions__player2-el")
const player3El = document.querySelector("#js-factions__player3-el")
const player4El = document.querySelector("#js-factions__player4-el")
const alertEl = document.querySelector("#js-alert")

expanCoreEl.addEventListener("change", function() {
    activeArray = expanCore
    if (this.checked) {
        addExpan()
    } else {
        removeExpan()
    }
})

expanPrettyEl.addEventListener("change", function() {
    activeArray = expanPretty
    if (this.checked) {
        addExpan()
    } else {
        removeExpan()
    }
})

btnEl.addEventListener("click", function () {
    setPool()
    let htmlPlayer1 = `<li>${getFaction()}</li><li>${getFaction()}</li>`
    let htmlPlayer2 = `<li>${getFaction()}</li><li>${getFaction()}</li>`
    let htmlPlayer3 = `<li>${getFaction()}</li><li>${getFaction()}</li>`
    let htmlPlayer4 = `<li>${getFaction()}</li><li>${getFaction()}</li>`
    let htmlReset = ``
    player1El.innerHTML = htmlReset
    player2El.innerHTML = htmlReset
    player3El.innerHTML = htmlReset
    player4El.innerHTML = htmlReset
    alertEl.textContent = ""
    if (playerCt2El.checked) {
        player1El.innerHTML = htmlPlayer1
        player2El.innerHTML = htmlPlayer2
        player3El.innerHTML = htmlReset
        player4El.innerHTML = htmlReset
    } else if (playerCt3El.checked) {
        if (factionList.length >= 6) {
            player1El.innerHTML = htmlPlayer1
            player2El.innerHTML = htmlPlayer2
            player3El.innerHTML = htmlPlayer3
            player4El.innerHTML = htmlReset
        } else {
        alertEl.textContent = "Not enough factions. Please select another expansion"
        }
    } else if (playerCt4El.checked) {
        if (factionList.length >= 8) {
            player1El.innerHTML = htmlPlayer1
            player2El.innerHTML = htmlPlayer2
            player3El.innerHTML = htmlPlayer3
            player4El.innerHTML = htmlPlayer4
        } else {
        alertEl.textContent = "Not enough factions. Please select another expansion"
        }
    } else {
        alertEl.textContent = "Please select number of players"
    }
})

function addExpan() {
    for(let i = 0; i < activeArray.length; i++) {
        factionList.push(activeArray[i])
    }
}

function removeExpan() {
    for(let i = 0; i < activeArray.length; i++) {
        let removeItem = factionList.indexOf(activeArray[i])
        factionList.splice(removeItem, 1)
    }
}

function getFaction() {
    let i = Math.floor(Math.random() * pool.length)
    let faction = pool[i]
    pool.splice([i], 1)
    return faction
}

function setPool() {
    pool = []
    for(let i = 0; i < factionList.length; i++) {
        pool.push(factionList[i])
}
}

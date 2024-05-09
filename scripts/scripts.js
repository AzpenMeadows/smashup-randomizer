let factionList = []
let pool = []
let activeArray

const expanCore = ["Aliens", "Dinosaurs", "Ninjas", "Pirates", "Robots", "Tricksters", "Wizards", "Zombies"]
const expan10thAnniversary = ["Skeletons", "Mermaids", "World Champs"]
const expanMovies = ["Action Heroes", "Backtimers", "Extramorphs", "Wraithrustlers"]
const expanAwesome9000 = ["Bear Cavalry", "Ghosts", "Killer Plants", "Steampunks"]
const expanScienceFiction = ["Cyborg Apes", "Shapeshifters", "Super Spies", "Time Travelers"]
const expanMonsterSmash = ["Giant Ants", "Mad Scientists", "Vampires", "Werewolves"]
const expanPretty = ["Fairies", "Kitty Cats", "Mythic Horses", "Princesses"]
const expanItsYourFault = ["Dragons", "Mythic Greeks", "Sharks", "Tornadoes", "Superheroes"]
const expanCeaseDesist = ["Star Roamers", "Astro Knights", "Changerbots", "Ignobles"]
const expanWhatWeThinking = ["Teddy Bears", "Grandmas", "RockStars", "Explorers"]
const expanBigJapan = ["Kaiju", "Magical Girls", "Mega Troopers", "Itty Critters"]
const expanThat70s = ["Truckers", "Disco Dancers", "Vigilantes", "Kung Fu Fighters"]
const expanOopsAgain = ["Vikings", "Cowboys", "Ancient Egyptians", "Samurai"]
const expanWtInternational = ["Luchadors", "Mounties", "Musketeers", "Sumo Wrestlers"]
const expanWtCulture = ["Anansi Tales", "Acient Incas", "Grimms' Fairy Tales", "Polynesian Voyagers", "Russian Fairy Tales"]
const expanCthulhu = ["Elder Things", "Innsmouth", "Cthulhu Cultists", "Miskatonic University"]
const expanMunchkin = ["Clerics", "Dwarves", "Elves", "Halflings", "Mages", "Orcs", "Thieves", "Warriors"]
const expanMarvel = ["Avengers", "Hydra", "Kree", "Masters of Evil", "S.H.I.E.L.D.", "Sinister Six", "Spider-Verse", "Ultimates"]
const expanDisney = ["Aladdin", "Beauty and the Beast", "Big Hero 6", "Frozen", "Mulan", "The Lion King", "The Nightmare Before Christmas", "Wreck-It-Ralph"]
const expanGeeks = ["Geeks"]
const expanAllStars = ["All-Stars"]
const expanSheep = ["Sheep"]
const expanPenguins = ["Pengiuns"]
const expanGoblins = ["Goblins"]
const expanKnights = ["Knights of the Round Table"]
const expanTeens = ["Teens"]

const expanListEl = document.querySelector("#js-expansions__list-el")
const expanCoreEl = document.querySelector("#js-expan-core-el")
const expan10thAnniversaryEl = document.querySelector("#js-expan-10th-anniversary-el")
const expanMoviesEl = document.querySelector("#js-expan-movies-el")
const expanAwesome9000El = document.querySelector("#js-expan-awesome9000-el")
const expanScienceFictionEl = document.querySelector("#js-expan-science-fiction-el")
const expanMonsterSmashEl = document.querySelector("#js-expan-monster-smash-el")
const expanPrettyEl = document.querySelector("#js-expan-pretty-el")
const expanItsYourFaultEl = document.querySelector("#js-expan-its-your-fault-el")
const expanCeaseDesistEl = document.querySelector("#js-expan-cease-desist-el")
const expanWhatWeThinkingEl = document.querySelector("#js-expan-what-we-thinking-el")
const expanBigJapanEl = document.querySelector("#js-expan-big-japan-el")
const expanThat70sEl = document.querySelector("#js-expan-that-70s-el")
const expanOopsAgainEl = document.querySelector("#js-expan-oops-again-el")
const expanWtInternationalEl = document.querySelector("#js-expan-wt-international-el")
const expanWtCultureEl = document.querySelector("#js-expan-wt-culture-el")
const expanCthulhuEl = document.querySelector("#js-expan-cthulhu-el")
const expanMunchkinEl = document.querySelector("#js-expan-munchkin-el")
const expanMarvelEl = document.querySelector("#js-expan-marvel-el")
const expanDisneyEl = document.querySelector("#js-expan-disney-el")
const expanGeeksEl = document.querySelector("#js-expan-geeks-el")
const expanAllStarsEl = document.querySelector("#js-expan-all-stars-el")
const expanSheepEl = document.querySelector("#js-expan-sheep-el")
const expanPenguinsEl = document.querySelector("#js-expan-penguins-el")
const expanGoblinsEl = document.querySelector("#js-expan-goblins-el")
const expanKnightsEl = document.querySelector("#js-expan-knights-el")
const expanTeensEl = document.querySelector("#js-expan-teens-el")


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

expan10thAnniversaryEl.addEventListener("change", function() {
    activeArray = expan10thAnniversary
    if (this.checked) {
        addExpan()
    } else {
        removeExpan()
    }
})

expanMoviesEl.addEventListener("change", function() {
    activeArray = expanMovies
    if (this.checked) {
        addExpan()
    } else {
        removeExpan()
    }
})

expanAwesome9000El.addEventListener("change", function() {
    activeArray = expanAwesome9000
    if (this.checked) {
        addExpan()
    } else {
        removeExpan()
    }
})

expanScienceFictionEl.addEventListener("change", function() {
    activeArray = expanScienceFiction
    if (this.checked) {
        addExpan()
    } else {
        removeExpan()
    }
})

expanMonsterSmashEl.addEventListener("change", function() {
    activeArray = expanMonsterSmash
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

expanItsYourFaultEl.addEventListener("change", function() {
    activeArray = expanItsYourFault
    if (this.checked) {
        addExpan()
    } else {
        removeExpan()
    }
})

expanCeaseDesistEl.addEventListener("change", function() {
    activeArray = expanCeaseDesist
    if (this.checked) {
        addExpan()
    } else {
        removeExpan()
    }
})

expanWhatWeThinkingEl.addEventListener("change", function() {
    activeArray = expanWhatWeThinking
    if (this.checked) {
        addExpan()
    } else {
        removeExpan()
    }
})

expanBigJapanEl.addEventListener("change", function() {
    activeArray = expanBigJapan
    if (this.checked) {
        addExpan()
    } else {
        removeExpan()
    }
})

expanThat70sEl.addEventListener("change", function() {
    activeArray = expanThat70s
    if (this.checked) {
        addExpan()
    } else {
        removeExpan()
    }
})

expanOopsAgainEl.addEventListener("change", function() {
    activeArray = expanOopsAgain
    if (this.checked) {
        addExpan()
    } else {
        removeExpan()
    }
})

expanWtInternationalEl.addEventListener("change", function() {
    activeArray = expanWtInternational
    if (this.checked) {
        addExpan()
    } else {
        removeExpan()
    }
})

expanWtCultureEl.addEventListener("change", function() {
    activeArray = expanWtCulture
    if (this.checked) {
        addExpan()
    } else {
        removeExpan()
    }
})

expanCthulhuEl.addEventListener("change", function() {
    activeArray = expanCthulhu
    if (this.checked) {
        addExpan()
    } else {
        removeExpan()
    }
})

expanMunchkinEl.addEventListener("change", function() {
    activeArray = expanMunchkin
    if (this.checked) {
        addExpan()
    } else {
        removeExpan()
    }
})

expanMarvelEl.addEventListener("change", function() {
    activeArray = expanMarvel
    if (this.checked) {
        addExpan()
    } else {
        removeExpan()
    }
})

expanDisneyEl.addEventListener("change", function() {
    activeArray = expanDisney
    if (this.checked) {
        addExpan()
    } else {
        removeExpan()
    }
})

expanGeeksEl.addEventListener("change", function() {
    activeArray = expanGeeks
    if (this.checked) {
        addExpan()
    } else {
        removeExpan()
    }
})

expanAllStarsEl.addEventListener("change", function() {
    activeArray = expanAllStars
    if (this.checked) {
        addExpan()
    } else {
        removeExpan()
    }
})

expanSheepEl.addEventListener("change", function() {
    activeArray = expanSheep
    if (this.checked) {
        addExpan()
    } else {
        removeExpan()
    }
})

expanPenguinsEl.addEventListener("change", function() {
    activeArray = expanPenguins
    if (this.checked) {
        addExpan()
    } else {
        removeExpan()
    }
})

expanGoblinsEl.addEventListener("change", function() {
    activeArray = expanGoblins
    if (this.checked) {
        addExpan()
    } else {
        removeExpan()
    }
})

expanKnightsEl.addEventListener("change", function() {
    activeArray = expanKnights
    if (this.checked) {
        addExpan()
    } else {
        removeExpan()
    }
})

expanTeensEl.addEventListener("change", function() {
    activeArray = expanTeens
    if (this.checked) {
        addExpan()
    } else {
        removeExpan()
    }
})

btnEl.addEventListener("click", function () {
    renderFactions()
})

function renderFactions() {
    setPool()
    let htmlPlayer1 = `<h3 class="heading heading--small">Player 2</h3><p>${getFaction()}</p><p>${getFaction()}</p>`
    let htmlPlayer2 = `<h3 class="heading heading--small">Player 2</h3><p>${getFaction()}</p><p>${getFaction()}</p>`
    let htmlPlayer3 = `<h3 class="heading heading--small">Player 3</h3><p>${getFaction()}</p><p>${getFaction()}</p>`
    let htmlPlayer4 = `<h3 class="heading heading--small">Player 4</h3><p>${getFaction()}</p><p>${getFaction()}</p>`
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
}

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

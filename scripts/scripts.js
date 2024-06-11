let players = [
    {
        name: "Player 1",
        docEl: document.querySelector("#js-factions__player1-el")
    },
    {
        name: "Player 2",
        docEl: document.querySelector("#js-factions__player2-el")
    },
    {
        name: "Player 3",
        docEl: document.querySelector("#js-factions__player3-el")
    },
    {
        name: "Player 4",
        docEl: document.querySelector("#js-factions__player4-el"),
    }
]

let expansions = [
    {
        name: "Smash up Core",
        factions: ["Aliens", "Dinosaurs", "Ninjas", "Pirates", "Robots", "Tricksters", "Wizards", "Zombies"],
        docEl: document.querySelector("#js-expan-core-el")
    },
    {
        name: "10th Anniversary",
        factions: ["Skeletons", "Mermaids", "World Champs"],
        docEl: document.querySelector("#js-expan-10th-anniversary-el")
    },
    {
        name: "Excellent Movies Dudes!",
        factions: ["Action Heroes", "Backtimers", "Extramorphs", "Wraithrustlers"],
        docEl: document.querySelector("#js-expan-movies-el")
    },
    {
        name: "Awesome Level 9000",
        factions: ["Bear Cavalry", "Ghosts", "Killer Plants", "Steampunks"],
        docEl: document.querySelector("#js-expan-awesome9000-el")
    },
    {
        name: "Science Fiction",
        factions: ["Cyborg Apes", "Shapeshifters", "Super Spies", "Time Travelers"],
        docEl: document.querySelector("#js-expan-science-fiction-el")
    },
    {
        name: "Monster Smash",
        factions: ["Giant Ants", "Mad Scientists", "Vampires", "Werewolves"],
        docEl: document.querySelector("#js-expan-monster-smash-el")
    },
    {
        name: "Pretty Pretty Smash Up",
        factions: ["Fairies", "Kitty Cats", "Mythic Horses", "Princesses"],
        docEl: document.querySelector("#js-expan-pretty-el")
    },
    {
        name: "It's Your Fault!",
        factions: ["Dragons", "Mythic Greeks", "Sharks", "Tornadoes", "Superheroes"],
        docEl: document.querySelector("#js-expan-its-your-fault-el")
    },
    {
        name: "Cease and Desist",
        factions: ["Star Roamers", "Astro Knights", "Changerbots", "Ignobles"],
        docEl: document.querySelector("#js-expan-cease-desist-el")
    },
    {
        name: "What Were We Thinking?",
        factions: ["Teddy Bears", "Grandmas", "RockStars", "Explorers"],
        docEl: document.querySelector("#js-expan-what-we-thinking-el")
    },
    {
        name: "Big in Japan",
        factions: ["Kaiju", "Magical Girls", "Mega Troopers", "Itty Critters"],
        docEl: document.querySelector("#js-expan-big-japan-el")
    },
    {
        name: "That '70s Expansion",
        factions: ["Truckers", "Disco Dancers", "Vigilantes", "Kung Fu Fighters"],
        docEl: document.querySelector("#js-expan-that-70s-el")
    },
    {
        name: "Oops You Did It Again",
        factions: ["Vikings", "Cowboys", "Ancient Egyptians", "Samurai"],
        docEl: document.querySelector("#js-expan-oops-again-el")
    },
    {
        name: "World Tour: International Incident",
        factions: ["Luchadors", "Mounties", "Musketeers", "Sumo Wrestlers"],
        docEl: document.querySelector("#js-expan-wt-international-el")
    },
    {
        name: "World Tour: Culture Shock",
        factions: ["Anansi Tales", "Acient Incas", "Grimms' Fairy Tales", "Polynesian Voyagers", "Russian Fairy Tales"],
        docEl: document.querySelector("#js-expan-wt-culture-el")
    },
    {
        name: "The Obligatory Cthulhu Set",
        factions: ["Elder Things", "Innsmouth", "Cthulhu Cultists", "Miskatonic University"],
        docEl: document.querySelector("#js-expan-cthulhu-el")
    },
    {
        name: "Munchkin",
        factions: ["Clerics", "Dwarves", "Elves", "Halflings", "Mages", "Orcs", "Thieves", "Warriors"],
        docEl: document.querySelector("#js-expan-munchkin-el")
    },
    {
        name: "Marvel",
        factions: ["Avengers", "Hydra", "Kree", "Masters of Evil", "S.H.I.E.L.D.", "Sinister Six", "Spider-Verse", "Ultimates"],
        docEl: document.querySelector("#js-expan-marvel-el")
    },
    {
        name: "Disney",
        factions: ["Aladdin", "Beauty and the Beast", "Big Hero 6", "Frozen", "Mulan", "The Lion King", "The Nightmare Before Christmas", "Wreck-It-Ralph"],
        docEl: document.querySelector("#js-expan-disney-el")
    },
    {
        name: "Geeks",
        factions: ["Geeks"],
        docEl: document.querySelector("#js-expan-geeks-el")
    },
    {
        name: "Smashup All-Stars",
        factions: ["All-Stars"],
        docEl: document.querySelector("#js-expan-all-stars-el")
    },
    {
        name: "Sheep",
        factions: ["Sheep"],
        docEl: document.querySelector("#js-expan-sheep-el")
    },
    {
        name: "Penguins",
        factions: ["Penguins"],
        docEl: document.querySelector("#js-expan-penguins-el")
    },
    {
        name: "Goblins",
        factions: ["Goblins"],
        docEl: document.querySelector("#js-expan-goblins-el")
    },
    {
        name: "Knights of the Round Table",
        factions: ["Knights of the Round Table"],
        docEl: document.querySelector("#js-expan-knights-el")
    },
    {
        name: "Teens",
        factions: ["Teens"],
        docEl: document.querySelector("#js-expan-teens-el")
    },
]

let factionList = []
let playerCT = 0
let alertEl = document.querySelector("#js-alert")
let btnEl = document.querySelector("#js-randomize-btn")

function chooseFactions() {
    renderHTML(players, playerCT)
}

function setPool() {
    for(let i = 0; i < expansions.length; i++) {
        if(expansions[i].docEl.checked) {
            pushFaction(expansions[i].factions)
        }
    }
}

function pushFaction(arr) {
    for(let i = 0; i < arr.length; i++) {
        factionList.push(arr[i])
        console.log(factionList)
    }
}

function renderHTML(player, count) {
    console.log(count)
    for(let i = 0; i < count; i++) {
        player[i].docEl.innerHTML = `<h3 class="heading heading--small">${player[i].name}</h3><p>${getFaction(factionList)}</p><p>${getFaction(factionList)}</p>`
    }
}


function getFaction(arr) {
    let n = Math.floor(Math.random() * arr.length)
    let faction = arr[n]
    arr.splice([n], 1)
    return faction
}

function checkPlayers() {
    let playerCT2El = document.querySelector("#js-player-ct-two")
    let playerCT3El = document.querySelector("#js-player-ct-three")
    let playerCT4El = document.querySelector("#js-player-ct-four")

    if(playerCT2El.checked) {
        playerCT = 2
    } else if(playerCT3El.checked) {
        playerCT = 3
    } else if(playerCT4El.checked) {
        playerCT = 4
    }
}

function reset() {
    factionList = []
    for(let i = 0; i < players.length; i++) {
        players[i].docEl.innerHTML = ""
    }
}

btnEl.addEventListener("click", function() {
    let alertText = `Not enough factions. Please choose another expansion`
    reset()
    setPool()
    checkPlayers()
    if(playerCT === 2 && factionList.length < 4) {
        alertEl.textContent = alertText
    } else if(playerCT === 3 && factionList.length < 6) {
        alertEl.textContent = alertText
    } else if(playerCT === 4 && factionList.length < 8) {
        alertEl.textContent = alertText
    } else {
        alertEl.textContent = ""
        chooseFactions()
    }
})
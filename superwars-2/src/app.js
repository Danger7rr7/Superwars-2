const HEROES = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

const initPlayers = (heroes) => {
    let detailedPlayers = [];
    for (let i = 0; i < heroes.length; i++) {
        detailedPlayers.push({
            name: heroes[i],
            strength: getRandomStrength(),
            image: `images/super-${i + 1}.png`,
            type: i % 2 === 0 ? "hero" : "villain" 
        });
    }
    return detailedPlayers;
}

const getRandomStrength = () => {
    return Math.floor((Math.random() * 100) + 1);
}

const buildPlayers = (players, type) => {
    let fragment = '';
    for (let i = 0; i < players.length; i++) {
        if (players[i].type == type) {
            let text = `<div class="player">
            <img src="${players[i].image}" alt="">
            <div class="name">${players[i].name}</div>
            <div class="strength">${players[i].strength}</div>
            </div>`;
            fragment += text;
        }
    }
    return fragment;
}

const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
}

window.onload = () => {
    viewPlayers(initPlayers(HEROES));
}

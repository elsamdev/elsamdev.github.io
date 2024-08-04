const player = document.getElementById('player');
const enemy = document.getElementById('enemy');
const playerHealthBar = document.getElementById('playerHealth');
const enemyHealthBar = document.getElementById('enemyHealth');
const startButton = document.getElementById('startButton');
const replayButton = document.getElementById('replayButton');
const statsDiv = document.getElementById('stats');
const timelineDiv = document.getElementById('timeline');

const playerName = "Jugador";
const enemyName = "Enemigo";
const maxHealth = 100;

let events = [];
let stats = {
    player: { attacks: 0, damageDealt: 0, health: maxHealth },
    enemy: { attacks: 0, damageDealt: 0, health: maxHealth }
};

startButton.addEventListener('click', startBattle);
replayButton.addEventListener('click', replayBattle);

function startBattle() {
    events = [];
    stats = { player: { attacks: 0, damageDealt: 0, health: maxHealth }, enemy: { attacks: 0, damageDealt: 0, health: maxHealth } };
    timelineDiv.innerHTML = '';
    playerHealthBar.style.width = '100%';
    enemyHealthBar.style.width = '100%';

    while (stats.player.health > 0 && stats.enemy.health > 0) {
        const attacker = Math.random() > 0.5 ? 'player' : 'enemy';
        const damage = Math.floor(Math.random() * 10) + 1;
        stats[attacker].attacks++;
        stats[attacker].damageDealt += damage;
        const defender = attacker === 'player' ? 'enemy' : 'player';
        stats[defender].health -= damage;
        if (stats[defender].health < 0) stats[defender].health = 0;
        events.push({ attacker, defender, damage, timestamp: `Turno ${events.length + 1}` });
    }

    displayStats();
    displayTimeline();
    replayButton.disabled = false;
}

function displayStats() {
    statsDiv.innerHTML = `
        <p>${playerName}: Ataques - ${stats.player.attacks}, Daño Total - ${stats.player.damageDealt}, Salud - ${stats.player.health}</p>
        <p>${enemyName}: Ataques - ${stats.enemy.attacks}, Daño Total - ${stats.enemy.damageDealt}, Salud - ${stats.enemy.health}</p>
    `;
}

function displayTimeline() {
    events.forEach((event, index) => {
        const eventDiv = document.createElement('div');
        eventDiv.classList.add('timeline-event');
        eventDiv.id = `event-${index}`;
        eventDiv.textContent = `${event.timestamp}: ${event.attacker === 'player' ? playerName : enemyName} causó ${event.damage} de daño a ${event.defender === 'player' ? playerName : enemyName}.`;
        timelineDiv.appendChild(eventDiv);
    });
}

function replayBattle() {
    let replayIndex = 0;

    function nextEvent() {
        if (replayIndex < events.length) {
            const event = events[replayIndex];
            animateAttack(event.attacker, event.defender, event.damage);
            highlightEvent(replayIndex);
            replayIndex++;
            setTimeout(nextEvent, 1000);
        }
    }

    nextEvent();
}

function highlightEvent(index) {
    const previousEvent = document.querySelector('.timeline-event.active');
    if (previousEvent) {
        previousEvent.classList.remove('active');
    }
    const currentEvent = document.getElementById(`event-${index}`);
    if (currentEvent) {
        currentEvent.classList.add('active');
        currentEvent.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

function animateAttack(attacker, defender, damage) {
    const attackerDiv = attacker === 'player' ? player : enemy;
    const defenderDiv = defender === 'player' ? player : enemy;
    const defenderHealthBar = defender === 'player' ? playerHealthBar : enemyHealthBar;

    attackerDiv.style.transform = 'scale(1.2)';
    setTimeout(() => {
        attackerDiv.style.transform = 'scale(1)';
        defenderDiv.style.transform = 'scale(0.8)';
        setTimeout(() => {
            defenderDiv.style.transform = 'scale(1)';
            stats[defender].health -= damage;
            if (stats[defender].health < 0) stats[defender].health = 0;
            defenderHealthBar.style.width = `${(stats[defender].health / maxHealth) * 100}%`;
            showDamage(defenderDiv, damage);
        }, 500);
    }, 500);
}

function showDamage(defender, damage) {
    const damageDiv = document.createElement('div');
    damageDiv.classList.add('damage');
    damageDiv.textContent = `-${damage}`;
    defender.appendChild(damageDiv);

    setTimeout(() => {
        defender.removeChild(damageDiv);
    }, 1000);
}

// game.js

const arena = document.getElementById('arena');
const whiteStats = document.getElementById('white-stats');
const blueStats = document.getElementById('blue-stats');
const message = document.getElementById('message');

let whitePlayer, bluePlayer;

function getRandomStat(min, max) {
    return Math.random() * (max - min) + min;
}

function createPlayer(color) {
    const player = document.createElement('div');
    player.classList.add('player', color);

    player.stats = {
        vida: Math.floor(getRandomStat(10, 30)),
        fuerza: Math.floor(getRandomStat(1, 5)),
        velocidad: getRandomStat(2, 3), // Ajustamos la velocidad entre 2 y 3
        elapsedTime: 0 // Tiempo transcurrido para el ataque
    };

    const barContainer = document.createElement('div');
    barContainer.classList.add('bar-container');
    const bar = document.createElement('div');
    bar.classList.add('bar');
    barContainer.appendChild(bar);
    player.appendChild(barContainer);

    arena.appendChild(player);
    return player;
}

function displayStats(player, element) {
    element.innerHTML = `
        <p>Vida: ${player.stats.vida}</p>
        <p>Fuerza: ${player.stats.fuerza}</p>
        <p>Velocidad: ${player.stats.velocidad.toFixed(2)} s</p>
    `;
}

function invokePlayers() {
    // Clear current players
    if (whitePlayer) whitePlayer.remove();
    if (bluePlayer) bluePlayer.remove();
    whiteStats.innerHTML = '';
    blueStats.innerHTML = '';
    message.innerHTML = '';

    // Create new players
    whitePlayer = createPlayer('white');
    bluePlayer = createPlayer('blue');

    // Display stats
    displayStats(whitePlayer, whiteStats);
    displayStats(bluePlayer, blueStats);
}

function startBattle() {
    if (!whitePlayer || !bluePlayer) return;

    let isAnimating = false;

    const attack = (attacker, defender) => {
        if (defender.stats.vida <= 0) return;

        isAnimating = true;

        // Animación de movimiento
        const originalPosition = attacker.style.transform;
        const defenderPosition = defender.getBoundingClientRect();
        const attackerPosition = attacker.getBoundingClientRect();
        const distanceX = defenderPosition.left - attackerPosition.left;
        const distanceY = defenderPosition.top - attackerPosition.top;

        attacker.style.transform = `translate(${distanceX}px, ${distanceY}px)`;

        setTimeout(() => {
            // Colisión y ataque
            defender.style.transform = defender.classList.contains('white') ? 'rotate(-20deg)' : 'rotate(20deg)';
            defender.style.backgroundColor = 'red';
            defender.stats.vida -= attacker.stats.fuerza;
            if (defender.stats.vida <= 0) {
                defender.stats.vida = 0;
                defender.remove();
                endBattle(attacker);
            }

            displayStats(whitePlayer, whiteStats);
            displayStats(bluePlayer, blueStats);

            // Volver a la posición original
            attacker.style.transform = originalPosition;

            setTimeout(() => {
                defender.style.transform = 'rotate(0deg)';
                defender.style.backgroundColor = defender.classList.contains('white') ? 'white' : 'blue';
                setTimeout(() => {
                    isAnimating = false;
                    // Reactivar el ciclo de ataque
                    requestAnimationFrame(updateBars);
                }, 500);
            }, 500);

        }, 500); // Duración de la animación de ataque
    };

    const updateBars = () => {
        if (isAnimating || !whitePlayer.parentNode || !bluePlayer.parentNode) return;

        whitePlayer.stats.elapsedTime += 100;
        bluePlayer.stats.elapsedTime += 100;

        const whiteBar = whitePlayer.querySelector('.bar');
        const blueBar = bluePlayer.querySelector('.bar');

        whiteBar.style.width = `${(whitePlayer.stats.elapsedTime / (whitePlayer.stats.velocidad * 1000)) * 100}%`;
        blueBar.style.width = `${(bluePlayer.stats.elapsedTime / (bluePlayer.stats.velocidad * 1000)) * 100}%`;

        if (whitePlayer.stats.elapsedTime >= whitePlayer.stats.velocidad * 1000) {
            whitePlayer.stats.elapsedTime = 0;
            attack(whitePlayer, bluePlayer);
        } else if (bluePlayer.stats.elapsedTime >= bluePlayer.stats.velocidad * 1000) {
            bluePlayer.stats.elapsedTime = 0;
            attack(bluePlayer, whitePlayer);
        } else {
            requestAnimationFrame(updateBars);
        }
    };

    requestAnimationFrame(updateBars);
}

function endBattle(winner) {
    if (winner.classList.contains('white')) {
        message.innerHTML = '¡Ganó el Blanco!';
    } else if (winner.classList.contains('blue')) {
        message.innerHTML = '¡Ganó el Azul!';
    }
}

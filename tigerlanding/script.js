let coins = document.querySelectorAll('.pcoin_rain_img');

coins.forEach((coin, index) => {
  let randomDelay = Math.random() * 0 - 2.9; // Genera un número aleatorio entre -1 y 1
  let randomDuration = Math.random() * 1 + 2; // Genera un número aleatorio entre 1.2 y 1.7
  
  coin.style.animationDelay = `${randomDelay}s`;
  coin.style.animationDuration = `${randomDuration}s`;
});
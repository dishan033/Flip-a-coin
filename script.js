let display = document.getElementById("display");

let flipCoin = document.getElementById("coin");
let heads = document.getElementById('heads');
let tails = document.getElementById('tails');

let headCount= 0;
let tailCount = 0;

const coin =`<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120">
  <circle cx="60" cy="60" r="55" fill="#FFD700" stroke="#B8860B" stroke-width="5"/>
</svg>`;

const headsSVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120">
  <circle cx="60" cy="60" r="55" fill="#FFD700" stroke="#B8860B" stroke-width="5"/>
  <text x="50%" y="45%" dominant-baseline="middle" text-anchor="middle" font-size="32" fill="#333" font-family="Arial">👤</text>
  <text x="50%" y="75%" dominant-baseline="middle" text-anchor="middle" font-size="16" fill="#333" font-family="Arial">HEADS</text>
</svg>`;

const tailsSVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120">
  <circle cx="60" cy="60" r="55" fill="#FFD700" stroke="#B8860B" stroke-width="5"/>
  <text x="50%" y="45%" dominant-baseline="middle" text-anchor="middle" font-size="32" fill="#333" font-family="Arial">⭐</text>
  <text x="50%" y="75%" dominant-baseline="middle" text-anchor="middle" font-size="16" fill="#333" font-family="Arial">TAILS</text>
</svg>`;

flipCoin.addEventListener("click", function(e){
    e.preventDefault();
    const result = Math.floor(Math.random() * 2);
    display.innerHTML  = coin;
  display.classList.remove("flip");
  void display.offsetWidth; 
  display.classList.add("flip");

    setTimeout(() => {
    if (result === 0) {
      headCount++;
      heads.textContent = `Heads : ${headCount}`;
      display.innerHTML = headsSVG;
    } else {
      tailCount++;
      tails.textContent = `Tails : ${tailCount}`;
      display.innerHTML = tailsSVG;
    }
  }, 600); // Match this with CSS animation duration
})

var clutter = " ";
var Timer = 60;
var hit = 0;
var s = 0;
function score() {
  s += 10;
  document.querySelector(".score").textContent = s;
}
function newHit() {
  hit = Math.floor(Math.random() * 10);
  document.querySelector(".newHit").textContent = hit;
}
function bubbleMaker() {
    clutter=" ";
    //to get everytime new buuble we have to reset it else it will add into it so it just
    //going to overflow and value on screen doesn't chnages.
  for (var i = 0; i <= 107; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div id="bubble">${rn}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = clutter;
}
function countdown() {
  var interval = setInterval(() => {
    if (Timer > 0) {
      Timer--;
      document.querySelector(".timerval").textContent = Timer;
    } else {
      clearInterval(interval);

      document.querySelector("#pbtm").innerHTML = `<h1 id="msg">Game Over</h1>`;
    }
  }, 1000);
}

document.querySelector("#pbtm").addEventListener("click", function (details) {
  var data = Number(details.target.textContent);
  if (data === hit) {
    score();
    newHit();
    bubbleMaker();
  }
});

bubbleMaker();
countdown();
newHit();

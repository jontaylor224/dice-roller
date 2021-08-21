let results = [null, null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

let rollTwoButton = document.querySelector("#roll");
let rollThousandButton = document.querySelector("#roll_thousand");
let singleRollOutput = document.querySelector("#result");
let graphOutput = document.querySelector("#graph");

function rollDie() {
  return Math.floor(Math.random() * 6 + 1);
}
function rollTwoDice() {
  let sum = rollDie() + rollDie();
  results[sum] += 1;
  return sum;
}

function renderGraph() {
  let maxValue = Math.max(...results);
  for (let i = 0; i < results.length; i += 1) {
    let value = results[i];
    if (value) {
      let barContainer = document.createElement("div");
      barContainer.classList.add("barcontainer");

      let barTitle = document.createElement("div");
      barTitle.innerText = `You have rolled a ${i} for ${value} times.`;
      barTitle.classList.add("bartitle");

      barContainer.append(barTitle);

      let newDiv = document.createElement("div");
      newDiv.classList.add("bargraph");
      let barHeight = (value / maxValue) * 500;
      newDiv.style.height = barHeight + "px";

      barContainer.append(newDiv);
      graphOutput.append(barContainer);
    }
  }
}

function reset() {
  results = [null, null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  graphOutput.innerHTML = "";
}

function onClickTwoRoll() {
  let diceRoll = rollTwoDice();
  singleRollOutput.innerHTML = `<p>You rolled ${diceRoll} this time</p>`;
}

function onClickThousandRolls() {
  reset();
  for (let i = 0; i < 1000; i += 1) {
    rollTwoDice();
  }
  renderGraph();
}

rollTwoButton.addEventListener("click", onClickTwoRoll);
rollThousandButton.addEventListener("click", onClickThousandRolls);

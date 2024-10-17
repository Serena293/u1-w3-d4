const tableTombola = document.getElementById("tombola");
const selectNumberBtn = document.getElementById("selectNumberBtn");
const numbersAlreadyDrawn = new Set();
const cardBtn = document.getElementById('cardBtn')

const createTable = () => {
  for (let i = 1; i <= 76; i++) {
    const cell = document.createElement("div");
    cell.classList.add("number");
    cell.innerText = i;

    tableTombola.appendChild(cell);
  }
};

const pickNumber = () => {
  const selectedNumber = Math.ceil(Math.random() * 76);
  const selectedDiv = document.getElementsByClassName("number");

  if (numbersAlreadyDrawn.has(selectedNumber)) {
    console.log('Numero già estratto')
    return;
  }

  for (let i = 0; i < selectedDiv.length; i++) {
    if (parseInt(selectedDiv[i].innerText) === selectedNumber) {
      selectedDiv[i].classList.add("numberDrawn");
    }
  }
  numbersAlreadyDrawn.add(selectedNumber);
  console.log("Numero estratto: ", selectedNumber);
};


const createPlayerCard = () => {
    const playerCard = document.getElementById('playerCard')
    for (let i = 1; i <= 24; i++) {
      const cell = document.createElement("div");
      cell.classList.add("number");
      cell.innerText = Math.ceil(Math.random() * 76)
  
      playerCard.appendChild(cell);
    }
  };


createTable();
selectNumberBtn.addEventListener("click", pickNumber);
cardBtn.addEventListener('click', createPlayerCard )

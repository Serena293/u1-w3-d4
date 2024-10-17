const tableTombola = document.getElementById("tombola");
const selectNumberBtn = document.getElementById("selectNumberBtn");
  const numbersAlreadyDrawn = new Set(); 
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
    return;
  }

  numbersAlreadyDrawn.add(selectedNumber);
  for (let i = 0; i < selectedDiv.length; i++) {
    if (parseInt(selectedDiv[i].innerText) === selectedNumber) {
      selectedDiv[i].classList.add("numberDrawn");
    }
  }
  console.log("pulsante premuto", selectedNumber);
};

createTable();
selectNumberBtn.addEventListener("click", pickNumber);

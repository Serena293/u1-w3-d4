

const selectedNumber = Math.ceil(Math.random() * 76);
const tableTombola = document.getElementById("tombola");

const createTable = () => {
 


  for (let i = 1; i <= 76; i++) {
   const cell = document.createElement("div");
    cell.classList.add("number");
    cell.innerText = i;

    tableTombola.appendChild(cell);
  }
};

createTable();

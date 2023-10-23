let row = 100;
let col = 26;

let rowCont = document.querySelector(".adress-row-cont");
let colCont = document.querySelector(".adress-col-cont");
let cellsCont = document.querySelector(".cells-cont");

for (let i = 0; i < row; i++) {
  let colcell = document.createElement("div");
  colcell.setAttribute("class", "address-col");
  colcell.innerHTML = i + 1;
  colCont.appendChild(colcell);
}
for (let i = 0; i < col; i++) {
  let rowcell = document.createElement("div");
  rowcell.setAttribute("class", "address-row");
  rowcell.innerHTML = String.fromCharCode(65 + i);
  rowCont.appendChild(rowcell);
}


for (let i = 0; i < row; i++) {
  let rowCont = document.createElement("div");
  rowCont.setAttribute("class", "row-cont");

  for (let j = 0; j < col; j++) {
    let cell = document.createElement("div");
    cell.setAttribute("class", "cell");
    cell.setAttribute("contenteditable", "true");
    rowCont.appendChild(cell);
    displayCellAddress(cell, i, j);
  }

  cellsCont.appendChild(rowCont);
}

function displayCellAddress(cell, i, j) {
  cell.addEventListener("click", () => {
    let cellRow = i + 1;
    let cellCol = String.fromCharCode(65 + j);
    let addressBar = document.querySelector(".adress-bar");
    addressBar.value = `${cellCol}${cellRow}`;
  });
}

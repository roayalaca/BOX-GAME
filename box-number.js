window.onload = function() {
    var board = document.getElementById("board"); 
    var spaces = board.getElementsByTagName("td");
    //Creamos los listenes en forma dinamica
    for (var i=0; i<spaces.length; i++) {
      spaces[i].onclick = clicSpace;
    }
  }
  
  function clicSpace() {
    if (emptySpace(this)) {
      // Pulso la celda vacia
      alert("Clic a number");
      return;
    }
  
    var row = this.id.charAt(5);
    var column = this.id.charAt(6);
  
    // Verifica Arriba
    if (row > 1) {
      var testRow = Number(row) - 1;
      var idTestSpace = "celda" + testRow + column;
      var testSpace = document.getElementById(idTestSpace);
      if (emptySpace(testSpace)) {
        moveSpaces(this, testSpace);
        return;
      }
    }
  
    // Verifica Abajo
    if (row < 4) {
      var testRow = Number(row) + 1;
      var idTestSpace = "celda" + testRow + column;
      var testSpace = document.getElementById(idTestSpace);
      if (emptySpace(testSpace)) {
        moveSpaces(this, testSpace);
        return;
      }
    }
  
    // Verifica izquierda
    if (column > 1) {
      var testColumn = Number(column) - 1;
      var idTestSpace = "celda" + row + testColumn;
      var testSpace = document.getElementById(idTestSpace);
      if (emptySpace(testSpace)) {
        moveSpaces(this, testSpace);
        return;
      }     
    }
  
    // Verifica derecha
    if (column < 4) {
      var testColumn = Number(column) + 1;
      var idTestSpace = "celda" + row + testColumn;
      var testSpace = document.getElementById(idTestSpace);
      if (emptySpace(testSpace)) {
        moveSpaces(this, testSpace);
        return;
      }
    }
    //Error
    alert("Clic a number next to an empty space");
  }
  
  function emptySpace(space) {
    var p = space.firstChild;
    while (p.nodeName == "#text") { p = p.nextSibling; }
    if (p.innerHTML == "&nbsp;")
      return true; 
    else 
      return false; 
  }
  
  function moveSpaces(selectedSpc, targetSpc) {
    selectedNum = selectedSpc.firstChild;
    while (selectedNum.nodeName == "#text") {
      selectedNum = selectedNum.nextSibling;
    }
    targetNum = targetSpc.firstChild;
    while (targetNum.nodeName == "#text") {
      targetNum = targetNum.nextSibling;
    }
  
    selectedSpc.appendChild(targetNum);
    targetSpc.appendChild(selectedNum);
  }
  
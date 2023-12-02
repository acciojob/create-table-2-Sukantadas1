function createTable() {
    // Prompt for the number of rows
  const numRows = prompt("Input number of rows");

  // Prompt for the number of columns
  const numCols = prompt("Input number of columns");

  // Get the table element
  const table = document.getElementById('myTable');

  // Clear any existing content in the table
  table.innerHTML = '';

  // Create the table rows and cells
  for (let i = 0; i < numRows; i++) {
    const row = table.insertRow(i);

    for (let j = 0; j < numCols; j++) {
      const cell = row.insertCell(j);
      cell.textContent = `Row-${i} Column-${j}`;
    }
  }
  
}

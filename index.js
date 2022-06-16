const digitSpaces = document.querySelector(".digitSpaces");
const spacesContainer = document.querySelector(".digitalSpacesContainer");

//initialize the array to be spliced
let splicedArray;
let currentIndex = 0;
class Matrix {
  constructor(values, dimensions) {
    this.values = values;
    this.dimensions = dimensions;
  }
  populateMatrix() {
    let valuesAreMoreThanSetDimension =
      this.values.length > this.dimensions.row * this.dimensions.column;
    let valuesAreLessThanSetDimension =
      this.values.length < this.dimensions.row * this.dimensions.column;
    console.log(valuesAreMoreThanSetDimension);
    console.log(valuesAreLessThanSetDimension);
    if (valuesAreLessThanSetDimension || valuesAreMoreThanSetDimension) {
      valuesAreLessThanSetDimension && alert("not enough matrix elements");
      valuesAreMoreThanSetDimension &&
        alert("matrix elements are more than the dimensions you chose");
      this.values = [];
    }
    for (let j = 0; j < this.dimensions.row; j++) {
      const row = this.createRow();
      let valueArray = [...this.values];
      splicedArray = [...valueArray];
      let anewArray = [...splicedArray];
      let splitArray = anewArray.splice(currentIndex);
      console.log(splitArray);
      console.log(splicedArray);
      // console.log(currentIndex);
      //add the values to the rows.
      splitArray.forEach((value, i) => {
        if (row.children.length !== this.dimensions.column) {
          let index = this.createElement(value);
          console.log(i);
          index.dataset.rowPosition = j + 1;
          index.dataset.columnPosition = i + 1;
          row.appendChild(index);
          currentIndex += 1;
        } else if (row.children.length !== this.dimensions.column) {
          return;
        }
      });
    }
    this.displayElements();
  }

  createElement(value) {
    const createdValue = document.createElement("div");
    createdValue.textContent = value;
    createdValue.style.display = "inline-block";
    createdValue.style.marginLeft = "20px";
    createdValue.style.marginRight = "20px";
    return createdValue;
  }
  createRow() {
    const row = document.createElement("div");
    row.classList.add = "row";
    digitSpaces.appendChild(row);
    return row;
  }
  displayElements() {
    let digitSpacesArray = [...digitSpaces.children];
    digitSpacesArray.forEach((value) => {
      console.log(value);
    });
  }
}

const matrix = new Matrix(
  (values = [1, 2, 10, 4, 5, 6,12,45,65]),
  (dimensions = { row: 3, column: 3 })
);
matrix.populateMatrix();
matrix.createRow();

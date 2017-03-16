var height = document.getElementById("height").value;
var brick = document.getElementById("selection").value;

function getBrick(brick){
  document.querySelector("#selection").value = brick;
  console.log(brick);
  drawPyramid(height,brick);
}
window.onload = drawPyramid(height,brick);
//var select = document.getElementById("select").value;

function updateSlider(height){
  var brick = document.querySelector("#selection").value;
  document.querySelector('#height').value = height;
  drawPyramid(height,brick);
}

// function getBrick(selection){
//   document.querySelector("#selection").value = brick;
//   console.log(brick);
// }
function drawPyramid(height,brick) {
    // for each row....
    document.getElementById("pyramid").innerHTML = "";
    for (var row = 0; row < height; row++) {
        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            var spaceChar = "&nbsp;"; // this is the HTML encoding for a space " "
            rowStr += spaceChar;
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += brick;
        }

       // create a text element with the string of characters
       textElem = document.createTextNode(rowStr);

       // create a <p> element with the text inside
       rowElem = document.createElement("p");
       rowElem.innerHTML = rowStr;

       // insert the paragraph as a child of the container <div>
       document.getElementById("pyramid").appendChild(rowElem);
   }
}

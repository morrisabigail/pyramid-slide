height = document.getElementById("height").value
window.onload = drawPyramid(height);
function updateSlider(height){
   document.querySelector('#height').value = height;
   drawPyramid(height);
}
// document.querySelector('#height').addEventListener('oninput', function(){
//     height = drawPyramid(height);
//
// });


function drawPyramid(height) {
    // for each row....
  //  document.getElementById("#pyramid").innerHTML='';
    document.getElementById("pyramid").innerHTML = '';
    for (var row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            rowStr += ".";
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += "#";
        }

       // create a text element with the string of characters
       textElem = document.createTextNode(rowStr);

       // create a <p> element with the text inside
       rowElem = document.createElement("p");
       rowElem.appendChild(textElem);

       // insert the paragraph as a child of the container <div>
       document.getElementById("pyramid").appendChild(rowElem);
   }
}

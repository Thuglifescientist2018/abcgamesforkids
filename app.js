// reusable variables
let image = document.querySelectorAll("#search_result img")[1]
let searchBox = document.querySelector("#content input");
let spinner = document.querySelector("#spinner");
let searchResult = document.querySelector("#search_result");
let drawingboard = document.querySelector("#canvas");
function init() { 
  image.style.display = "none"; 
  spinner.style.display = "none";
}
init();
function changeImage(name) {
    image.style.display = "none";
    spinner.style.display = "block";
    if(name) { 
        
        image.setAttribute("src", "./AtoZ/" + name.toLowerCase() + ".gif");
    }
    else {
    // changes image according to the search
    image.setAttribute("src", "./AtoZ/" + searchBox.value.toLowerCase() + ".gif");
    }
    
}
//getResult receives the data from handwriting js and we send the first word from the array to changeImage function

function getResult(result) { // used in handwriting.js
 
  let data = result.split(',')[0];
 
  changeImage(data)
}

function imageNotFound() {
  const errorText = "Image Not Found";
  const error = document.createElement("h3");
  error.setAttribute("id", "imagenotfound");
  error.appendChild(document.createTextNode(errorText));
  searchResult.appendChild(error)
  image.style.display = "none";
  spinner.style.display = "none";
  setTimeout(() => {
    error.remove();
  }, 3000);
  
}

image.addEventListener("load", function() {
  if(this.complete) {
    spinner.style.display = "none";
    image.style.display = "block";
  }
  
})
image.addEventListener("error", imageNotFound);


document.addEventListener("keydown", function(e) {

  switch(e.keyCode) {
    case 101:
      canvas.erase();
      break;
    case 117:
      canvas.undo();
      break;
    case 114:
      canvas.redo();
      break;
    case 115:
      canvas.recognize();
      break;
    default:
      console.log(e.key)
  }
 
  if(e.ctrlKey && e.keyCode === 90) { // ctrl + z
    canvas.undo();
      
  }

})
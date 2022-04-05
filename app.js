// reusable variables
let image = document.querySelectorAll("#search_result img")[1]
let searchBox = document.querySelector("#content input");
let spinner = document.querySelector("#spinner");

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


function getResult(result) { // used in handwriting.js
 
  let data = result.split(',')[0];
 
  changeImage(data)
}

image.addEventListener("load", function() {
  if(this.complete) {
    spinner.style.display = "none";
    image.style.display = "block";
  }
  
})
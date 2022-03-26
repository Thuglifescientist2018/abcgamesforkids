// reusable variables
let image = document.querySelector("#search_result img")
let searchBox = document.querySelector("#content input");

function changeImage(name) {
    
    if(name) { 
        console.log(name.toLowerCase())
        image.setAttribute("src", "./AtoZ/" + name.toLowerCase() + ".gif");
    }
    else {
    // changes image according to the search
    
    image.setAttribute("src", "./AtoZ/" + searchBox.value.toLowerCase() + ".gif");
    }
    
}

function getResult(result) {
 
  let data = result.split(',')[0];
  changeImage(data)
}
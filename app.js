// reusable variables
let image = document.querySelector("#search_result img")
let searchBox = document.querySelector("#content input");

function changeImage() {
    
    // changes image according to the search
    image.setAttribute("src", "https://source.unsplash.com/720x480/?" + searchBox.value)
    
}
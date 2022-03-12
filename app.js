// reusable variables
let image = document.querySelector("#search_result img")
let searchBox = document.querySelector("#content input");
let atoz = [
    "apple", "ball", "cat", "dog", "elephant", "fox", "goat", "horse",
    "ink", "jug", "kite", "lion", "monkey", "nut", "orange", "pan", "queen", "rabbit",
    "swing", "tiger", "umbrella", "van", "watch", "x-ray", "zoo"
]
function changeImage() {
    
    // changes image according to the search
    image.setAttribute("src", "./atoz/" + searchBox.value + ".gif");
    
}
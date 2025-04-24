//get the elements needed
const shareButton = document.querySelector("#share-button");
const shareMenu = document.querySelector("#share-menu-wrapper")



//link a function on click to the share button
shareButton.onclick = openShareMenu


function openShareMenu(){
  shareMenu.classList.toggle("active")
}
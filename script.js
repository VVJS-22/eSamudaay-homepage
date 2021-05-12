const activeToggle = (element) => {
 let deactiveCurrent = document.querySelector(".active");
 deactiveCurrent.classList.remove("active");
 element.classList.add("active");
}

let search = false;

const setBorder = () => {
 if (search  === false) {
  let element = document.querySelector(".search-bar");
  element.classList.add("selected");

  let searchIcon = document.querySelector(".fas.fa-search");
  let backIcon  = document.createElement("i");
  backIcon.setAttribute("class","fas fa-chevron-left");
  let searchIconDiv = document.querySelector(".search-icon");
  searchIconDiv.removeChild(searchIcon);
  searchIconDiv.appendChild(backIcon);
  
  search = true;
 }
}

const removeBorder = (event) => {
 if (search === true) {
 let element = document.querySelector(".search-bar");
 element.classList.remove("selected");
 
 let backIcon = document.querySelector(".fas.fa-chevron-left");
 let searchIcon  = document.createElement("i");
 searchIcon.setAttribute("class","fas fa-search");
 let searchIconDiv = document.querySelector(".search-icon");
 searchIconDiv.removeChild(backIcon);
 searchIconDiv.appendChild(searchIcon);
 event.stopPropagation();
 search = false;
 }
}

let searchBar = document.querySelector("#search");
searchBar.addEventListener('click', setBorder);

let container = document.querySelector(".search-icon");
container.addEventListener('click', removeBorder);

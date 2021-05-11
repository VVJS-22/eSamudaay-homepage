const activeToggle = (element) => {
 deactiveCurrent = document.querySelector(".active");
 deactiveCurrent.classList.remove("active");
 element.classList.add("active");
}

let search = false;

const setBorder = () => {
 if (search  === false) {
  element = document.querySelector(".search-bar");
  element.classList.add("selected");

  searchIcon = document.querySelector(".fas.fa-search");
  backIcon  = document.createElement("i");
  backIcon.setAttribute("class","fas fa-chevron-left");
  searchIconDiv = document.querySelector(".search-icon");
  searchIconDiv.removeChild(searchIcon);
  searchIconDiv.appendChild(backIcon);
  search = true;
 }
}

const removeBorder = (event) => {
 if (search === true) {
 element = document.querySelector(".search-bar");
 element.classList.remove("selected");

 backIcon = document.querySelector(".fas.fa-chevron-left");
 searchIcon  = document.createElement("i");
 searchIcon.setAttribute("class","fas fa-search");
 searchIconDiv = document.querySelector(".search-icon");
 searchIconDiv.removeChild(backIcon);
 searchIconDiv.appendChild(searchIcon);
 event.stopPropagation();
 search = false;
 }
}

searchBar = document.querySelector("#search");
searchBar.addEventListener('click', setBorder);

container = document.querySelector(".search-icon");
container.addEventListener('click', removeBorder);

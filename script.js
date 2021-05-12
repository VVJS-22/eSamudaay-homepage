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

let box = document.querySelectorAll(".video-container");
let width = box[0].offsetWidth + 30;
let slide = document.querySelector(".slide");
slide.style.minWidth = `${box.length * width}px`;
let start;
let change;

let videosContainer = document.querySelector(".product-videos");
videosContainer.addEventListener('dragstart', (e) => {
 start = e.clientX;
})

videosContainer.addEventListener('dragover', (e) => {
 e.preventDefault();
 let touch = e.clientX;
 change = start - touch;
})

let slideshow = () => {
 if (change > 0) {
  videosContainer.scrollLeft += window;
 }else {
  videosContainer.scrollLeft += window;
 }

}

videosContainer.addEventListener('dragend', slideshow);


videosContainer.addEventListener('touchstart', (e) => {
 start = e.touches[0].clientX;
})

videosContainer.addEventListener('touchover', (e) => {
 e.preventDefault();
 let touch = e.touches[0].clientX;
 change = start - touch;
})


videosContainer.addEventListener('touchend', slideshow);


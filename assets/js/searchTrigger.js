function toggleSearchBar() {
  const searchBar = document.querySelector('.header-bottom__search');

  searchBar && searchBar.classList.toggle("searching");
}

function initSearchTrigger() {
  const searchIcon = document.querySelector(".js-search-trigger");
  

  searchIcon && searchIcon.addEventListener('click', toggleSearchBar);
}

window.addEventListener("DOMContentLoaded", initSearchTrigger);
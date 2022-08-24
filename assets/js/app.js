// Get elements from DOM
const searchTab = document.querySelector(".global-nav__search__tab"),
  globalNavSearch = document.querySelector(".global-nav__search"),
  globalNavSearchWrapper = document.querySelector(
    ".global-nav__search__wrapper"
  ),
  searchInput = document.querySelector('[data-input="search"]'),
  searchInputRemoveIcon = document.querySelector(
    ".global-nav__search__remove-btn"
  ),
  searchHistoryContainer = document.querySelector(".search-history"),
  globalNavPrimary = document.querySelector(".global-nav__nav"),
  globalNavPrimaryWorkItem = globalNavPrimary.querySelector(
    ".global-nav__primary__item.tools"
  ),
  globalNavPrimaryProfileItem = globalNavPrimary.querySelector(
    ".global-nav__primary__item.profile .primary-tab"
  ),
  globalNavPrimaryMeContent = document.querySelector(
    ".global-nav__primary__me-content"
  ),
  sideModalCloseIcon = document.querySelector(
    ".side-modal__close-dropdown-icon"
  ),
  sideModalContainer = document.querySelector(".side-modal-container"),
  sideModalBackdrop = document.querySelector(".side-modal-container .backdrop"),
  sideModal = sideModalContainer.querySelector(".side-modal"),
  searchBackdrop = document.querySelector(".search-backdrop");

// add Event Listener
searchTab.addEventListener("click", () => {
  searchTab.style.display = "none";
  globalNavPrimary.style.display = "none";
  globalNavSearch.classList.add("show");
  globalNavSearchWrapper.style.display = "block";
  searchBackdrop.style.display = "block";
  searchInput.focus();
});
searchInput.addEventListener("input", () => {
  searchInputRemoveIcon.style.display = "flex";
});
searchInput.addEventListener("click", () => {
  searchHistoryContainer.classList.toggle("active");
});

searchInputRemoveIcon.addEventListener("click", () => {
  searchInput.value = "";
  searchInputRemoveIcon.style.display = "none";
});
searchBackdrop.addEventListener("click", () => {
  searchBackdrop.style.display = "none";
  searchTab.style.display = "block";
  globalNavPrimary.style.display = "block";
  globalNavSearch.classList.remove("show");
  globalNavSearchWrapper.style.display = "none";
  searchInput.value = "";
  searchInputRemoveIcon.style.display = "none";
});
globalNavPrimaryProfileItem.addEventListener("click", () => {
  globalNavPrimaryMeContent.classList.toggle("show");
});
globalNavPrimaryWorkItem.addEventListener("click", () => {
  sideModal.classList.toggle("show");
  sideModalContainer.classList.toggle("show");
  document.body.classList.toggle("fix");
});
sideModalCloseIcon.addEventListener("click", () => {
  sideModal.classList.remove("show");
  sideModalContainer.classList.remove("show");
  document.body.classList.remove("fix");
});
sideModalBackdrop.addEventListener("click", ({ target }) => {
  sideModal.classList.remove("show");
  sideModalContainer.classList.remove("show");
  document.body.classList.remove("fix");
});
// Vanilla js
// window.addEventListener("mouseup", function (event) {
//   if (
//     event.target != globalNavPrimaryMeContent &&
//     event.target.parentNode != globalNavPrimaryMeContent
//   ) {
//     globalNavPrimaryMeContent.classList.remove("show");
//   }
//   console.log(event.target);
// });

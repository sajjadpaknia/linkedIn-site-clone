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
  sortPost = document.querySelector(".sort-post__content");

// add Event Listener
searchTab.addEventListener("click", () => {
  searchTab.style.display = "none";
  globalNavPrimary.style.display = "none";
  globalNavSearch.classList.add("show");
  globalNavSearchWrapper.style.display = "block";
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

// sub header logic
const globalMain = document.querySelector(".global-main"),
  subHeaderNavigation = globalMain.querySelector(".sub-header-nav .navigation"),
  subHeaderNavigationItem = [...subHeaderNavigation.children],
  trackerLine = globalMain.querySelector(".tracker-line");

subHeaderNavigationItem.forEach((item) => {
  let ul = subHeaderNavigation.getBoundingClientRect();
  let li = item.getBoundingClientRect();
  item.addEventListener("click", ({ target }) => {
    subHeaderNavigationItem.forEach((i) => {
      i.classList.remove("active");
    });
    item.classList.add("active");
  });
  item.addEventListener("mouseover", () => {
    trackerLine.style.width = `${li.width}px`;
    trackerLine.style.left = li.left - ul.left + "px";
  });
  item.addEventListener("mouseleave", () => {
    trackerLine.style.width = 0;
  });
});

const sortOptionsTitle = sortPost.querySelector(".sort-options__title");
const sortPostDropdown = sortPost.querySelector(".sort-post-dropdown");
const sortPostDropdownItems = [...sortPostDropdown.children];
sortPost.addEventListener("click", () => {
  sortPostDropdown.classList.toggle("active");
});
sortPostDropdownItems.forEach((item) => {
  item.addEventListener("click", () => {
    sortPostDropdownItems.forEach((i) => {
      i.classList.remove("active");
    });
    item.classList.add("active");
    if (item.classList.contains("active")) {
      sortOptionsTitle.innerHTML = item.innerHTML;
    }
  });
});
const likeIcon = document.querySelectorAll(".post__action-icon.like");
const likeCounter = document.querySelectorAll(".action-counter.like");
likeIcon.forEach((item, idx) => {
  item.addEventListener("click", function () {
    this.classList.toggle("active");
    if (this.classList.contains("active")) {
      likeCounter[idx].innerHTML = Number(likeCounter[idx].innerHTML) + 1;
    } else {
      likeCounter[idx].innerHTML = Number(likeCounter[idx].innerHTML) - 1;
    }
  });
});

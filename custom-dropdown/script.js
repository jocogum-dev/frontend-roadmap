const dropdownButton = document.querySelector(".dropdown-button");
const dropdownList =document.querySelector(".dropdown-list");
const listItems = document.querySelectorAll(".list-item");

function toggleDropdown() {
    dropdownList.classList.toggle("active");
}
function selectedItem() {
    listItems.forEach(el => {
        el.classList.remove("selected");
    });
    dropdownButton.innerText = this.innerText;
    this.classList.add("selected");
}

dropdownButton.addEventListener("click", toggleDropdown);
listItems.forEach(el => {
    el.addEventListener('click', selectedItem);
});
function showThis(e) {
    let accordions = document.querySelector(".accordions");
    let activeAccordion = e.parentElement;

    if(activeAccordion.classList.contains("active")) {
        activeAccordion.classList.toggle("active");
    } else {
        for (let i = 0; i < accordions.children.length; i++) {
            accordions.children[i].classList.remove("active");
        }
        activeAccordion.classList.add("active");
    }
}

function showTab(e) {
    // remove all active buttons
    const tab = document.querySelector(".tab__links");
    const buttonId = e.id.split("_")[1];
    for (let button of tab.children) {
        button.classList.remove("active");
    }
    // add active class on clicked button
    e.classList.add("active");

    // remove all active contents
    const contents = document.querySelectorAll(".content");
    for (let content of contents) {
        content.classList.remove("active");
    }
    
    // get the specific element with content class
    let activeContent = "";
    if(contents.length > 0) {
        activeContent = contents[buttonId-1];
        activeContent.classList.add("active");
    }
}

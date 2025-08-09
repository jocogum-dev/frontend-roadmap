// variables
const mainElement = document.querySelector("main")
const popupElement = document.querySelector(".popup");
const subredditInput = document.querySelector(".popup input");
const popupButton = document.querySelector(".popup button");

// eventlisteners
popupButton.addEventListener("click", addLane);

// functions
function addLane() {
    fetchData(subredditInput.value)

    const laneSection = document.createElement("section");
    laneSection.classList.add("lane");

    const divElement = document.createElement("div");
    const titleTag = document.createElement("h2");
    titleTag.textContent = "/r/test";
    const actionDiv = document.createElement("div");
    const actionRefresh = document.createElement("button");
    actionRefresh.textContent = "refresh";
    const actionDelete = document.createElement("button");
    actionDelete.textContent = "delete";

    actionDiv.appendChild(actionRefresh);
    actionDiv.appendChild(actionDelete);
    divElement.appendChild(titleTag);
    divElement.appendChild(actionDiv);

    const ulElement = document.createElement("ul");
    const liElement = document.createElement("li");
    const spanElementUpvote = document.createElement("span");
    spanElementUpvote.textContent = "123";
    const spanElementTitle = document.createElement("span");
    spanElementTitle.textContent = "hello world";

    liElement.appendChild(spanElementUpvote);
    liElement.appendChild(spanElementTitle);
    ulElement.appendChild(liElement);

    laneSection.appendChild(divElement);
    laneSection.appendChild(ulElement);

    mainElement.appendChild(laneSection);
    mainElement.appendChild(popupElement);
}

async function fetchData(subreddit) {
    const url = `https://api.reddit.com/r/${subreddit}.json`;
    const proxy = 'https://cors-anywhere.herokuapp.com/'; 
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json(); // or .text(), .blob(), etc.
        console.log(data);
    } catch (error) {
        console.error('Fetch error:', error);
    }
}
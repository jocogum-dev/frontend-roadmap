// variables
const dropdownElement = document.querySelector("#language");
const refreshElement = document.querySelector("#refresh");
const retryElement = document.querySelector("#retry");
const stateElement = document.querySelector(".state");
const repositoryElement = document.querySelector(".repository");
const dropdownDataUrl = "https://raw.githubusercontent.com/kamranahmedse/githunt/master/src/components/filters/language-filter/languages.json";

// event listeners
document.addEventListener('DOMContentLoaded', function () {
    // Your code here
    getDropdownData();
});
dropdownElement.addEventListener('change', function () {
    updateState("active","Loading, please wait... ");
    getRepositoriesData(this.value);
});
refreshElement.addEventListener('click', function () {
    updateState("active","Loading, please wait... ");
    getRepositoriesData(dropdownElement.value);
});
retryElement.addEventListener('click', function () {
    updateState("active","Loading, please wait... ");
    getRepositoriesData(dropdownElement.value);
});

// functions
// fetch url
async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('HTTP error ' + response.status);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        // console.error('Fetch failed:', error);
        updateState("error", `Error failed: ${error}`);
    }
}
// get dropdown data
async function getDropdownData() {
    const data = await fetchData(dropdownDataUrl);
    data.forEach(item => {
        const option = document.createElement('option');
        option.value = item.value.toLowerCase(); // e.g., 'apple'
        option.textContent = item.title;         // e.g., 'Apple'
        dropdownElement.appendChild(option);
    });
}

// get repositories
async function getRepositoriesData(language) {
    const repositoriesDataUrl = `https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc`;
    const data = await fetchData(repositoriesDataUrl);
    const randomInt = Math.floor(Math.random() * 30);
    updateRepository(data.items[randomInt]);
}

// update repository
function updateRepository(repo){
    const contentElement = document.querySelector(".repository .content");
    contentElement.classList.add("active");

    const header = document.createElement("h1");
    const description = document.createElement("p");
    const icons = document.createElement("div");
    icons.classList.add("icons");
    const language = document.createElement("span");
    language.classList.add("language");
    const stars = document.createElement("span");
    stars.classList.add("stars");
    const forks = document.createElement("span");
    forks.classList.add("forks");
    const issues = document.createElement("span");
    issues.classList.add("issues");

    

    header.textContent = repo.name;
    description.textContent = repo.description;
    forks.textContent = repo.forks_count;
    language.textContent = repo.language;
    stars.textContent = repo.stargazers_count;
    issues.textContent = repo.open_issues_count;

    icons.appendChild(language);
    icons.appendChild(stars);
    icons.appendChild(forks);
    icons.appendChild(issues);

    contentElement.textContent = "";
    contentElement.appendChild(header);
    contentElement.appendChild(description);
    contentElement.appendChild(icons);
    updateState("done","");
}

// update state
function updateState(status, message) {
    console.log(status);
    const divElement = stateElement.querySelector("div");
    if(status === "done") {
        divElement.classList.remove("error");
        divElement.classList.add("inactive");
        divElement.textContent = "";
    }else if(status === "error") {
        divElement.classList.add("error");
        document.querySelector(".repository .content").classList.remove("active");
    } else {
        divElement.classList.remove("error");
        divElement.classList.remove("inactive");
        divElement.textContent = message;
    }
}
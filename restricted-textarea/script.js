function countCharacter(event) {
    let limitStatus = document.querySelector(".limit");
    const maxLimit = 250;
    let numberOfCharacters = event.target.value.length;
    limitStatus.textContent = `${numberOfCharacters}/${maxLimit}`;

    if(numberOfCharacters>=maxLimit ) {
        document.getElementById("message").disabled = true;
    }
};
let messageInput = document.getElementById("message");
messageInput.addEventListener("input", countCharacter);
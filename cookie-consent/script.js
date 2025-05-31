document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        let cookieConsent = localStorage.getItem('modal-cookies');

        if(!cookieConsent) {
            toggleModal();
        }
        else {
            console.log("done");
        }
        
      }, 3000); // 2000 milliseconds = 2 seconds
  });

function toggleModal() {
    let modalElement = document.querySelector(".modal");
    modalElement.classList.toggle("active");
};

function saveCookies(){
    localStorage.setItem('modal-cookies', 'save');
    toggleModal();
};
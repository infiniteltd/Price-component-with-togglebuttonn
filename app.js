const toggleBtn = document.getElementById("toggle-btn");

// check toggle button
function toggleBttn() {
    toggleBtn.classList.toggle("active");

    const h3 = document.querySelectorAll('h3');
    h3.forEach((toggleBtn) => {
        toggleBtn.classList.toggle('hide');
    });
}


// change the prices according to the option plan
const toggleClick = (checked) => {
    const h3 = document.querySelectorAll('h3');

    if (checked == toggleBtn.checked) {
        toggleBtn.click();
        h3.forEach((toggleBtn) => {
            toggleBtn.classList.toggle('hide');
        });
    }
};

toggleBtn.addEventListener('click', toggleClick);
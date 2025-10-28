const overlay = document.getElementById('overlay');

const days = document.getElementById('wrap-days');
const day_children = days.querySelectorAll('*');

const closeBtn = document.getElementById('closeBtn');
const dialog = document.getElementById('dialog');


day_children.forEach(element => {
    element.addEventListener('click', () => {
        overlay.classList.remove("hidden");
        dialog.focus();
    });
});

closeBtn.addEventListener("click", () => {
    overlay.classList.add("hidden");
});

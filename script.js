const overlay = document.getElementById('overlay');

const days = document.getElementById('wrap-days');
const day_children = days.querySelectorAll('*');

const closeBtn = document.getElementById('closeBtn');
const dialog = document.getElementById('dialog');

const dataReservation = {};


day_children.forEach(element => {
    element.addEventListener('click', () => {
        overlay.classList.remove("hidden");
        dialog.focus();
    });
});

const res_title = document.getElementById('res-title');
res_title.addEventListener("input", () => {
    console.log(res_title.value);
})

const num_people = document.getElementById('num-people');
num_people.addEventListener("input", () => {
    console.log(num_people.value)
})



closeBtn.addEventListener("click", () => {
    overlay.classList.add("hidden");
});



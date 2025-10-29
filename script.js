const overlay = document.getElementById('overlay');

const days = document.getElementById('wrap-days');
const day_children = days.querySelectorAll('div');

const closeBtn = document.getElementById('closeBtn');
const dialog = document.getElementById('dialog');

const allData = {};

let selectedDay = null;
day_children.forEach(element => {
    element.addEventListener('click', () => {
        const dayNumber = element.querySelector('span')?.textContent.trim();
        if (!dayNumber) return;
        selectedDay = dayNumber;
        overlay.classList.remove("hidden");
        dialog.focus();
    });
});


const res_title = document.getElementById('res-title');
const num_people = document.getElementById('num-people');
const start_time = document.getElementById('start-time');
const end_time = document.getElementById('end-time');
const reservation_type = document.getElementById('reservation-type');

closeBtn.addEventListener("click", () => {
    overlay.classList.add("hidden");
});

const ConfirmBtn = document.getElementById('ConfirmBtn');
ConfirmBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if((res_title.value).length < 5){
        console.error("wrong nane input");
        res_title.style.border = "1px solid red";
        return;
    }
    
    if (!allData[selectedDay]) allData[selectedDay] = [];
    allData[selectedDay].push({
        name: res_title.value,
        people: num_people.value,
        start: start_time.value,
        end: end_time.value
    })
    console.log(allData);
    overlay.classList.add('hidden')
})


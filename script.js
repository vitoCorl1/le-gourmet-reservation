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

closeBtn.addEventListener("click", () => overlay.classList.add("hidden"));

const ConfirmBtn = document.getElementById('ConfirmBtn');
ConfirmBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    //name comfirmation
    const ConfirmName = document.getElementById('Confirm-name');
    if(!(res_title.value) || res_title.value == ""){
        res_title.style.border = "1px solid red";
        ConfirmName.classList.remove('hidden');
        ConfirmName.style.color = 'red'
        return;
    }else if((res_title.value).length < 2){
        ConfirmName.style.color = 'red'
        ConfirmName.classList.remove('hidden');
        res_title.style.border = "1px solid red";
        return;
    }else{
        ConfirmName.classList.add('hidden');
        res_title.style.border = "1px solid green";
    }

    //number of gess comfirmation 
    const ConfirmPoeple = document.getElementById('Confirm-poeple');
    if(!(num_people.value) || num_people.value == ""){
        num_people.style.border = "1px solid red";
        ConfirmPoeple.classList.remove('hidden');
        ConfirmPoeple.style.color = 'red'
        console.log(ConfirmPoeple.classList)
        return;
    }else if((num_people.value).length > 4){
        console.error("wrong nane input");
        ConfirmPoeple.style.color = 'red'
        ConfirmPoeple.classList.remove('hidden');
        num_people.style.border = "1px solid red";
        return;
    }else{
        ConfirmPoeple.classList.add('hidden');
        ConfirmPoeple.style.border = "1px solid green";
    }

    //time comfirmation
    if(start_time.value > end_time.value){
        start_time.style.border = "1px solid red"; 
        end_time.style.border = "1px solid red"; 
        return;
    }

    if(!(reservation_type.value)) {
        reservation_type.style.border = "1px solid red"; 
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
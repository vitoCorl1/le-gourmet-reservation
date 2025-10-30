const overlay = document.getElementById('overlay');
const days = document.getElementById('wrap-days');
const day_children = days.querySelectorAll('div');
const closeBtn = document.getElementById('closeBtn');
const dialog = document.getElementById('dialog');
const dayElements = document.querySelectorAll('#wrap-days > div');

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
        num_people.style.border = "1px solid green";
    }

    //time comfirmation
    if(start_time.value > end_time.value){
        start_time.style.border = "1px solid red"; 
        end_time.style.border = "1px solid red"; 
        return;
    }else{
        start_time.style.border = "1px solid green"; 
        end_time.style.border = "1px solid green"; 
    }

    if(!(reservation_type.value)) {
        reservation_type.style.border = "1px solid red"; 
        return;
    }else{
        reservation_type.style.border = "1px solid green"; 
    }

    //add reservation data to the object 
    if (!allData[selectedDay]) allData[selectedDay] = [];
    allData[selectedDay].push({
        name: res_title.value,
        people: num_people.value,
        start: start_time.value,
        end: end_time.value
    })

    // find the clicked day
    const targetDayElement = [...day_children].find(el => {
        const span = el.querySelector('span');
        return span && span.textContent.trim() === selectedDay;
    });

    // inject visual mark
    if (targetDayElement) {
        const reservationMark = document.createElement('div');
        const deleteReservation = document.createElement('button');
        const editReservation = document.createElement('button');
        
        reservationMark.className = 'mt-1 h-2 w-full bg-gray-700 flex rounded';
        deleteReservation.className = 'w-2 h-2 rounded bg-red-500';
        editReservation.className = 'w-2 h-2 rounded bg-blue-500';
        
        reservationMark.title = `${allData.name} (${allData.start}-${allData.end})`;
        deleteReservation.title = '*';
        editReservation.title = '-';

        targetDayElement.appendChild(reservationMark);
        reservationMark.appendChild(deleteReservation);
        reservationMark.appendChild(editReservation);

        const index = allData[selectedDay].length - 1;
        reservationMark.dataset.day = selectedDay;
        reservationMark.dataset.index = index;


        reservationMark.addEventListener('mouseenter', (e) => {
            const day = e.target.dataset.day;
            const idx = e.target.dataset.index;
            const data = allData[day][idx];
            
            // Create tooltip
            const tooltip = document.createElement('div');
            tooltip.id = 'hover-tooltip';
            tooltip.className = 'absolute bg-gray-800 text-white text-xs rounded px-2 py-1 z-50 shadow-lg';
            tooltip.textContent = `${data.name} (${data.start} to ${data.end})`;
            tooltip.style.left = e.pageX + 'px';
            tooltip.style.top = (e.pageY - 40) + 'px';
            document.body.appendChild(tooltip);
        });

        reservationMark.addEventListener('mouseleave', () => {
            const tooltip = document.getElementById('hover-tooltip');
            if (tooltip) tooltip.remove();
        });

        reservationMark.addEventListener('click', (e) => {
        e.stopPropagation();
        const day = e.target.dataset.day;
        const idx = e.target.dataset.index;
        const data = allData[day][idx];

        const Display = document.getElementById('display');
        
        Display.classList.remove('hidden');
        res_title.value = data.name;
        num_people.value = data.people;
        start_time.value = data.start;
        end_time.value = data.end;
        reservation_type.value = data.type;
        
        const rRBtn = document.getElementById('r-R-Btn');
        
        deleteReservation.addEventListener("click" ())

        rRBtn.addEventListener("click", () => Display.classList.add("hidden"));
        });
    }

    console.log(allData);
    overlay.classList.add('hidden')
})
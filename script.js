const day20 = document.getElementById('wrap-days');
const children = day20.querySelectorAll('*');

children.forEach(element => {
    element.addEventListener('click', pop);
});
function pop(e){
    e.preventDefault();
    alert('work :)')
}
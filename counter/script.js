let sum = 0;
const count = document.getElementById('count');
document.getElementById('plus').addEventListener('click', function(){
    count.innerText = sum += 1;
})
document.getElementById('minus').addEventListener('click', function(){
    if (sum === 0) {
        return 0;
    } 
    count.innerText = sum -= 1;
})
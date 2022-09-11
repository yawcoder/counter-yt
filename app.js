let count = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn){
    btn.addEventListener('click', (e) => {
        const clickedBtn = e.currentTarget.classList;
        if(clickedBtn.contains('decrease')){
            count--;
        }else if(clickedBtn.contains('increase')){
            count++;
        }else{
            count = 0;
        }
        if(count < 0){
            value.style.color = 'red';
        }else if(count > 0){
            value.style.color = 'blue';
        }else{
            value.style.color = 'black';
        }
        value.innerText = count;
    })
})
const counter=document.getElementById('counter');
const increment=document.getElementById('increase');
const decrement=document.getElementById('decrease');
const clear=document.getElementById('clear');
const error=document.getElementById('error');

let count=0;


increment.addEventListener('click', () => {
    count++;
    counter.innerHTML = `Your Current Count is : ${count}`;
    clear.style.display='inline-block';
    error.style.display='none';
});

decrement.addEventListener('click', () => {
    if(count>=1)count--;
    if(count==0){
        error.style.display='block';
        error.innerHTML='Error : Cannot go below 0';
        clear.style.display='none';
    }
    counter.innerHTML = `Your Current Count is : ${count}`;
});

clear.addEventListener('click', () => {
    count=0;
    counter.innerHTML =`Your Current Count is : ${count}`;
    clear.style.display='none';
    error.style.display='none';
});
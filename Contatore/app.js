let counter = document.querySelector('.counter');
const addCont = document.querySelector('#AddCountBtn');
const lowCont = document.querySelector('#lowerCountBtn');

let count = 0;

addCont.addEventListener('click',incrementCounter);
lowCont.addEventListener('click',LowerCounter);

function incrementCounter () {
  count++;
  counter.innerHTML = count;
  if (counter.innerHTML>'0')
   counter.style.color = 'green';
   else if (counter.innerHTML === '0')
    counter.style.color = 'white';

    counter.animate([{opacity:'0.2'},{opacity:'1.0'}],
     {duration:500,fill:'forwards'});
}

function LowerCounter () {
    count--;
    counter.innerHTML = count;
    if (counter.innerHTML<'0')
     counter.style.color = 'red';
    else if (counter.innerHTML === '0')
     counter.style.color = 'white';

     counter.animate([{opacity:'0.2'},{opacity:'1.0'}],
     {duration:1000,fill:'forwards'});
     
}



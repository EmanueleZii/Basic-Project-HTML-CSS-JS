const colorBtn = document.querySelector('.ColorBtn');
const bodyBcg = document.querySelector('body');

const colors = ['yellow','red','green','#3b5998'];

colorBtn.addEventListener('click',()=>{
     var number = Math.floor(Math.random()*colors.length);
     bodyBcg.style.backgroundColor = colors[number];
});



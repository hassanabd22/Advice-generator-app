
let advices = document.querySelector('.advice');
let id = document.getElementById('id');
let text = document.getElementById('text');

fetch('https://api.adviceslip.com/advice')
  .then(response => response.json())
  .then(data => {
    id.innerHTML =`Advice # ${data.slip.id} `;
    text.innerHTML = `"${data.slip.advice}" ` ;
    
});

//   Loader
// For Live Projects
window.addEventListener('load',function(){
    document.querySelector('body').classList.add("loaded")  
  });
  
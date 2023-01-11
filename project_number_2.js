let openBtn = document.querySelector('.open-btn');
let modelcont = document.getElementById('model-container');
let closebtn = document.getElementById('close-btn');

openBtn.addEventListener('click', function(){

    modelcont.style.display = 'block';
})

closebtn.addEventListener('click', function(){

    modelcont.style.display = 'none';
})

window.addEventListener('click', function(e){
    
    if(e.target === modelcont){
        modelcont.style.display = 'none';
    }
})

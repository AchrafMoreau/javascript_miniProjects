let section = document.querySelectorAll('.section'); 

section.forEach(elm => {
    elm.addEventListener('click', function(){
        this.classList.toggle('active');
    })
})
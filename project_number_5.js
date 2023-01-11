let addbtn = document.querySelector('.addbtn');
let container = document.getElementById('task_container');
let inputtask = document.getElementById('input_task');

addbtn.addEventListener('click', function(){

    let div = document.createElement('div');
    div.classList.add('task');

    let li = document.createElement('p');
    li.innerText = `${inputtask.value}`;
    div.appendChild(li);


    let check = document.createElement('button');
    check.innerHTML = `<i class="fa-solid fa-check"></i>`;
    check.classList.add('check');
    div.appendChild(check);

    let trash = document.createElement('button');
    trash.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    trash.classList.add('trash');
    div.appendChild(trash);

    if(`${inputtask.value}` === ""){
        alert("please add some value !!");
    }else{

        container.appendChild(div);
    }

    inputtask.value = "";

    check.addEventListener('click', function(){
        if(check.parentElement.style.textDecoration === "line-through"){
            check.parentElement.style.textDecoration = "none";
        }else{
            check.parentElement.style.textDecoration = "line-through";
        }
        
    });

    trash.addEventListener('click', function(e){
        let target = e.target;
        target.parentElement.parentElement.remove();
    })
});

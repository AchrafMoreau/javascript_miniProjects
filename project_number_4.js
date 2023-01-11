let playbtn = document.querySelector(".play-btn");
let reset = document.querySelector(".reset-btn");

let seconds = 0;
let minites = 0;
let hours = 0;
leadingSecond = 0;
leadingMinites = 0;
leadingHours = 0;

let btn_status = "stopped";
let invertime = null;

function timer(){
    seconds++;
    if(seconds /60 === 1){
        seconds = 0;
        minites++;
        if(minites /60 === 1){
            minites = 0;
            hours++
        }
    }
    if(seconds < 10){
        leadingSecond = "0" + seconds.toString();
    }else{
        leadingSecond = seconds;
    }
    if(minites < 10){
        leadingMinites = "0" + minites.toString();
    }else{
        leadingMinites = minites;
    }
    if(hours < 10){
        leadingHours = "0" + hours.toString();
    }else{
        leadingHours = hours;
    }

    let stopplay = document.getElementById('timer')
    stopplay.innerText = leadingHours + ":" + leadingMinites + ":" + leadingSecond;
}
playbtn.addEventListener('click', function(){
    let htmlcontent = document.querySelector(".play-btn")
    if(btn_status === 'stopped'){
        invertime = window.setInterval(timer, 1000);
        htmlcontent.innerHTML = `<i class="fa-solid fa-pause" id="play"></i>`;
        btn_status = "played";
    }else{
        window.clearInterval(invertime);
        htmlcontent.innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
        btn_status = "stopped";
    }
});

reset.addEventListener('click', function(){
    window.clearInterval(invertime);
    seconds = 0;
    hours = 0;
    minites = 0;

    document.getElementById('timer').innerText = "00:00:00";
})

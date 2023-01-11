let colorbtn = document.getElementById('color_btn');
let hexbtn = document.querySelector('.hex_btn');
let simplbtn = document.querySelector('.simple_btn');
let titlespan = document.querySelector("#color");
console.log(simplbtn);

const simple = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];

const hex = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

simplbtn.addEventListener('click', function(){
    simplbtn.classList.add('active');
    hexbtn.classList.remove('active');
    colorbtn.addEventListener('click', function(){
        let random = Math.floor(Math.random()* simple.length);
        titlespan.textContent = simple[random];
        document.body.style.backgroundColor = simple[random];
    });
});
hexbtn.addEventListener('click', function(){
    hexbtn.classList.add('active');
    simplbtn.classList.remove('active');1
    colorbtn.addEventListener('click', function(){
        let hexColor = '#';
        for(i = 0; i<6; i++){
            let random = Math.floor(Math.random() * hex.length);
            hexColor += hex[random];
        };     
        titlespan.textContent = hexColor;
        document.body.style.backgroundColor = hexColor;
    });
});
const box = document.querySelector(".container");
const btn = document.querySelector("button");
const palete1 = document.querySelector(".palete1");
const palete2 = document.querySelector(".palete2");
const value1 = document.querySelector(".value1");
const value2 = document.querySelector(".value2");

let a;
function gradientBackground(){

    function random_color(a) {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        a += "rgb(" + r + "," + g + "," + b + ")";
        console.log(a);
        return a;
    }
    
    let color1 = random_color('');
    let color2 = random_color('');

    const gradient = "linear-gradient(to left" + ", " + color1 + ", " + color2 + ")";
    box.style.background = gradient;
    palete1.innerHTML = color1;
    value1.style.background = color1;
    palete2.innerHTML = color2;
    value2.style.background = color2;
}

btn.addEventListener("click", gradientBackground); 

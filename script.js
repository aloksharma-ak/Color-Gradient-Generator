let btn1 = document.getElementById("myButton");
let btn2 = document.getElementById("myButton2");
let copyDiv = document.querySelector(".copyCode");
let rgb1 = "#000";
let rgb2 = "#fff";

const hexValues = () => {
    let myHexValues = "0123456789abcdef";
    let colors = "#";
    for(let i = 0; i < 6; i++){
        colors = colors + myHexValues[Math.floor(Math.random()*16)];
    }
    return colors;
};

const handleButton1 = () => {
    rgb1 = hexValues();
    console.log(rgb1);
    btn1.innerHTML = rgb1;
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`
    copyDiv.innerHTML = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2});`
};

const handleButton2 = () => {
    rgb2 = hexValues();
    console.log(rgb2);
    btn2.innerHTML = rgb2;
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`
    copyDiv.innerHTML = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2});`
};

btn1.addEventListener("click", handleButton1);
btn2.addEventListener("click", handleButton2);

copyDiv.addEventListener("click", () => {
    let copy = navigator.clipboard.writeText(copyDiv.innerHTML);
    alert("Text Copied.")
    console.log(copy);
})


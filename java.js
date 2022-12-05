const button = document.getElementById("btn");
const body = document.body;
const colours = ['red','blue','black','grey','green','purple'];

 button.addEventListener('click',changebackground)
 function changebackground()
 {
    const index = Math.floor(Math.random()*colours.length)
    body.style.backgroundColor = colours[index]
 }
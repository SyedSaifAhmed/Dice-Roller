let randomNumber1 = Math.floor((Math.random()*6)+1); // 1 to 6
let randomNumber2 = Math.floor((Math.random()*6)+1); // 1 to 6

document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png")
document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png")

// console.log(randomNumber1);
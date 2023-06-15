var n=prompt("what is your name")
document.querySelectorAll("p")[0].innerHTML=n
var x=Math.floor(Math.random()*6)+1;
var y=Math.floor(Math.random()*6)+1;
var a="img"+x+".png"
var b="img"+y+".png"
document.querySelectorAll("img")[0].setAttribute("src",a)
document.querySelectorAll("img")[1].setAttribute("src",b)
if(x==y)
document.querySelectorAll("p")[2].innerHTML="<h1>Draw 🙌</h1>"
else if(x>y)
document.querySelectorAll("p")[2].innerHTML=n+" wins AI loses 👌"
else if(x<y)
document.querySelectorAll("p")[2].innerHTML="AI wins "+n+" loses 👎"


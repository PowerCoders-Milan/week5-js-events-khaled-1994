// define your functions here
// call the functions and connect them to an event
var as = document.querySelector('a');
var st1 = document.getElementById('we');
var st2 = document.getElementById('jav');
var st3 = document.getElementById('pow');

/*as.addEventListener('mousemove',function colo(){
 st1.style.color = "red";
    st2.style.color = "green";
    st3.style.color = "yellow";
    
})*/
//extra
as.addEventListener('mousemove', function color1() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    const randomColor1 = Math.floor(Math.random()*107227215).toString(10);
    const randomColor2 = Math.floor(Math.random()*117237215).toString(11);
    st1.style.backgroundColor = "#" + randomColor;
    st2.style.backgroundColor = "#" + randomColor1;
    st3.style.backgroundColor = "#" + randomColor2;

    color.innerHTML = "#" + randomColor;
  })

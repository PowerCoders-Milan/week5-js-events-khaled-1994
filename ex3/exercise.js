var p = document.querySelector('p');
var but1 = document.getElementById('bt1');
var but2 = document.getElementById('bt2');
var image = document.createElement('img');
document.body.appendChild(image);
var counter = 0 ;
but1.addEventListener('click', function mycounte(){
    counter ++;
    p.innerHTML = counter ;
    if(counter == 10){
   
    image.setAttribute("src","https://tse2.mm.bing.net/th?id=OIP.h3Eqt3wBHuM0tMbslVUcdwHaEo&pid=Api&P=0&w=261&h=164");
    }

})
but2.addEventListener('click', function mycounte2(){
    counter --;
    p.innerHTML = counter ;
    if(counter == -10){
        
    image.setAttribute("src","https://tse2.mm.bing.net/th?id=OIP.h3Eqt3wBHuM0tMbslVUcdwHaEo&pid=Api&P=0&w=261&h=164");
    }
})
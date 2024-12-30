

var image = document.getElementById('mage');
var n = 0;


image_list = [
  { src: "images/1.jpg" },    //0
  { src: "images/2.jpg" },    //1
  { src: "images/3.jpg" },    //2          

]



let number = image_list.length - 1






function prevfunc(){
  n--;

  if (n < 0) {
    n = number
    image.src = image_list[n].src
    // console.log(n)

  }
  else {

    image.src = image_list[n].src
    // console.log(n)
  }
}










function nextfunc() {
  if (n >= number) {
    n = 0;
    image.src = image_list[n].src

  } else {
    n++;
    image.src = image_list[n].src
  }
  // console.log(n);
}









setInterval(()=>{
  nextfunc();
},3000)



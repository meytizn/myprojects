// const navabar = document.getElementById("navbar")
// const btnthem = document.getElementById("btnthem")


// let color_list = ['red', 'blue', 'green', 'yellow']
// let counter = 0
// console.log(counter)
// console.log(color_list)
// console.log(color_list.length)

// btnthem.addEventListener('click', function navcolor() {
//   counter += 1;
//   console.log(counter)
//   navabar.style.backgroundColor = color_list[counter]
//   if (counter === color_list.length - 1) {
//     // alert('no color else');
//     counter = -1
//   }

// })


const btn1 = document.querySelector('#themchanger')
const body = document.querySelector('#body')
const navbar = document.querySelector('#navbar')

color_list = ['blue', 'orange', 'pink',] 
console.log(color_list)
let counter = 0           


btn1.addEventListener('click', (event) => {
  event.preventDefault();
  
  counter += 1;
  console.log(counter);
  body.style.backgroundColor = color_list[counter];
  navbar.style.backgroundColor = color_list[counter]; //0[1] , 1[2]
  btn1.textContent = `# ${color_list[counter]} them  successfully added  . `;


  const defbtn = document.createElement('button');
  defbtn.textContent = '    click to reset color    ';
  defbtn.style.color = 'red';
  btn1.appendChild(defbtn);

    if(counter>=color_list.length-1){counter=-1};


  defbtn.addEventListener('click', () => {
    location.reload();
  })

})





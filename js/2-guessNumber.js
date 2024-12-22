
// const btn1 = document.getElementById("btn1")
// const btn2 = document.getElementById("btn2")
// const btn3 = document.getElementById("btn3")




// let random_number = Math.floor(Math.random() * 3) + 1
// console.log(random_number)



// const result = (btnnum, random_number) => {
//   if (random_number === btnnum.value) { alert('you won') }
//   else { alert('you lost ') }
// }



// let btnnum = 0


// btn1.addEventListener('click', () => {

//   btnnum = 1
//   result(btnnum)
//   return btnnum
// })


// btn2.addEventListener('click', () => {
//   btnnum = 2
//   result(btnnum)
//   return btnnum
// })


// btn3.addEventListener('click', () => {
//   btnnum = 3
//   result(btnnum)
//   return btnnum
// })




// counter is a global var = 0 in 1project setted 
const div_guessnumber = document.getElementById("guessnumber")




div_guessnumber.addEventListener('click', () => {
  div_guessnumber.innerHTML = "number choosed.guess"
  counter += 1
  let guess_number = Math.floor(Math.random() * 3)


  if (counter > 1) { alert('number not choosed ') }

  else {

    for (let i = 1; i <= 3; i++) {


      const btng = document.createElement('button');
      btng.textContent = `${i}`
      btng.setAttribute('class', 'text-[20px] pl-[18px]')
      btng.setAttribute('id', i)
      btng.style.color = 'red';
      guessnumber.appendChild(btng);



      btng.addEventListener('click', () => {
        if (btng.textContent == guess_number) { document.write(`you won the game .<br/> guss number was  ${guess_number}`) }
        else { document.write(`you lose `) }


      })



    }









  }
})








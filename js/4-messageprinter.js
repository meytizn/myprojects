

function messageprinter() {

  const myinput = document.createElement('input')
  myinput.placeholder = 'text somting in here  ...'
  document.body.appendChild(myinput)
  myinput.setAttribute('class', " h-[80px] fixed bottom-[300px] right-10 left-10 px-10")



  const mybutton = document.createElement('button');
  mybutton.textContent = 'send message ';
  mybutton.setAttribute('class', 'h-[50px] fixed bottom-[318px] right-[100px] text-blue-500 font-semi-bold ');
  document.body.appendChild(mybutton);


  mybutton.addEventListener('click', btnsend = () => {
    const div1 = document.createElement('div')


    const text1 = document.createElement('h2')
    text1.textContent = myinput.value + "   printed successfully ."
    text1.setAttribute('class', " h-[60px] fixed bottom-[230px] right-10 left-10 text-green bg-white text-center")
    text1.style.color = "green"
    div1.appendChild(text1)
    document.body.appendChild(div1)


  })

}
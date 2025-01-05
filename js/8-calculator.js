const js_downer = document.querySelector(".js_downer");


const js_downer_func = () => {



  if (counter == 0) {
    const text = js_downer.innerHTML
    js_downer.innerHTML = ''
    js_downer.style.backgroundColor = "white"
    js_downer.classList.toggle("h-[350px]")

    let img_close = document.createElement('img')
    img_close.style.width = "20px"
    img_close.style.margin = "auto"
    img_close.src = "./images/close.png"
    js_downer.appendChild(img_close)



    function close_func() {
      js_downer.classList.remove("h-[350px]")
      img_close.remove()
      js_downer.innerHTML = text
    }


    img_close.addEventListener('click', () => {
      if (1 > 0) {
        close_func()
      }





    })




  }



  counter++;

}







const counter_calcularor = 2
let calculator_on = 0

function calculator() {

  js_downer_func()
  calculator_on++;


  if (calculator_on == 1) {


    const calculator = document.getElementById('calculator')

    for (let i = 1; i <= counter_calcularor; i++) {
      const nums = document.createElement('input')
      nums.setAttribute('class', 'w-[100%]  h-[60px] text-center my-3 text-black')
      nums.innerHTML = i
      nums.setAttribute('id', i)
      nums.setAttribute('placeholder', `enter number ${i}`)
      calculator.appendChild(nums)

    }

    // result
    const btn_result = document.createElement('button')
    btn_result.setAttribute('class', 'w-[50px]  h-[50px] text-center my-3 text-white bg-black rounded-[100%]')
    btn_result.textContent = "op"
    calculator.appendChild(btn_result)



    btn_result.addEventListener('click', () => {

      for (let index = 1; index <= 5; index++) {
        btn_result.style.display = "none"

        const btn_op = document.createElement('button')
        btn_op.setAttribute('class', 'w-[50px]  h-[50px] text-center my-3 text-white bg-black rounded-[100%]')
        btn_op.setAttribute('id', index)


        if (btn_op.id == 1) {
          btn_op.textContent = '+'
          const num1 = document.getElementById('1')
          const num2 = document.getElementById('2')
          btn_op.addEventListener('click', () => { alert(Number(num1.value) + Number(num2.value)) })
        }
        if (btn_op.id == 2) {
          btn_op.textContent = '-'
          const num1 = document.getElementById('1')
          const num2 = document.getElementById('2')
          btn_op.addEventListener('click', () => { alert(Number(num1.value) - Number(num2.value)) })
        }
        if (btn_op.id == 3) {
          btn_op.textContent = '/'
          const num1 = document.getElementById('1')
          const num2 = document.getElementById('2')
          btn_op.addEventListener('click', () => { alert(Number(num1.value) / Number(num2.value)) })
        }

        if (btn_op.id == 4) {
          btn_op.textContent = '*'
          const num1 = document.getElementById('1')
          const num2 = document.getElementById('2')
          btn_op.addEventListener('click', () => { alert(Number(num1.value) * Number(num2.value)); })
        }

        if (btn_op.id == 5) {
          btn_op.textContent = 'ES'
          const num1 = document.getElementById('1')
          const num2 = document.getElementById('2')
          btn_op.addEventListener('click', () => { num1.value = ''; num2.value = '' })
        }

        calculator.appendChild(btn_op)

        //   btn_op.addEventListener('click',(op)=>{
        //     const num1=document.getElementById('1')
        //     const num2=document.getElementById('2')
        //     alert(op)
        //     alert(Number(num1.value)+op+Number(num2.value))
        //  })


      }





    })



  }







}
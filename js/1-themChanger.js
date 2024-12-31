

let counter = 0
const them_list = ['gray', 'black', 'red', 'orange', 'green']

function themchanger() {

  if (counter >= them_list.length - 1) {

    counter = 0

    const body = document.getElementById('body').style.backgroundColor = them_list[counter]
    const navbar_first = document.getElementById('navbar_first').style.backgroundColor = them_list[counter]
    const navbar_second = document.getElementById('navbar_second').style.backgroundColor = them_list[counter]
    const menutopdiv = document.getElementById('menutopdiv').style.backgroundColor = them_list[1]
    const metacolor = document.getElementById('metacolor').setAttribute('content', them_list[counter])

  } else {
    counter++;
    const body = document.getElementById('body').style.backgroundColor = them_list[counter]
    const navbar_first = document.getElementById('navbar_first').style.backgroundColor = them_list[counter]
    const navbar_second = document.getElementById('navbar_second').style.backgroundColor = them_list[counter]
    const menutopdiv = document.getElementById('menutopdiv').style.backgroundColor = them_list[1]
    const metacolor = document.getElementById('metacolor').setAttribute('content', them_list[counter])
    console.log(counter)
  }
}

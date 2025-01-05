
const basket=document.getElementById('basket')

const count_ls=[]
const numberls=0


// function getlocal_func(counter){
// console.log(counter)
// }

const numlist_local=[]

let my_numbs = 0
let myshowerer=0

function getter(num){
 localStorage.setItem('products',num)
 const getls = localStorage.getItem("products")
 basket.innerHTML=getls
  return getls
}

if (getls){

    alert("saved")
   
    
}


function local_storage_func(){
  basket.textContent=my_numbs

  const img_basket=document.createElement('img')
  img_basket.setAttribute('class','w-[50px] absolute top-0 bottom-0 left-0')
  img_basket.src="images/basket.png"
  basket.appendChild(img_basket)

    const img_save=document.createElement('img')
  img_save.setAttribute('class','w-[50px] absolute top-0 bottom-0 right-0')
  img_save.src="images/save.png"
  basket.appendChild(img_save)


  my_numbs+=1
  console.log(my_numbs)

  img_save.addEventListener('click',()=>{
    my_numbs-=1
    alert(`${my_numbs} products saved in localStorage `)
    getter(my_numbs)
  })


}

// localStorage.clear()


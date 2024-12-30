// /// webapi website :https://jsonplaceholder.typicode.com/    ///




// // get method from server
// fetch("https://jsonplaceholder.typicode.com/posts").
// then(response=>response.json()). //get promises
// then(posts=>console.log(posts)).
// catch(error=>console.log(error))




// // Post method

// const newpost={
//   userId: 11, 
//   // id: 2, auto generate 
//   title: 'Mahdi',
//    body: 'Hello , im senior dev'
// }

// fetch("https://jsonplaceholder.typicode.com/posts",{
//   method:'POST',
//   headers:{'Content-Type':'application/json'},
//   body:JSON.stringify(newpost)
// })
// .then(response=>response.json())
// .then(post=>console.log(post))
// .catch(error=>console.log(error))





// // PUT method

// const updatepost={
//   userId: 11, 
//   id: 2 ,
//   title: 'Mahdi updated ',
//    body: 'your post updated successfully . '
// }

// fetch("https://jsonplaceholder.typicode.com/posts/2",{
//   method:'PUT',
//   headers:{'Content-Type':'application/json'},
//   body:JSON.stringify(updatepost)
// })
// .then(response=>response.json())
// .then(post=>console.log(post))








// // PATCH method used to change a specefic variable to all

// const updatepost={

//    body: 'your post updated successfully . '
// }

// fetch("https://jsonplaceholder.typicode.com/posts/2",{
//   method:'PATCH',
//   headers:{'Content-Type':'application/json'},
//   body:JSON.stringify(updatepost)
// })
// .then(response=>response.json())
// .then(post=>console.log(post))






// // Delete method 

// fetch("https://jsonplaceholder.typicode.com/posts/2" , {
//   method:'DELETE',
//   // no header and body exist in delete and promis is acts diffrent with no  then pos
// })
// .then(response=>{
//   console.log(response)
//   if(response.ok){console.log('post deleted ')}
// })
// .catch(error=>console.log('error '))




function get_fetch(){
  function text(posts){
    // document.write(posts)
    const new_div = document.createElement('div')
    new_div.setAttribute('class','w-[100%] h-[350px] fixed top-0 bg-blue-300 transition-all text-black p-5')
    new_div.innerHTML=posts.id+"-"+posts.title +"<br/>"+ posts.body+"<br/><br/>"
    document.body.appendChild(new_div)




    // for(let i=0 ; i<=3;i++){
    //   const btn = document.createElement('h1')
    //   btn.setAttribute('class','w-[100%] h-[350px] text-blue-800')
    //   btn.textContent="ddd"
    //   new_div.appendChild(btn)
    // }



     // create

     const btn_create = document.createElement('h1')
     btn_create.setAttribute('class','w-[100%]  text-white my-3 text-center ')
     btn_create.textContent="create"
     new_div.appendChild(btn_create)
     
 
 
     btn_create.addEventListener('click',()=>{
       
       const prompt_title=prompt("enter your title  ")
       const prompt_body=prompt("enter your context   ")
 
       const postcreate={
         // "id": 1,
         "userId": 1,
         "title":   prompt_title,
         "body": prompt_body,
       }
       fetch("https://jsonplaceholder.typicode.com/posts/",{
           method:'Post',
           headers:{'Content-Type':'application/json'},
           body:JSON.stringify(postcreate)
       })
       .then(response=>response.json())
       .then(posts=>new_div.innerHTML=posts.id+"-"+posts.title+"<br/><br/>"+posts.body)
       .catch(error=>console.log(error))
      })





    // update method
    const btn1 = document.createElement('h1')
    btn1.setAttribute('class','w-[100%]  text-blue-800 my-3 text-center')
    btn1.textContent="update"
    new_div.appendChild(btn1)
    

    const postupdate={
      // "userId": 1,
      // "id": 1,
      "title": "  (title upgraded) sunt aut facere is a hero",
      "body": " (body upgraded)  quia et survived lots of people in Iran  "
    }
     btn1.addEventListener('click',()=>{
      fetch("https://jsonplaceholder.typicode.com/posts/1",{
          method:'PATCH',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify(postupdate)
      })
      .then(response=>response.json())
      .then(posts=>new_div.innerHTML=posts.id+"-"+posts.title+"<br/><br/>"+posts.body)
      .catch(error=>console.log(error))
     })



    // delete method
    const btn_delete = document.createElement('h1')
    btn_delete.setAttribute('class','w-[100%]  text-red-800 my-3 text-center ')
    btn_delete.textContent="delete"
    new_div.appendChild(btn_delete)

    btn_delete.addEventListener('click',()=>{
      fetch("https://jsonplaceholder.typicode.com/posts/1",{
        method:'DELETE'
      })
      .then(response=>{if(response.ok){document.write("post deleted successfully");document.body.backgroundColor="green"}})
        
    })





    

   

  }
 
  fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response=>response.json())
  .then(posts=>text(posts))
  .catch(error=>console.log(error))
 

  setTimeout(() => {
    if (post) {
      alert(post.body);
      return post.body
    } else {
      console.log("Posts data not fetched yet.");
    }
  }, 2000);

  

  
}






const js_item = document.getElementById('js_item') 
js_item.addEventListener('click',()=>{
  const new_div = document.createElement('div')
  new_div.setAttribute('class','w-[100%] h-[350px] bg-[#0049B7] fixed top-0 transition-all')
  document.body.appendChild(new_div)
  get_fetch()

  //btns
  const get_api_btn = document.createElement('button')
  get_api_btn.textContent="getting fetch loading .. ";
  get_api_btn.setAttribute('class','text-white text-center w-[100%]')
  new_div.appendChild(get_api_btn)
  get_api_btn.addEventListener('click',()=>{get_fetch()})

// animation div
  setInterval(()=>{new_div.style.top="20px"},0.6)
})



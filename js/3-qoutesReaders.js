let qoutesReaders = document.getElementById('qoutesReaders')



const qout_list = [
  {
    author: "Oscar Wilde",
    body: " “Be yourself; everyone else is already taken.” "
  },
  {
    author: "― Albert Einstein",
    body: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” "
  },

  {
    author: "― MehdiZamanin",
    body: "“hello its me :) ” "
  },
]



qoutesReaders.addEventListener('click', () => {
  qoutesReaders.innerHTML = qout_list[counter++].body 
  if (counter >=qout_list.length) { counter = 0 }

})
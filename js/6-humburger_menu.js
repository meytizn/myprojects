

const humburger_menu = document.querySelector('#humburger_menu')



humburger_menu.addEventListener('click', () => {
  counter++;
  if(counter==1){
    const menu = document.getElementById('mymenu').style.bottom='0px';
    humburger_menu.src="images/close.png";

    const menutopdiv=document.getElementById("menutopdiv")
    menutopdiv.style.backgroundColor="#0049B7"
    
    
  }
  if(counter>1){
    const menu = document.getElementById('mymenu').style.bottom='-55%';
    humburger_menu.src="images/bar.png";

        const menutopdiv=document.getElementById("menutopdiv")
    menutopdiv.style.backgroundColor="#0049B7"

    counter=0

  }
  
})
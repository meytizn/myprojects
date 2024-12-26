
// printing text

alert('text')
console.log("hello world !")
document.write()
document.getElementById("demo").innerHTML = "Hello World!";



// Finding HTML Elements
document.getElementById(id)
document.getElementsByTagName(name)
document.getElementsByClassName(name)
document.querySelector("#id or .class ");
document.querySelectorAll("tags or tags.class");



//Changing HTML Elements
element.innerHTML = new html
element.attribute = new value
element.style.property = new style
element.setAttribute(attribute, value) //method
element.classList.remove('active');
element.classList.add('active')

// Changing the Value of an Attribute
document.getElementById(id).attribute = new value
document.getElementById("myImage").src = "landscape.jpg";

//Adding and Deleting Elements
document.createElement(element)
elemet.innerText = "This is a paragraph";
document.body.appendChild(para);

document.removeChild(element)
document.appendChild(element)
document.replaceChild(new, old)
document.write(text)
element.textContent = counter


// Adding Events Handlers
document.getElementById(id).onclick = function () { code }



// Dynamic HTML content
document.getElementById("demo").innerHTML = "Date : " + Date(); //method



// DOM Events used as a attribute in a html tag and must have a function to run

onload in body
onclick
oninput = "upperCase()"
onchange = "upperCase()" //by press enter value of an input changes to uppercase by func
onmousedown, onmouseup

onfocus = "myFunction(this)
function myFunction(x) {
  x.style.background = "yellow";
}

onmouseover = "style.color='red'"
onmouseout = "style.color='black'"





mybutton.addEventListener('keydown', (event) => {
  if (event.key = "enter") { btnsend() }
})






// The addEventListener() method
element.addEventListener(event, functionname);
// tip=you can have multiple events for an element but cant use onclick insted use click
// you can use .removeEventListener to remove event
document.getElementById("myDIV").removeEventListener("mousemove", myFunction)
  // example
  < h2 > JavaScript addEventListener()</ >

<p>This example uses the addEventListener() method to add many events on the same button.</p>

<button id="myBtn">Try it</button>

<p id="demo"></p>

<script>
var x = document.getElementById("myBtn");
x.addEventListener("mouseover", myFunction);
x.addEventListener("click", mySecondFunction);
x.addEventListener("mouseout", myThirdFunction);

function myFunction() {
  document.getElementById("demo").innerHTML += "Moused over!<br>";
}

function mySecondFunction() {
  document.getElementById("demo").innerHTML += "Clicked!<br>";
}

function myThirdFunction() {
  document.getElementById("demo").innerHTML += "Moused out!<br>";
}
</script>








// DOM Nodes
document.createElement("p")
document.createTextNode("This is new.")
ur element.appendChild(node)
ur element.removeChild(child);
ur elmnt.remove();
// example
<div id="div1">
  <p id="p1">This is a paragraph.</p>
  <p id="p2">This is another paragraph.</p>
</div>

<script>
const para = document.createElement("p");
const node = document.createTextNode("This is new.");
para.appendChild(node);

const element = document.getElementById("div1");
element.appendChild(para);
</script>







// form value not empty checker
document.forms["myFormname"]["inputname"].value

  // example)
  < form name = "myForm" action = "/action_page.php" onsubmit = "return validateForm()" method = "post" >
    Name: <input type="text" name="fname">
      <input type="submit" value="Submit">
      </>
      <script>
        function validateForm() {
          let x = document.forms["myForm"]["fname"].value;
        if (x == "") {
          alert("Name must be filled out");
        return false;
  }
}

      </script>
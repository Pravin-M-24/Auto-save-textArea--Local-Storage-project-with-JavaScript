let textArea = document.querySelector("#textarea")
let toggle = document.getElementById("toggle_container");
let body = document.getElementsByTagName("body")[0];
let circle = document.getElementById("circle");
let heading = document.getElementsByTagName("h1")[0];
let svg = document.getElementById("svg");
let mode_heading = document.getElementsByTagName("h3")[0];
let msg = document.getElementById("msg");

let bool = true;

function changeMode () {
     if(bool){
          body.classList.add("dark_mode_body");
          circle.classList.add("dark_mode_circle");
          textArea.classList.add("dark_mode_textarea");
          heading.classList.add("heading");
          svg.className = "svg_dark";
          mode_heading.classList.add("mode_heading");
          bool = false;
     }
     else{
         body.classList.remove("dark_mode_body");
         circle.classList.remove("dark_mode_circle");
         textArea.classList.remove("dark_mode_textarea");
         heading.classList.remove("heading");
         svg.className = "svg_light";
         mode_heading.classList.remove("mode_heading");
         bool = true;
     }
}

function addData (e){
      msg.innerHTML = "";
      msg.innerText = "Your Content is saved";
       let textdata = e.target.value;
    localStorage.setItem("userData" ,JSON.stringify(textdata));
}

textArea.addEventListener('keyup' , addData);
toggle.addEventListener('click' , changeMode);
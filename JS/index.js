//code for revealing the nav bar on mobile view....

let body = document.querySelector("body");
let showNavBar = document.querySelector("#nav-reveal");
let navBar = document.querySelector("#nav");

showNavBar.addEventListener("click", revealNav);
document.addEventListener("click", noRevealNav);
navBar.addEventListener("click", preventClose);

//open and close navbar when the menu icon is clicked..

function revealNav(e){
   navBar.classList.toggle("reveal");

   e.stopPropagation();
}

//close navbar when the outside is clicked..

function noRevealNav(e){
   if(!navBar.contains(e.target)){
      navBar.classList.remove("reveal");
   }
}

//prevent navbar from closing when clicked inside..

function preventClose(e){
   e.stopPropagation();
}


//code for animated text reveal..
let reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){
   let windowHeight = window.innerHeight;

   reveals.forEach(function (element){
      let elementTop = element.getBoundingClientRect().top;

      if(elementTop < windowHeight - 100){
        element.classList.add("active")
   }
      });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


//code for whatsapp integration..
let whatsButton = document.querySelectorAll("#whatsapp");


whatsButton.forEach(function(btn) {
   btn.addEventListener("click", function(){
      let phoneNumber = "2349029532248";
      let message = `Hello...  I saw your website and I'm interested in your services. Please I'd like  to know more about pricing and how it works.`
      
      let url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
      window.open(url, "_blank");

   })
})


// code for the accordion1...
let box1 = document.querySelector(".about")
let button1 = document.querySelector(".btn1");

button1.addEventListener("click", function(){
   box1.classList.toggle("active")
})

// code for the accordion2...

let box2 = document.querySelector(".how")
let button2 = document.querySelector(".btn2");

button2.addEventListener("click", function(){
   box2.classList.toggle("active")
})

// code for the accordion3...

let box3 = document.querySelector(".faq")
let button3 = document.querySelector(".btn3");

button3.addEventListener("click", function(){
   box3.classList.toggle("active")
});


// page fade out effect....

let links = document.querySelectorAll("a");

links.forEach(function(link){
   link.addEventListener("click", function(e){
      let target = link.getAttribute("href");

      if(target.startsWith("http") || 
         target.startsWith("#")) return;

         e.preventDefault();

      document.querySelector(".page").classList.add("fade-out");

      setTimeout(function(){
         window.location.href = target;
      }, 500);
   })
})




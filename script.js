const menu = document.getElementById('menu');
const header = document.querySelector('header');

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times')     //change bar to x icon / and vice versa
    header.classList.toggle('toggle')       //then shows/hides the header/sidebar simultaneously
})

window.addEventListener('scroll', function() {
    menu.classList.remove('fa-times');
    header.classList.remove('toggle');

})  
window.addEventListener('load', function() {
    // alert('Welcome to the website!');

}) 

//smooth scrolling part
var anchorLinks = document.querySelectorAll('a[href*="#"]');

// Add click event listeners to each anchor element
anchorLinks.forEach(function(anchorLink) {
    anchorLink.addEventListener('click', function(e) {
        e.preventDefault();

        // Get the target element's ID from the href attribute
        var targetId = this.getAttribute('href').substring(1);

        // Find the target element by ID
        var targetElement = document.getElementById(targetId);

        if (targetElement) {
            // Calculate the target element's offset top
            var targetOffset = targetElement.offsetTop;

            // Scroll to the target element using smooth scrolling
            window.scrollTo({
                top: targetOffset,
                behavior: 'smooth'
            });
        }
    });
});

function sendMail() {
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    }

    //send these values to email js so email js would send back
    emailjs.send("service_dl4nssm", "template_vcjrsu8", params).then(alert("Email Sent!"));
}

// //CHATGPT
// function handleScrollAndLoad() {
//     // Remove the 'fa-times' class from the element with the id 'menu'
//     var menuElement = document.getElementById('menu');
//     if (menuElement) {
//       menuElement.classList.remove('fa-times');
//     }
  
//     // Remove the 'toggle' class from the header element(s)
//     var headerElements = document.querySelectorAll('header');
//     headerElements.forEach(function (headerElement) {
//       headerElement.classList.remove('toggle');
//     });
//   }
  
//   // Add event listeners for 'scroll' and 'load' events on the window
//   window.addEventListener('scroll', handleScrollAndLoad);
//   window.addEventListener('load', handleScrollAndLoad);



// $(document).ready(function() {
    
//     $('#menu').click(function() {
//         $(this).toggleClass('fa-times');
//         $('header').toggleClass('toggle');
//         console.log('hellow worlfds');
//     });
// });
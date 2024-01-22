document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");
  
    window.onscroll = function () {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        navbar.style.backgroundColor = "#555";  // Change background color on scroll
      } else {
        navbar.style.backgroundColor = "#333";  // Default background color
      }
    };
  });
  
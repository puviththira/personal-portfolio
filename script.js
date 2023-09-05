// JavaScript function to toggle academic and curriculum content visibility

function toggleContent(contentId) {
    
  var content = document.getElementById(contentId);
  if (content.style.maxHeight) {
      content.style.maxHeight = null;
  } else {
      content.style.maxHeight = content.scrollHeight + "px";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menu-btn");
  const navbar = document.getElementById("navbar");

  menuButton.addEventListener("click", function () {
      navbar.classList.toggle("active");
  });

  // Close the menu when a menu item is clicked
  const menuItems = document.querySelectorAll(".navbar a");
  menuItems.forEach(function (item) {
      item.addEventListener("click", function () {
          navbar.classList.remove("active"); // Close the menu
          menuIcon.classList.remove("fa-times"); // Reset the menu icon
          menuIcon.classList.add("fa-bars");
      });
  });
});



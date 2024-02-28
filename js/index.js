document.addEventListener("DOMContentLoaded", function() {
    const scrollToTopButton = document.getElementById("scrollToTopButton");

    // Function to scroll to the top of the page
    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth" // You can use "auto" for immediate scrolling
      });
    }

    // Attach a click event listener to the button
    scrollToTopButton.addEventListener("click", scrollToTop);
  });
// ----------------------------------------------------------------------------- 



// Dark mode 
document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll("ul li a");
  const darkModeToggle = document.getElementById("darkModeToggle");
  const socialIconsContainer = document.querySelector(".home__social");
  const workItems = document.querySelectorAll(".work__item");

  // Function to add the "active" class to the clicked link
  function handleNavLinkClick(event) {
      navLinks.forEach(link => link.classList.remove("active"));
      this.classList.add("active");
  }

  // Attach click event listeners to the navigation links
  navLinks.forEach(link => {
      link.addEventListener("click", handleNavLinkClick);
  });

  // Function to toggle dark mode
  function toggleDarkMode() {
      const body = document.body;
      const darkModeEnabled = body.classList.toggle("dark-mode");
      localStorage.setItem('dark-mode', darkModeEnabled ? 'enabled' : 'disabled');

      // Update social icons color based on dark mode state
      socialIconsContainer.classList.toggle("white-icons", darkModeEnabled);

      // Update work item border color based on dark mode state
      workItems.forEach(item => {
          item.classList.toggle("dark-mode-border", darkModeEnabled);
      });

      // Update image source based on dark mode state
      // const image = document.querySelector('.home__blob-img');
      // if (darkModeEnabled) {
      //     image.setAttribute('href', '/images/bw.png'); // Change to the path of your black image
      // } else {
      //     image.setAttribute('href', '/images/colour.png'); // Change to the path of your color image
      // }
  }

  // Attach click event listener to the dark mode toggle
  darkModeToggle.addEventListener("change", toggleDarkMode);

  // Check for dark mode preference in local storage
  const storedDarkMode = localStorage.getItem('dark-mode');
  if (storedDarkMode === 'enabled') {
      document.body.classList.add('dark-mode');
      darkModeToggle.checked = true;
      socialIconsContainer.classList.add("white-icons");
      workItems.forEach(item => {
          item.classList.add("dark-mode-border");
      });
  } else if (storedDarkMode === 'disabled') {
      document.body.classList.remove('dark-mode');
      darkModeToggle.checked = false;
      socialIconsContainer.classList.remove("white-icons");
      workItems.forEach(item => {
          item.classList.remove("dark-mode-border");
      });
  } else {
      // Default to light mode
      document.body.classList.remove('dark-mode');
      darkModeToggle.checked = false;
      socialIconsContainer.classList.remove("white-icons");
      workItems.forEach(item => {
          item.classList.remove("dark-mode-border");
      });
  }
});




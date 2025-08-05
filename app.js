// Navigation functionality
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const navItems = document.querySelectorAll(".nav-links a");

  // Get current page filename
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  // Set active class for current page
  navItems.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPage || (currentPage === "" && href === "index.html")) {
      link.classList.add("active");
    }
  });

  // Hamburger menu toggle
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
  });

  // Close mobile menu when clicking on a link
  navItems.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      hamburger.classList.remove("active");
    });
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Scroll to top button
  createScrollToTopButton();

  // Add typing animation to main heading
  const mainHeading = document.querySelector("main h1");
  if (mainHeading) {
    typewriterEffect(mainHeading, mainHeading.textContent);
  }

  // Add fade-in animation to project cards
  observeElements();
});

// Scroll to top functionality
function createScrollToTopButton() {
  const scrollButton = document.createElement("button");
  scrollButton.className = "scroll-top";
  scrollButton.innerHTML = "↑";
  scrollButton.setAttribute("aria-label", "Scroll to top");
  document.body.appendChild(scrollButton);

  // Show/hide button based on scroll position
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      scrollButton.classList.add("visible");
    } else {
      scrollButton.classList.remove("visible");
    }
  });

  // Scroll to top when clicked
  scrollButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// Typewriter effect for headings
function typewriterEffect(element, text) {
  element.textContent = "";
  let i = 0;

  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, 100);
    }
  }

  // Start typing after a short delay
  setTimeout(type, 500);
}

// Intersection Observer for fade-in animations
function observeElements() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Add fade-in styles and observe elements
  const elementsToAnimate = document.querySelectorAll(".project, #about");
  elementsToAnimate.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
}

// Add interactive hover effects for project links
document.addEventListener("DOMContentLoaded", function () {
  const projectLinks = document.querySelectorAll(".project a");

  projectLinks.forEach((link) => {
    link.addEventListener("mouseenter", function () {
      this.style.transform = "translateX(5px)";
    });

    link.addEventListener("mouseleave", function () {
      this.style.transform = "translateX(0)";
    });
  });
});

// Add parallax effect to hero section (if exists)
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const heroSection = document.querySelector("#about");

  if (heroSection) {
    const rate = scrolled * -0.5;
    heroSection.style.transform = `translateY(${rate}px)`;
  }
});

// Dynamic copyright year
document.addEventListener("DOMContentLoaded", function () {
  const copyrightElement = document.querySelector("footer p");
  if (copyrightElement) {
    const currentYear = new Date().getFullYear();
    copyrightElement.innerHTML = `&copy; ${currentYear} Leon Vornholt`;
  }
});

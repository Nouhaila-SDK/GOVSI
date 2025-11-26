// Simple script for demo purposes
document.addEventListener('DOMContentLoaded', function() {
  // Login Form Submission
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const role = document.getElementById('role').value;

      alert(`Login attempted with:\nEmail: ${email}\nRole: ${role}\n\nIn a real app, this would connect to an API.`);
      // In a real app, you would send this data to your Spring Boot backend
    });
  }

  // Register Form Submission
  const registerForm = document.getElementById('registerForm');
  if (registerForm) {
    registerForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const fullName = document.getElementById('fullName').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirmPassword').value;
      const role = document.getElementById('role').value;

      if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
      }

      alert(`Account created for:\nName: ${fullName}\nEmail: ${email}\nRole: ${role}\n\nIn a real app, this would connect to an API.`);
      // In a real app, you would send this data to your Spring Boot backend
    });
  }

  // Simple navigation simulation
  const navLinks = document.querySelectorAll('.sidebar nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      // In a real app, you would navigate to the actual page
      alert(`Navigating to: ${this.textContent.trim()}`);
    });
  });

  // Add active state to current page
  const currentPage = window.location.pathname.split('/').pop();
  if (currentPage === 'dashboard-manager.html') {
    document.querySelector('.sidebar nav li a[href="dashboard-manager.html"]').parentElement.classList.add('active');
  }
});
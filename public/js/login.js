//used for the loginFormHandler
// refer to module 14 activity 16

// Login form submit handler
const loginFormHandler = async function(event) {
    // Prevent default form submission behavior
    event.preventDefault();
  
    // Get email and password from the form inputs
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    // Check that both email and password have values
    if (email && password) {
      // Send a POST request to the server to log in the user
      const response = await fetch('/api/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
  
      // If the response was successful, redirect to the dashboard
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        // Otherwise, display an error message to the user
        alert('Incorrect email or password');
      }
    }
  };
  
  // Sign up form submit handler
  const signupFormHandler = async function(event) {
    // Prevent default form submission behavior
    event.preventDefault();
  
    // Get username, email, and password from the form inputs
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    // Check that all fields have values
    if (username && email && password) {
      // Send a POST request to the server to create a new user
      const response = await fetch('/api/user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password })
      });
      console.log('response', response);
      // If the response was successful, redirect to the dashboard
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        // Otherwise, display an error message to the user
        alert('Something went wrong. Please try again later.');
      }
    }
  };
  
  // Add event listeners to the login and sign up forms
  const loginForm = document.querySelector('.login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', loginFormHandler);
  }
  
  const signupForm = document.querySelector('.signup-form');
  if (signupForm) {
    signupForm.addEventListener('submit', signupFormHandler);
  }
  
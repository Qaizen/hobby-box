//used for the loginFormHandler

// refer to module 14 activity 16

// Login form submit handler
async function loginFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const pass = document.querySelector('#password-login').value.trim();
  console.log(email)
  console.log(pass)

  if (email && pass) {
    axios.post('/api/user/login', {
      email: email,
      password: pass
    })
    .then(res => {
        console.log(res)
        document.location.replace('/hobbies');
        alert("Log In successful!");
    })
    .catch(err => {
      console.log(err)
      alert('Invalid Email or Password')
    })
  }
}
// Sign up form submit handler
async function signupFormHandler(event) {
  event.preventDefault();

  const userName = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (userName && email && password) {
    axios.post('/api/user', {
      username: userName,
      email: email,
      password: password
    })
    .then(res => {
      console.log(res)
      document.location.replace('/');
      alert(res.statusText);
    })
    .catch(err => {
      console.log(err)
      alert('An Error has occurred')
    })
  }
}

// Add event listeners to the login and sign up forms
if(location.href.includes('login')){
  document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
} else {
  document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
}


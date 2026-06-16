const loginForm = document.getElementById('loginForm');
  const errorMessage = document.getElementById('errorMessage');

  loginForm.addEventListener('submit', (event) => {
    // Prevent default form submission
    event.preventDefault();

    // Simulate login attempt (replace with actual login logic)
    if (loginForm.username.value !== 'admin' || loginForm.password.value !== 'password') {
      // Incorrect credentials
      errorMessage.style.display = 'block';
    } else {
      // Successful login
      // Redirect to homepage or perform other actions
      // errorMessage.style.display = 'none'; // Uncomment if you want to hide the error message on successful login
      // window.location.href = '/home'; // Replace with appropriate redirect URL
    }
  });

  // Clear the form when the modal is closed
  $('#loginModal').on('hidden.bs.modal', function () {
    loginForm.reset();
    errorMessage.style.display = 'none';
  });

  $('#loginModal').on('click', function (event) {
  // Check if the clicked element is outside of the modal
  if (event.target.closest('#loginModal') === null) {
    // Prevent the default modal close behavior
    event.preventDefault();
  }
});
  

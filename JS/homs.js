const loginButton = document.getElementById('login');
loginButton.addEventListener('click', function() {
  // take the user to the login page
  window.location.href = '../Pages/login.html';
});

const signUpButton = document.getElementById('signup');
  signUpButton.addEventListener('click', function() {
    // take the user to the sign-up page
    window.location.href = 'signup.html';
  });

  const quizButton = document.getElementById('btn');
    quizButton.addEventListener ('click', function(){
        // take the user to the quiz page
     window.location.href = '../Pages/quiz.html';
  })
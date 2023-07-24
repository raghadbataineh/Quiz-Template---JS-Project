const exitButton = document.getElementById('exit')
exitButton.addEventListener ('click',function(){
    // take the user to home page
    window.location.href='../Pages/home.html';
})

const startButton = document.getElementById('start') 
startButton.addEventListener ('click',function(){
    window.location.href = '../Pages/quiz.html';
})
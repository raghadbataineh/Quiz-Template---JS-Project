let body = document.body;
let corrAnswers = new XMLHttpRequest();
corrAnswers.open("GET", "../json/answers.json");
corrAnswers.onload = function () {
  const data = JSON.parse(corrAnswers.responseText);
  var rightAns = [];
  for (let i = 0; i < data.length; i++) {
    rightAns.push(data[i].correct_answers);
  }
  for (i = 0; i < 20; i++) {
    body.innerHTML += `
   <div class="quiz-container">
    <h4 class="h">Question. ${[i + 1]}</h4> <br>
    <p class="question">${data[i].question}</p>
  
    <div class="answers">
      <div class="answer">
        <label >${data[i].answers.answer_a}</label>
      </div>
      <div class="answer">
        <label >${data[i].answers.answer_b}</label>
      </div>
      <div class="answer">
        <label >${data[i].answers.answer_c}</label>
      </div>
      <div class="answer">
        <label>${data[i].answers.answer_d}</label>
      </div>
    </div>
  </div>
  `;
  }
  submittedAns = localStorage.getItem("Answer");
  submittedAnsjson = JSON.parse(submittedAns);
  console.log(submittedAnsjson);
  console.log(rightAns);
  let label = document.querySelectorAll(".answers .answer label");
  for (let i = 0; i < rightAns.length; i++) {
    if (submittedAnsjson[i] === rightAns[i].trim()) {
      for (let j = 0; j < label.length; j++) {
        if (submittedAnsjson[i] === label[j].innerHTML.trim()) {
          label[j].style.background = "green";
          label[j].style.color = "white";
          label[j].style.padding = "10px";
          label[j].style.borderRadius = "8px";
          
        }
      }
    } else {
      for (let j = 0; j < label.length; j++) {
        if (submittedAnsjson[i] === label[j].innerHTML.trim()) {
          label[j].style.background = "red";
          label[j].style.color = "white";
          label[j].style.padding = "10px";
          label[j].style.borderRadius = "8px";
        }
      }
    }
  }
  for (let i = 0; i < rightAns.length; i++) {
    const correctAnswer = rightAns[i].trim();
    for (let j = 0; j < label.length; j++) {
      const submittedAnswer = label[j].innerHTML.trim();
      if (submittedAnswer === correctAnswer) {
        label[j].style.background = "green";
        label[j].style.color = "white";
        label[j].style.padding = "10px";
        label[j].style.borderRadius = "8px";

        break; // Break the loop after finding the correct answer to avoid highlighting duplicates
      }
    }
  }
};

corrAnswers.send();

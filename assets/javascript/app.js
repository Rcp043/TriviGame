function check(){
  var q1 = document.quiz.q1.value;
  var q2 = document.quiz.q2.value;
  var q3 = document.quiz.q3.value;
  var correct = 0;

  if(q1 === "yea"){
    correct++;
  }
  if(q2 === "yea"){
    correct++;
  }
  if(q3 === "yea"){
    correct++;
  }
  document.getElementById("number_correct").innerHTML = "you got " + correct + " correct";
}


document.getElementById("Magicbtn").addEventListener("click", Magicbtn);
document.getElementById("question");

function Magicbtn() {
  let randNum = Math.random();
  console.log(randNum);
  let Q = document.getElementById("question");

  if (Q === "") {
    AnswerID = "please type in a question";
  } else if (Q === "does the magic 8 ball lie?") {
    AnswerID = "No it doesnt lie";
  } else if (Q === "Will the eagles win the superbowl") {
    AnswerID = "Yes they will";
  } else if (randNum < 0.1) {
    AnswerID = "Without a Doubt!";
  } else if (randNum < 0.2) {
    AnswerID = "Yes 100%";
  } else if (randNum < 0.3) {
    AnswerID = "";
  } else if (randNum < 0.4) {
    AnswerID = "Most likely";
  } else if (randNum < 0.5) {
    AnswerID = "Dont count on it";
  } else if (randNum < 0.6) {
    AnswerID = "not to sure";
  } else if (randNum < 0.7) {
    AnswerID = "ask again later";
  } else if (randNum < 0.8) {
    AnswerID = "better not to say";
  } else if (randNum < 0.8) {
    AnswerID = "Absolutely not";
  } else if (randNum < 0.9) {
    AnswerID = "As far as i see it yes";
  } else if (randNum < 1.0) {
    AnswerID = "Not at all";
  } else {
    AnswerID = "?";
  }

  document.getElementById("output").innerHTML = `Answer: ${AnswerID}`;
}

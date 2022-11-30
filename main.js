document.getElementById("Magicbtn").addEventListener("click", Magicbtn);

function Magicbtn() {
  let randNum = Math.random();
  console.log(randNum);

  let AnswerID = "";
  if (randNum < 0.1) {
    AnswerID = "Without a Doubt!";
  } else if (randNum < 0.2) {
    AnswerID = "Yes 100%";
  } else if (randNum < 0.3) {
    AnswerID = "Its a high possibility";
  } else if (randNum < 0.4) {
    AnswerID = "Yes,possibly";
  } else if (randNum < 0.5) {
    AnswerID = "Maybe";
  } else if ((randNum, 0.6)) {
    AnswerID = "No";
  } else if (randNum < 0.7) {
    AnswerID = "Probably not";
  } else if (randNum < 0.8) {
    AnswerID = "Very low possibly";
  } else if (randNum < 0.8) {
    AnswerID = "Absolutely not";
  } else if (randNum < 0.9) {
    AnswerID = "No chance";
  } else if (randNum < 1.0) {
    AnswerID = "Not at all";
  }

  document.getElementById("output").innerHTML = `Answer: ${AnswerID}`;
}

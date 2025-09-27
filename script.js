// script.js

function submitPoll() {
    const options = document.getElementsByName("player");
    let selectedOption = "";
  
    for (let option of options) {
      if (option.checked) {
        selectedOption = option.value;
        break;
      }
    }
  
    if (selectedOption === "") {
      document.getElementById("pollResult").innerText = "Please select a player before voting!";
    } else {
      document.getElementById("pollResult").innerText =
        `🔥 Thanks for voting! ${selectedOption} is on fire this season!`;
    }
  }
  
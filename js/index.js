{
  const content = document.getElementById("content");
  const button = document.querySelector(".btn-speech");

  const rec = () => {
    recognition.start();
  };
  window.SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new window.SpeechRecognition();
  recognition.interimResults = true;
  recognition.lang = "fa-IR";
  recognition.addEventListener("result", (e) => {
    const text = Array.from(e.results)
      .map((results) => results[0])
      .map((result) => result.transcript)
      .join("");
    content.innerText = text;
  });
  button.addEventListener("click", () => {
    if (button.innerText === "press to speak") {
      rec();
      button.innerText = "press again to cancel";
      recognition.addEventListener("end", () => {
        button.innerText = "press to speak";
      });
    } else {
      recognition.stop();
      button.innerText = "press to speak";
    }
  });
}

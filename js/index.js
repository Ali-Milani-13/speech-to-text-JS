{
  window.onunload = () => {
    recognition.stop();
  };
  const content = document.getElementById("content");
  const button = document.querySelector(".btn-speech");
  const langEnglish = document.getElementById("lang-en");
  const langPersian = document.getElementById("lang-fa");
  const langTurkish = document.getElementById("lang-tr");

  const rec = () => {
    if (langEnglish.checked) {
      recognition.lang = "en-US";
    } else if (langPersian.checked) {
      recognition.lang = "fa-IR";
    } else if (langTurkish.checked) {
      recognition.lang = "tr-TR";
    }
    recognition.start();
    langEnglish.setAttribute("disabled", "");
    langPersian.setAttribute("disabled", "");
    langTurkish.setAttribute("disabled", "");
  };
  window.SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new window.SpeechRecognition();
  recognition.interimResults = true;

  recognition.addEventListener("result", (e) => {
    const text = Array.from(e.results)
      .map((results) => results[0])
      .map((result) => result.transcript)
      .join("");
    content.innerText = text;
  });
  button.addEventListener("click", () => {
    if (button.innerText === "Press to speak") {
      rec();
      button.innerText = "press again to cancel";
      recognition.addEventListener("end", () => {
        button.innerText = "Press to speak";
        langEnglish.removeAttribute("disabled", "");
        langPersian.removeAttribute("disabled", "");
        langTurkish.removeAttribute("disabled", "");
      });
    } else {
      recognition.stop();
      button.innerText = "Press to speak";
      langEnglish.removeAttribute("disabled", "");
      langPersian.removeAttribute("disabled", "");
      langTurkish.removeAttribute("disabled", "");
    }
  });
}

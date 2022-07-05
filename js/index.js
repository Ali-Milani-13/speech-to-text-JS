{


   const content = document.getElementById('content');
   const button = document.querySelector('.btn-speech');
   const isSpeechOn = true;
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new window.SpeechRecognition();
    recognition.interimResults = true;
    recognition.addEventListener('result',e=>{
        const text = Array.from(e.results)
        .map(results=>results[0])
        .map(result=>result.transcript)
        .join('');
        content.innerText = text;
    })
    button.addEventListener('click',()=>{
        recognition.start();
        button.innerText = 'press again to cancel';

    })
   
}

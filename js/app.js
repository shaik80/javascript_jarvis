const btn = document.getElementById("btn");
const result = document.getElementById("result");

const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
const recognition = new SpeechRecognition();
console.log(recognition)
recognition.onstart = () => {
  console.log("recording started");
};

recognition.onresult = e => {
    let text = e.results[0][0].transcript
  console.log(text);
  read(text)
};

read = (text) =>{
    let speech = new SpeechSynthesisUtterance();
    
    if(text.includes("add"+a+"+"+b || a +" + "+ b)){
        speech.text = Math(a+b) ;
    }
    else{
        speech.text = text;
    }
    window.speechSynthesis.speak(speech)
}
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
    
    if(text.includes("what's your name")){
        speech.text = "im jarvis" ;
    }
    else{
        speech.text = text;
    }
    window.speechSynthesis.speak(speech)
}


        
(async () => {
  const model = await mobilenet.load()
  const status = document.getElementById('status');
  const video = document.getElementById('video');
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext("2d");

  const stream = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: {
          facingMode: 'environment'
      }
  })

  // Stream  -> raw stream of video
  video.srcObject = stream
  
  predict()

  async function predict() {
      ctx.drawImage(video, 0, 0, 500, 500)
      const predictions = await model.classify(canvas)
      status.innerHTML = `Prediction:  ${predictions[0].className}  /  ${predictions[0]}`
      requestAnimationFrame(predict)
  }
})()
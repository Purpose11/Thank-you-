const form = document.getElementById('myForm')
const inputForm = document.getElementById('name')
const container = document.querySelector('.container')
const messageDiv = document.querySelector('.message-div')
const span = document.getElementById('span')

const synth = window.speechSynthesis;
function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';


  const voices = synth.getVoices();
  const femaleVoice = voices.find((voice) => voice.name === 'Microsoft Zira - English (United States)');
  utterance.voice = femaleVoice;
  synth.speak(utterance);
}



  const message = 
form.addEventListener('submit', handleForm)

    function handleForm (e, text){
      e.preventDefault()
      
      if ( inputForm.value === ''){
        alert('Please Enter Your Name')
      }
      else {
        span.innerHTML = `${inputForm.value},`
        messageDiv.style.transform = 'scale(1)'
        container.style.backgroundImage = 'background-image: linear-gradient(rgba(0,0,0,0.95),rgba(0,0,0,0.95) ), url(./images/fatai.JPG)'
        speak(`Dear <span>${inputForm.value}, Thank you so much for the lovely birthday wishes! Your thoughtfulness made my day even more special. I'm lucky to have a friend like you in my life. With love, 
          Fatai.`
        )
        
        inputForm.value = ''
      }
}
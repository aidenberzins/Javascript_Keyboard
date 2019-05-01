function changeSound(e){
    document.querySelector("section").classList.toggle("drums")
    document.querySelector("section").classList.toggle("guitar")
    const audioA = document.querySelector('audio[data-key="65"]');
    const audioB = document.querySelector('audio[data-key="83"]');
    const audioC = document.querySelector('audio[data-key="68"]');
    const audioD = document.querySelector('audio[data-key="70"]');
    const audioE = document.querySelector('audio[data-key="74"]');
    const audioF = document.querySelector('audio[data-key="75"]');
    const audioG = document.querySelector('audio[data-key="76"]');
    const audioH = document.querySelector('audio[data-key="186"]');
    if ( audioA.src == "file:///C:/Users/Aiden/Documents/codeProjects/keyboardDrums/sounds/clap.wav") {
      audioA.src = "./guitar/g1.wav"
      audioB.src = "./guitar/g2.wav"
      audioC.src = "./guitar/g3.wav"
      audioD.src = "./guitar/g4.wav"
      audioE.src = "./guitar/g5.wav"
      audioF.src = "./guitar/g6.wav"
      audioG.src = "./guitar/g7.wav"
      audioH.src = "./guitar/g8.wav"
    }
    else{
      audioA.src = "./sounds/clap.wav"
      audioB.src = "./sounds/tink.wav"
      audioC.src = "./sounds/hihat.wav"
      audioD.src = "./sounds/kick.wav"
      audioE.src = "./sounds/openhat.wav"
      audioF.src = "./sounds/ride.wav"
      audioG.src = "./sounds/snare.wav"
      audioH.src = "./sounds/tom.wav"
    }
}


function playSound(e) {
// select audio file to play
  let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!audio){
    return;
  }
  // Play sound on key press
  audio.currentTime = 0;
  audio.play();
  let audioKey = document.querySelector(`div[data-key="${e.keyCode}"]`);
    audioKey.classList.add("playing");
};
function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', (e) => {
   playSound(e);
   if(e.keyCode === 81){
     changeSound(e);
   }
 });

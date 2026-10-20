//Buttons
var Buttons1 = document.querySelector('#Buttons1').onclick = () => {fadeOut(iframe, 250); {setTimeout(HomeButton, 1000)}};
var Buttons2 = document.querySelector('#Buttons2').onclick = () => {fadeOut(iframe, 250); {setTimeout(AboutButton, 1000)}};
var Buttons3 = document.querySelector('#Buttons3').onclick = () => {fadeOut(iframe, 250); {setTimeout(ContactButton, 1000)}};
var Buttons4 = document.querySelector('#Buttons4').onclick = () => {fadeOut(iframe, 250); {setTimeout(PostsButton, 1000)}};
var Buttons5 = document.querySelector('#Buttons5').onclick = () => {fadeOut(iframe, 250); {setTimeout(PhotogButton, 1000)}};
var Buttons6 = document.querySelector('#Buttons6').onclick = () => {fadeOut(iframe, 250); {setTimeout(GuestbookButton, 1000)}};
var Buttons7 = document.querySelector('#Buttons7').onclick = () => {fadeOut(iframe, 250); {setTimeout(LinksButton, 1000)}};
var Buttons8 = document.querySelector('#Buttons8').onclick = () => {fadeOut(iframe, 250); {setTimeout(LinuxguideButton, 1000)}};
var MP3Buttons1 = document.querySelector('#MP3Buttons1').onclick = () => {document.getElementById('MP3Audio').src='./beneaththevirtualsky.mp3'};
var MP3Buttons1 = document.querySelector('#MP3Buttons2').onclick = () => {document.getElementById('MP3Audio').src='./evergrowingnight.mp3'};
var MP3Buttons1 = document.querySelector('#MP3Buttons3').onclick = () => {document.getElementById('MP3Audio').src='./godonlyknows.mp3'};
var MP3Buttons1 = document.querySelector('#MP3Buttons4').onclick = () => {document.getElementById('MP3Audio').src='./killswitch.mp3'};
var MP3Buttons1 = document.querySelector('#MP3Buttons5').onclick = () => {document.getElementById('MP3Audio').src='./yararara.mp3'};
var MP3Buttons1 = document.querySelector('#MP3Buttons6').onclick = () => {document.getElementById('MP3Audio').src='./freefall.mp3'};
var MP3Buttons1 = document.querySelector('#MP3Buttons7').onclick = () => {document.getElementById('MP3Audio').src='./mewmewmagic.mp3'};
var MP3Buttons1 = document.querySelector('#MP3Buttons8').onclick = () => {document.getElementById('MP3Audio').src='./pigstep.mp3'};
var MP3Buttons1 = document.querySelector('#MP3Buttons9').onclick = () => {document.getElementById('MP3Audio').src='./Archie&MaxieTheme.mp3'};
var MP3Buttons1 = document.querySelector('#MP3Buttons10').onclick = () => {document.getElementById('MP3Audio').src='./sevenseas.mp3'};
var MP3Buttons1 = document.querySelector('#MP3Buttons11').onclick = () => {document.getElementById('MP3Audio').src='./sealedvessel.mp3'};
var MP3Buttons1 = document.querySelector('#MP3Buttons12').onclick = () => {document.getElementById('MP3Audio').src='./flowerman.mp3'};
var MP3Buttons1 = document.querySelector('#MP3Buttons13').onclick = () => {document.getElementById('MP3Audio').src='./beneaththevirtualsky.mp3'};
var MP3Buttons1 = document.querySelector('#MP3Buttons14').onclick = () => {document.getElementById('MP3Audio').src='./beneaththevirtualsky.mp3'};
var MP3Buttons1 = document.querySelector('#MP3Buttons15').onclick = () => {document.getElementById('MP3Audio').src='./beneaththevirtualsky.mp3'};
var MP3Buttons1 = document.querySelector('#MP3Buttons16').onclick = () => {document.getElementById('MP3Audio').src='./beneaththevirtualsky.mp3'};
var MP3Buttons1 = document.querySelector('#MP3Buttons17').onclick = () => {document.getElementById('MP3Audio').src='./beneaththevirtualsky.mp3'};
var MP3Buttons1 = document.querySelector('#MP3ButtonsFUH').onclick = () => {document.getElementById('MP3Audio').src='./fuhhh.mp3'};
var Buttonscrton = document.querySelector('#Buttonscrton').onclick = () => {Togglecrt()};
var D4Button = document.querySelector('#ButtonsD4').onclick = () => {D4Generate()};
var D6Button = document.querySelector('#ButtonsD6').onclick = () => {D6Generate()};
var D8Button = document.querySelector('#ButtonsD8').onclick = () => {D8Generate()};
var D10Button = document.querySelector('#ButtonsD10').onclick = () => {D10Generate()};
var D12Button = document.querySelector('#ButtonsD12').onclick = () => {D12Generate()};
var D20Button = document.querySelector('#ButtonsD20').onclick = () => {D20Generate()};
var D100Button = document.querySelector('#ButtonsD100').onclick = () => {D100Generate()};
var TrueD100Button = document.querySelector('#Buttons-trueD100').onclick = () => {TrueD100Generate()};
var CalcClearButton = document.querySelector('#calc-clear').onclick = () => {clearDisplay()};
var CalcDivideButton = document.querySelector('#calc-divide').onclick = () => {appendOperation('/')};
var CalcMultiplyButton = document.querySelector('#calc-multiply').onclick = () => {appendOperation('*')};
var CalcMinusButton = document.querySelector('#calc-minus').onclick = () => {appendOperation('-')};
var CalcPlusButton = document.querySelector('#calc-plus').onclick = () => {appendOperation('+')};
var CalcEqualsButton = document.querySelector('#calc-equals').onclick = () => {calculate()};
var Calc0Button = document.querySelector('#calc-0').onclick = () => {appendNumber('0')};
var Calc1Button = document.querySelector('#calc-1').onclick = () => {appendNumber('1')};
var Calc2Button = document.querySelector('#calc-2').onclick = () => {appendNumber('2')};
var Calc3Button = document.querySelector('#calc-3').onclick = () => {appendNumber('3')};
var Calc4Button = document.querySelector('#calc-4').onclick = () => {appendNumber('4')};
var Calc5Button = document.querySelector('#calc-5').onclick = () => {appendNumber('5')};
var Calc6Button = document.querySelector('#calc-6').onclick = () => {appendNumber('6')};
var Calc7Button = document.querySelector('#calc-7').onclick = () => {appendNumber('7')};
var Calc8Button = document.querySelector('#calc-8').onclick = () => {appendNumber('8')};
var Calc9Button = document.querySelector('#calc-9').onclick = () => {appendNumber('9')};
//End Buttons
//Buttons Functions
function HomeButton() {document.getElementById('Pages').src='./home'}
function AboutButton() {document.getElementById('Pages').src='./about'}
function ContactButton() {document.getElementById('Pages').src='./contact'}
function PostsButton() {document.getElementById('Pages').src='./posts'}
function PhotogButton() {document.getElementById('Pages').src='./photography'}
function GuestbookButton() {document.getElementById('Pages').src='./guestbook'}
function LinksButton() {document.getElementById('Pages').src='./links'}
function LinuxguideButton() {document.getElementById('Pages').src='https://autumn-embers.github.io/autumns-linux-guides/'}
function TurnOncrt() {const element = document.getElementById("TheEntireHeckinWebsite"); element.classList.remove("blank"); element.classList.add("crt");}
function TurnOffcrt() {const element = document.getElementById("TheEntireHeckinWebsite"); element.classList.remove("crt"); element.classList.add("blank");}
function Togglecrt() {if(TheEntireHeckinWebsite.className == "blank") {TurnOncrt()} else{TurnOffcrt()}}
function D4Generate() {document.getElementById("Rollresults").innerHTML = Math.floor(Math.random() * 4) + 1;}
function D6Generate() {document.getElementById("Rollresults").innerHTML = Math.floor(Math.random() * 6) + 1;}
function D8Generate() {document.getElementById("Rollresults").innerHTML = Math.floor(Math.random() * 8) + 1;}
function D10Generate() {document.getElementById("Rollresults").innerHTML = Math.floor(Math.random() * 10) + 1;}
function D12Generate() {document.getElementById("Rollresults").innerHTML = Math.floor(Math.random() * 12) + 1;}
function D20Generate() {document.getElementById("Rollresults").innerHTML = Math.floor(Math.random() * 20) + 1;}
function D100Generate() {document.getElementById("Rollresults").innerHTML = Math.floor((Math.random() * 10) + 1) * 10;}
function TrueD100Generate() {document.getElementById("Rollresults").innerHTML = Math.floor(Math.random() * 100) + 1;}
//End Buttons Functions
//iframe fade in
const PagesIframe = document.getElementById('Pages');
PagesIframe.addEventListener("load", () => {document.getElementById('Pages').style.opacity = '1';});
//End iframe fade in
//iframe fade outs
var iframe = document.getElementById('Pages');
function fadeOut(el, duration) {var step = 10 / duration, opacity = 1; function next() {if (opacity <= 0) {return;} el.style.opacity = ( opacity -= step ); setTimeout(next, 10);} next();}
//End iframe fade outs
//Dropdowns for mp3 player
function myFunction() {document.getElementById("myDropdown").classList.toggle("show");}
window.onclick = function(event) {if (!event.target.matches('.dropbtn')) {var dropdowns = document.getElementsByClassName("dropdown-content"); var i; for (i = 0; i < dropdowns.length; i++) {var openDropdown = dropdowns[i]; if (openDropdown.classList.contains('show')) {openDropdown.classList.remove('show');}}}};
//End Dropdowns for mp3 player
//Start Clock function 
var dtbElement = document.getElementById('dtb'); function dtb() {dtbElement.textContent = new Date().toString();} setInterval(dtb, 1000);
//End Clock function
//Start Audioplayer
const audio = document.getElementById("MP3Audio");
const playPauseButton = document.getElementById("play-pause-button");
const volumeControl = document.getElementById("volume-control");
const progressBar = document.getElementById("progress-bar");
const currentTimeDisplay = document.getElementById("current-time");
const totalTimeDisplay = document.getElementById("total-time");
const loopButton = document.getElementById("loop-MP3-button");
let isPlaying = false;
playPauseButton.addEventListener("click", () => {if (isPlaying) {audio.pause(); playPauseButton.textContent = "Play";} else {audio.play(); playPauseButton.textContent = "Pause";} isPlaying = !isPlaying;});
volumeControl.addEventListener("input", () => {audio.volume = volumeControl.value;});
audio.addEventListener("timeupdate", () => {const currentTime = audio.currentTime; const duration = audio.duration; const currentMinutes = Math.floor(currentTime / 60); const currentSeconds = Math.floor(currentTime % 60); const totalMinutes = Math.floor(duration / 60); const totalSeconds = Math.floor(duration % 60); currentTimeDisplay.textContent = `${currentMinutes}:${currentSeconds < 10 ? '0' : ''}${currentSeconds}`; totalTimeDisplay.textContent = `${totalMinutes}:${totalSeconds < 10 ? '0' : ''}${totalSeconds}`; const progress = (currentTime / duration) * 100; progressBar.style.width = `${progress}%`;}); audio.loop = false;
loopButton.addEventListener("click", () => {audio.loop = !audio.loop; if (audio.loop) {loopButton.textContent = "Looping";} else {loopButton.textContent = "Loop";}});
//End audio player Function
//Calc Functions
let currentInput = ''; let currentOperation = ''; let previousInput = '';
function appendNumber(number) {currentInput += number; document.getElementById('display').value = `${previousInput} ${currentOperation} ${currentInput}`;}
function appendOperation(operation) {if (currentInput === '') return; if (previousInput !== '') {calculate();}
currentOperation = operation; previousInput = currentInput; currentInput = ''; document.getElementById('display').value = `${previousInput} ${currentOperation}`;}
function calculate() {if (previousInput === '' || currentInput === '') return; let result; let prev = parseFloat(previousInput); let current = parseFloat(currentInput);
switch (currentOperation) {case '+': result = prev + current; break; case '-': result = prev - current; break; case '*': result = prev * current; break; case '/': if (current === 0) {alert("Cannot divide by zero"); return;}
result = prev / current; break; default: return;}
currentInput = result.toString(); currentOperation = ''; previousInput = ''; document.getElementById('display').value = currentInput;}
function clearDisplay() {currentInput = ''; previousInput = ''; currentOperation = ''; document.getElementById('display').value = '';}
//End Calc Functions

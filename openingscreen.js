//Screen FadeOut
var iframe = document.getElementById('Page');
function fadeOut(el, duration) {var step = 10 / duration, opacity = 1; function next() {if (opacity <= 0) {return;} el.style.opacity = ( opacity -= step ); setTimeout(next, 10);} next();}
//PageSwap
function LoadNextPage() {window.location = './autumns-techno-space.html';}
//Button
var ButtonNewPage = document.querySelector('#ButtonLoadNextPage').onclick = () => {Sound1(); fadeOut(Page, 500); setTimeout(Sound2, 500); setTimeout(Zoom, 500); setTimeout(NextPageLoading, 7500); setTimeout(Sound3, 7500); setTimeout(Sound4, 9000); setTimeout(LoadNextPage, 10000)};
//Background swaps
function Zoom() {const element = document.getElementById("Page"); element.classList.remove("bodyMain"); element.classList.add("bodyA");}
function NextPageLoading() {const element = document.getElementById("Page"); element.classList.remove("bodyA"); element.classList.add("bodyB");}
//Button SFX
function Sound1() {var Buttonsfx1 = document.getElementById("Sound1"); Buttonsfx1.autoplay = 'true'; Buttonsfx1.load()};
function Sound2() {var Buttonsfx2 = document.getElementById("Sound2"); Buttonsfx2.autoplay = 'true'; Buttonsfx2.load()};
function Sound3() {var Buttonsfx3 = document.getElementById("Sound3"); Buttonsfx3.autoplay = 'true'; Buttonsfx3.load()};
function Sound4() {var Buttonsfx4 = document.getElementById("Sound4"); Buttonsfx4.autoplay = 'true'; Buttonsfx4.load()};

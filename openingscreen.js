//Screen FadeOut
var iframe = document.getElementById('Page');
function fadeOut(el, duration) {var step = 10 / duration, opacity = 1; function next() {if (opacity <= 0) {return;} el.style.opacity = ( opacity -= step ); setTimeout(next, 10);} next();}
//PageSwap
function LoadNextPage() {window.location = './autumns-techno-space.html';}
//Button
var ButtonNewPage = document.querySelector('#ButtonLoadNextPage').onclick = () => {fadeOut(Page, 500); setTimeout(Zoom, 750); setTimeout(NextPageLoading, 5000); setTimeout(LoadNextPage, 5500)};
//Background swaps
function Zoom() {const element = document.getElementById("Page"); element.classList.remove("bodyMain"); element.classList.add("bodyA");}
function NextPageLoading() {const element = document.getElementById("Page"); element.classList.remove("bodyA"); element.classList.add("bodyB");}

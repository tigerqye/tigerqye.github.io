var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  var slides = document.getElementsByClassName("mySlides");
  if ((slideIndex + n - 1) < 0){
    slides[slides.length-1].style.animationName = "left_slide";
  }
  else if(n < 0)
  {
    slides[(slideIndex + n - 1) % slides.length].style.animationName = "left_slide";
  }
  else{
    slides[(slideIndex + n - 1) % slides.length].style.animationName = "right_slide";
  }
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "flex";
} 

function copyEmail(){
	document.querySelector("#emailAddress").select();
	document.execCommand("copy");
  alert("Copied!");
}

function openMenu(){
  var menu = document.querySelector("#smallmenu");
  if(menu.style.display == "none")
  {
    menu.style.display = "flex";
  }
  else {
    menu.style.display = "none";
  }
}
let imageIndex=1;
function plusSlides(n) {
  showSlides(imageIndex += n);
}

function currentSlide(n) {
  showSlides(imageIndex = n);
}

function showSlides(n) {
  let x;
  let slides = document.getElementsByClassName("item");
  if (n > slides.length) {imageIndex = 1}
  for (x = 0; x < slides.length; x++) {
      slides[x].style.display = "none";  
  }
  slides[imageIndex-1].style.display = "block";  
}

function showSlides(n) {
    let x;
    let slides = document.getElementsByClassName("item2");
    if (n > slides.length) {imageIndex = 1}
    for (x = 0; x < slides.length; x++) {
        slides[x].style.display = "none";  
    }
    slides[imageIndex-1].style.display = "block";  
  }

  $(document).ready(function(){
    $("#showbtn").click(function(){
        $("#skills").fadeOut();
    });
});

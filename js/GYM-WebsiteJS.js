/* Tel1 max length */
document.getElementById("tel1").maxLength="11";
/* Just entering numbers */
function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}
/* ---------------------------- */
/* Choose a date sliding */
var len=document.getElementById("chooseAdate").innerHTML.length;
words=" Choose a date";
var k=words.length;
function sliding(){
if(k<=0)
{
  k=len;  
}
if(k>=0)
{
  document.getElementById("chooseAdate").innerHTML=words.substring(k-1);
  k--;
}
}
setInterval (sliding, 200); 
/* Brand id coloring */
var x=0;
function colorOfBrand()
{
  if(x==0)
  {
    document.getElementById("brandId").style.color="blue";
    x++;
  }
  else if(x==1)
  {
    document.getElementById("brandId").style.color="yellow";
    x++;
  }
  else if(x==2)
  {
    document.getElementById("brandId").style.color="white";
    x++;
  }
  else if(x==3)
  {
    x=0;
  }
}
setInterval (colorOfBrand, 500); 
/* -------------------------------------------- */
/* Changing the background color of Page2-Boxes */
z=0;
const boxvalue=["cbox1","cbox2","cbox3","cbox4","cbox5","cbox6"]
function changeTheColor(){
w="white";
b="black";
function ccw(a){document.getElementById(a).style.backgroundColor="white"}
function ccb(a){document.getElementById(a).style.backgroundColor="black"}
if(z==0){ccw("cbox1");ccb("cbox2");ccb("cbox3");ccb("cbox4");ccb("cbox5");ccb("cbox6"); z++}
else if(z==1){ccw("cbox2");ccb("cbox1");ccb("cbox3");ccb("cbox4");ccb("cbox5");ccb("cbox6"); z++}
else if(z==2){ccw("cbox3");ccb("cbox1");ccb("cbox2");ccb("cbox4");ccb("cbox5");ccb("cbox6"); z++}
else if(z==3){ccw("cbox4");ccb("cbox1");ccb("cbox3");ccb("cbox2");ccb("cbox5");ccb("cbox6"); z++}
else if(z==4){ccw("cbox5");ccb("cbox1");ccb("cbox3");ccb("cbox4");ccb("cbox2");ccb("cbox6"); z++}
else if(z==5){ccw("cbox6");ccb("cbox1");ccb("cbox3");ccb("cbox4");ccb("cbox5");ccb("cbox2"); z=0}
}
setInterval (changeTheColor, 1000); 
/* SLIDING PHOTOS */
      var slideIndex = 0;
      showSlides();
      function showSlides() {
          var i;
          var slides = document.getElementsByClassName("Sliding");
          var dots = document.getElementsByClassName("dot");
          for (i = 0; i < slides.length; i++) {
             slides[i].style.display = "none";  
          }
          slideIndex++;
          if (slideIndex> slides.length) {slideIndex = 1}    
          for (i = 0; i < dots.length; i++) {
              dots[i].className = dots[i].className.replace(" active", "");
          }
          slides[slideIndex-1].style.display = "block";  
          dots[slideIndex-1].className += " active";
          setTimeout(showSlides, 2000); 
      }

/* ------------------------------------------- */





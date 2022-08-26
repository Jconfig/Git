function typeEffect(element, speed) {
	var text = element.innerHTML;
	element.innerHTML = "";
	
	var i = 0;
	var timer = setInterval(function() {
    if (i < text.length) {
      element.append(text.charAt(i));
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
}


// application
var speed = 200;
var text = document.querySelector('#text');
//var para = document.querySelector('#p');
var delay = text.innerHTML.length * speed + speed;

// type affect to header
typeEffect(text, speed);


// type affect to body
//setTimeout(function(){
  //p.style.display = "inline-block";
  //typeEffect(p, speed);
//}, delay);
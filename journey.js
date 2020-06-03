//document.getElementById('mainText').innerHTML.replace(/(<([^>]+)>)/ig,"").length>0


//document.getElementById("cardFooterLoaded").childNodes[0].click();
//document.getElementsByClassName("close")[2].click();

//setTimeout(document.querySelectorAll('[data-identifier="randomini_coolguy@hotmail.com"]')[0].click(),2*1000);

var intervalLoginIDx = 0;
var intervalLoginID = setInterval(function () {

   // Your logic here
   try {
  document.querySelectorAll('[data-identifier="randomini_coolguy@hotmail.com"]')[0].click();
  window.clearInterval(intervalLoginID);
  console.log("Login Success!")
}
catch(err) {
  console.log("Login element not found...")
}

   if (++intervalLoginIDx === 10) {
       window.clearInterval(intervalLoginID);
	   console.log("Giving up on autologin.")
   }
}, 1000);




var delayDuration = 3*60*60*1000; //In Milliseconds

var timedBlink = false;

var ofs = 0;

var btn = document.getElementById('editorSubmit');
var blink = setInterval(blink, 10);
btn.style.backgroundColor = '#00BFE6';
var timeOut = setTimeout(startTimedBlink, delayDuration);


btn.onclick = function() {
   clearInterval(blink);
   ofs=0;
   btn.style.backgroundColor = '#00BFE6';
   timedBlink = false;
   clearTimeout(timeOut);
   timeOut = setTimeout(startTimedBlink, delayDuration);
};

function startTimedBlink() {
  clearInterval(blink);
  blink = setInterval(blinkF, 10);
  timedBlink = true;
}



function startBlink() {
  clearInterval(blink);
  blink = setInterval(blinkF, 10);
}

function stopBlink() {
  clearInterval(blink);
  ofs = 0;
}

function resetBlinker() {
  clearInterval(blink);
  ofs = 0;
}

function blinkF(){
    btn.style.backgroundColor = 'rgba('+255*Math.abs(Math.sin(ofs))+',0,0,1)';
    ofs += 0.05;
	//If clicked away and was in the process of submitting, will continue blinking even after entry box is blanked.
	//This code checks and fixes that.
	if(document.getElementById('mainText').innerHTML.replace(/(<([^>]+)>)/ig,"").length==0){
		if(timedBlink==false){
		stopBlink();
		btn.style.backgroundColor = '#00BFE6';
		}
	}
}

window.onblur = function() {
	if(document.getElementById('mainText').innerHTML.replace(/(<([^>]+)>)/ig,"").length>0){
		//If user clicks away while there's content inside (the regex strips HTML)
		startBlink();
	}else{
		if(timedBlink==false){
		stopBlink();
		btn.style.backgroundColor = '#00BFE6';
		}
	}
	document.getElementById("pageScroller").scrollTo({ top: 0, behavior: 'smooth' });
}












var rapidCloseModal;
setTimeout(loadMore,5*1000);
rapidCloseModal = setInterval(closeModal,100);
setTimeout(stopRapidModal, 10*1000);
setTimeout(autoLoad,100);

function loadMore(){
    document.getElementById("cardFooterLoaded").childNodes[0].click()
}

function closeModal(){
    document.getElementsByClassName("close")[2].click();
}

function stopRapidModal(){
	clearInterval(rapidCloseModal);
}

function autoLoad(){
if(document.getElementById("pageScroller").scrollTop + $(window).height() + 100 > document.getElementsByClassName("page-content-wrapper")[0].offsetHeight){
	loadMore();
	setTimeout(autoLoad,2*1000);
}else{
setTimeout(autoLoad,100);
}
}



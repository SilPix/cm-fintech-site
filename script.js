var menuBtn = document.getElementById("menu-btn");
var menu = document.querySelector(".menu");

var widgetList = document.querySelectorAll(".widget-content");

function showMenu(){
	if(menu.classList.contains("hidden")){
		menu.classList.remove("fade-out");
		menu.classList.remove("hidden");

		menu.classList.add("fade-in");
	}else{
		menu.classList.remove("fade-in");

		menu.classList.add("fade-out");
		setTimeout(() => {menu.classList.add("hidden");}, 280);
	}
}

function showContent(i) {
	widgetList[i].classList.remove("slide-out");
	widgetList[i].classList.remove("hidden");

	widgetList[i].classList.add("slide-in");
}

function hideContent(i) {
	widgetList[i].classList.remove("slide-in");
	
	widgetList[i].classList.add("slide-out");
	setTimeout(() => {widgetList[i].classList.add("hidden");}, 110);
}

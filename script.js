var menuBtn = document.getElementById("menu-btn");
var	menu = document.querySelector(".menu");

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
var i = 0;
var menuMob = document.querySelector('.menu-mobile');


document.addEventListener('DOMContentLoaded' , function() {

	window.onresize = function(){
		if(document.body.clientWidth <= 700) {
			document.querySelector('.header-menu').style.display = "none";
			menuMob.style.display = "block";
			document.querySelector('.header').style.flexDirection = "row";
		}

		else if(document.body.clientWidth <= 1199) {
			document.querySelector('.header-menu').style.display = "block";
			document.querySelector('.header').style.flexDirection = "column";
			menuMob.style.display = "none";
		}

		else {
			document.querySelector('.header-menu').style.display = "block";
			menuMob.style.display = "none";
			document.querySelector('.header').style.flexDirection = "row";
		}
	}

	if(document.body.clientWidth <= 700) {
		document.querySelector('.header-menu').style.display = "none";
		menuMob.style.display = "block";
		document.querySelector('.header').style.flexDirection = "row";
	}


	
	else {
		document.querySelector('.header-menu').style.display = "block";
		menuMob.style.display = "none";
	}

});

function changeImg() {
	var images = ['img/menu-mobile-close.png','img/menu-mobile.png'];
	document.querySelector('.menu-mobile > img').setAttribute('src' , images[i]);
	menuMob.classList.toggle('close');

	if(menuMob.classList.contains('close')) {
		document.querySelector('.main').style.display = "none";
		document.querySelector('.back-mobile').style.display = "block";
	}
	else {
		document.querySelector('.main').style.display = "block";
		document.querySelector('.back-mobile').style.display = "none";
	}

	i++;

	if(i>1) {
		i=0;
	}
}

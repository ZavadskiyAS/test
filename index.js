// ============================== header ============================

const headerHide = document.querySelector(".header");

const headerSroll = window.onwheel = e => {
	if (e.deltaY >= 1) {
		headerHide.classList.add("headerHide");
	} else if (e.deltaY <= 1) {
		headerHide.classList.remove("headerHide");
	}
}

window.addEventListener("scroll", headerSroll);


// =========================  sidebar  ==============================

const sidebarHide = document.querySelector(".sidebar");
const content = document.querySelector(".content");

function sidebar() {
	if (window.innerWidth >= 700) {
		sidebarHide.classList.remove('hide');
	} else {
		sidebarHide.classList.add('hide');
	}
}

function contentMaxWidth() {
	if (window.innerWidth >= 700) {
		content.classList.remove('contentMaxWidth');
	} else {
		content.classList.add('contentMaxWidth');

	}
}
sidebar();
setTimeout(contentMaxWidth, 100);


// =====================================================================
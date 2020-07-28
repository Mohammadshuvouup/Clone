const sayingParent = document.querySelector(".sayings");
// const sayings = document.querySelectorAll(".saying");
const sayings = Array.from(sayingParent.children);
const trackNav = document.querySelector(".tracks");
const trackDots = Array.from(trackNav.children);
// const trackDots = document.querySelectorAll(".track");
const totalLength = sayings.length;

let currentActives = 0;
// console.log(Array.isArray(sayings));
// console.log(Array.isArray(trackDots));

function reset() {
	for (let i = 0; i < totalLength; i++) {
		sayings[i].style.opacity = "0";
	}
}

// slider initializer

function init() {
	reset();
	sayings[0].style.opacity = "1";
}

trackNav.addEventListener("click", (e) => {
	const targetDot = e.target.closest(".track");

	if (!targetDot) return;
	else {
		reset();
		for (let j = 0; j < totalLength; j++) {
			trackDots[j].classList.remove("activeTrack");
			if (trackDots[j] == e.target) {
				currentActives = j;
				console.log("target");
			}

			sayings[j].classList.remove("currentActive");
		}
		// sayings[currentActives].style.visibility = "visible";
		sayings[currentActives].style.opacity = "1";
		currentActives++;
		e.target.classList.add("activeTrack");
	}
	const currentSlide = sayingParent.querySelector(".currentActive");
});

init();

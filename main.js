const elRed = document.querySelector('.red');
const elYellow = document.querySelector('.yellow');
const elgreen = document.querySelector('.green');

function red() {
	elRed.classList.add('active');
	elYellow.classList.remove('active');
	elgreen.classList.remove('active');
}

function yellow() {
	elYellow.classList.add('active');
	elRed.classList.remove('active');
	elgreen.classList.remove('active');
}

function green() {
	elgreen.classList.add('active');
	elYellow.classList.remove('active');
	elRed.classList.remove('active');
}

setInterval(() => {
	setTimeout(() => {
		red();
	}, 0);

	setTimeout(() => {
		yellow();
	}, 3000);

	setTimeout(() => {
		green();
	}, 4000);
}, 7000);

function increm() {
	const count = document.querySelector('.counter');
	count.textContent++;
}
const hoverImg = document.getElementById('item1');
hoverImg.onmouseover = picMovingIn;
const firstImage = document.getElementById('image1');

function picMovingIn() {
	console.log(firstImage);
	firstImage.style.display = 'none';
}
